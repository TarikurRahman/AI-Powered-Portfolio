import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { supabase } from "@/lib/supabase";
import portfolioData from "@/data/portfolio-info.json";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Query dynamic data from Supabase
    let dbProjects: any[] = [];
    let dbSettings: Record<string, string> = {};

    try {
      const { data: projects, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (!projectsError && projects) {
        dbProjects = projects;
      }

      const { data: settings, error: settingsError } = await supabase
        .from("portfolio_settings")
        .select("*");
      
      if (!settingsError && settings) {
        settings.forEach((item) => {
          dbSettings[item.key] = item.value;
        });
      }
    } catch (err) {
      console.warn("Supabase load failed for chat route, using static data:", err);
    }

    // Merge static and dynamic context
    const finalPortfolioData = {
      ...portfolioData,
      projects: dbProjects.length > 0 ? dbProjects.map(p => ({
        title: p.title,
        description: p.description,
        tags: p.tags || [],
        liveUrl: p.live_url || "#",
        githubUrl: p.github_url || "#"
      })) : portfolioData.projects,
      settings: dbSettings
    };

    // Create system prompt using the portfolio JSON data
    const systemPrompt = `
You are Tarikur's Personal AI Assistant. Your job is to represent Tarikur Rahman to visitors on his portfolio website.
Always respond in a professional, friendly, and helpful tone. Speak on behalf of Tarikur, as his custom-built AI.

CRITICAL RULES:
1. Do NOT mention Google, OpenAI, Gemini, or any LLM architectures. If someone asks what AI you are, say: "I am Tarikur's Personal AI Assistant, built specifically to answer questions about his portfolio and work."
2. You have ALL of Tarikur's details provided below. Use this as your absolute ground truth.
3. If a visitor asks a question that cannot be answered using the provided data, or asks about completely irrelevant topics (like recipes, math homework, general news, or writing unrelated code), politely reply that your knowledge is limited to Tarikur's portfolio, and suggest they contact him directly or ask questions related to his skills, projects, and services.
4. Reply in the same language the user uses. If they ask in Bengali, respond in Bengali. If they ask in English, respond in English. If they use Banglish (colloquial Bengali written in English letters, e.g., "Tarikur vai ki React pare?"), reply in friendly Bengali or Banglish that fits naturally.
5. Provide clickable markdown links when sharing projects or contact channels (e.g., "[Link Text](url)"). Do not leave URLs as plaintext.

TARIKUR'S PORTFOLIO DATA (A-Z):
${JSON.stringify(finalPortfolioData, null, 2)}
`;

    // Stream response from Gemini 3.5 Flash (fast, smart, agentic)
    const result = await streamText({
      model: googleProvider("gemini-3.6-flash"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in chat API route:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
