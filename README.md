# AI-Powered Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase" />
</div>

A modern personal portfolio website for Tarikur Rahman, built with Next.js, React, TypeScript, Tailwind CSS, and an AI-powered assistant. The project showcases services, skills, projects, testimonials, and contact information while giving visitors a smart chatbot experience powered by Gemini.

## Project Overview

This project is a professional portfolio website designed to present Tarikur Rahman's work, experience, and digital services in a clean and engaging format. It combines traditional portfolio sections with modern web design and interactive features such as:

- A strong landing page and hero section
- Skills and service highlights
- Featured project portfolio cards
- Client reviews and testimonials
- Contact and social links
- AI assistant chatbot for visitor interaction
- Data-driven content support through Supabase and fallback portfolio JSON

The application is built in a way that is easy to customize, maintain, and deploy for personal branding or client portfolio use.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Supabase
- Google Generative AI / Gemini
- shadcn/ui components

## Project Structure

```bash
AI-Powered-Portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── page.tsx
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   └── lib/
├── .gitignore
├── components.json
├── eslint.config.js
├── LICENSE
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── bun.lockb
```

## How to Install & Run

### 1. Clone the repository

```bash
git clone https://github.com/tarikurrahman/AI-Powered-Portfolio.git
cd AI-Powered-Portfolio
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

### 3. Set up environment variables

Create a file named `.env.local` in the project root and add the following values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_gemini_api_key
```

> The app can also fallback to local portfolio data if Supabase is not configured, but the chatbot and dynamic data work best with valid environment values.

### 4. Run the development server

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

### 5. Production build

```bash
npm run build
npm run start
```

## Features

- Responsive portfolio design for desktop, tablet, and mobile
- Modern hero section with strong personal branding
- Skills and service sections for professional presentation
- Project showcase with UX-focused cards and links
- Client review and testimonial section
- AI-powered assistant for answering visitor questions
- Support for Supabase-powered dynamic content
- Clean, reusable component structure with Tailwind CSS and shadcn/ui
- Fast and modern user experience with animations and micro-interactions
- Contact and social profile integration for easy communication

## Key Functional Highlights

### AI Chat Assistant
The portfolio includes a floating chatbot that answers questions related to Tarikur Rahman's:

- Skills
- Services
- Projects
- Experience
- Contact information

This assistant uses an AI model and portfolio data to provide a conversational experience for visitors.

### Supabase Integration
The application is prepared to load portfolio-related data from Supabase while still supporting local static fallback data for development and resilience.

## About the Developer

**Name:** Tarikur Rahman

**GitHub:** https://github.com/tarikurrahman

**Portfolio:** https://yourtarikur.vercel.app/

**Social / Handle:** tarikurrahman08

**Email:** tarikurrahman2008@gmail.com

Tarikur Rahman is a developer focused on building modern, responsive, and user-friendly digital products. He works across frontend, backend, and e-commerce solutions, with a strong interest in performance, clean UI/UX, and practical business-driven web experiences.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you want to connect, collaborate, or discuss a project, you can reach out via:

- Email: tarikurrahman2008@gmail.com
- GitHub: https://github.com/tarikurrahman
- Portfolio: https://yourtarikur.vercel.app/

## Acknowledgements

This project was created using modern web technologies and design tools to deliver a professional personal brand experience. It is built to be simple to extend, easy to deploy, and suitable for showcasing work in a polished digital portfolio format.

---

Built with care for a modern, AI-enhanced personal portfolio experience.

