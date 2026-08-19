import { google } from "@ai-sdk/google";
import { generateText } from "ai";

type IntegrationStatus = {
  configured: boolean;
  ok: boolean;
  error?: string;
};

function getErrorCategory(error: unknown): string {
  const message = error instanceof Error ? error.message.toLowerCase() : "unknown error";

  if (message.includes("api key") || message.includes("unauthorized") || message.includes("401")) {
    return "invalid or unauthorized credentials";
  }
  if (message.includes("fetch") || message.includes("network") || message.includes("connect")) {
    return "network error";
  }
  return "request failed";
}

async function checkSupabase(): Promise<IntegrationStatus> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return { configured: false, ok: false, error: "missing Supabase environment variables" };
  }

  try {
    const response = await fetch(`${url}/auth/v1/settings`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        configured: true,
        ok: false,
        error: response.status === 401 || response.status === 403
          ? "invalid or unauthorized credentials"
          : `Supabase request returned HTTP ${response.status}`,
      };
    }

    return { configured: true, ok: true };
  } catch (error) {
    return { configured: true, ok: false, error: getErrorCategory(error) };
  }
}

async function checkGemini(): Promise<IntegrationStatus> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return { configured: false, ok: false, error: "missing Gemini environment variable" };
  }

  try {
    await generateText({
      model: google("gemini-3.6-flash"),
      prompt: "Reply with the single word OK.",
      maxOutputTokens: 5,
    });

    return { configured: true, ok: true };
  } catch (error) {
    return { configured: true, ok: false, error: getErrorCategory(error) };
  }
}

export async function GET() {
  const [supabase, gemini] = await Promise.all([checkSupabase(), checkGemini()]);
  const ok = supabase.ok && gemini.ok;

  return Response.json(
    {
      ok,
      environment: {
        googleGeminiKey: Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY),
        geminiKey: Boolean(process.env.GEMINI_API_KEY),
        supabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
        supabaseAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
        adminPasscode: Boolean(process.env.ADMIN_PASSCODE),
      },
      integrations: { supabase, gemini },
    },
    { status: ok ? 200 : 503 },
  );
}