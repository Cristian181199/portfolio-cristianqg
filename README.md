# Personal Portfolio & Blog - Cristian Quintero García

A modern, multilingual portfolio website with an integrated blog, built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multilingual Support**: English, Spanish, and German with automatic language detection
- **Dark/Light Theme**: Persistent theme toggle with system preference detection
- **Blog System**: MDX-powered blog with search, tags, and reading time calculation
- **Contact Form**: Integrated with Resend API for email notifications
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Sitemap generation, meta tags, and semantic HTML
- **Type-Safe**: Full TypeScript support with strict mode
- **Performance**: Static site generation with minimal JavaScript

## 🛠️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Content**: MDX for blog posts
- **Email**: Resend API
- **Analytics**: Google Analytics 4
- **Fonts**: Inter (UI) & JetBrains Mono (code)

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Cristian181199/portfolio-cristianqg.git
cd portfolio-cristianqg
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy `.env.example` to `.env` and add your API keys:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:4321`.

## 📦 Build

To create a production build:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## 🌍 Internationalization

The site supports three languages:
- English (default, `/`)
- Spanish (`/es`)
- German (`/de`)

Translations are managed in JSON files located in `src/i18n/`.

## 📝 Adding Blog Posts

Create a new MDX file in `src/content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2025-01-12
lang: en  # en, es, or de
tags: ["Tag1", "Tag2"]
draft: false
---

Your content here...
```

## 🎨 Color Palette

- **Background Dark**: `#18181B`
- **Text Light**: `#FEF7ED`
- **Primary/Accent**: `#EA580C`
- **Secondary**: `#71717A`

## 📁 Project Structure

```
portfolio-cristianqg/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── sections/    # Homepage sections
│   ├── content/         # Blog posts (MDX)
│   │   └── blog/
│   ├── i18n/            # Translation files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   │   ├── api/         # API endpoints
│   │   ├── blog/        # Blog pages
│   │   ├── es/          # Spanish pages
│   │   └── de/          # German pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Deployment

The site is deployed on a Hetzner server using Dokploy, which automatically deploys changes from the GitHub repository.

### Manual Deployment

1. Build the project:
```bash
pnpm build
```

2. Upload the `dist/` folder to your server

3. Configure your server to serve the static files

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

## 👤 Author

**Cristian Quintero García**

- Website: [cristianqg.dev](https://cristianqg.dev)
- GitHub: [@Cristian181199](https://github.com/Cristian181199)
- LinkedIn: [cristian-quintero-garcia](https://www.linkedin.com/in/cristian-quintero-garcia/)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts from [Fontsource](https://fontsource.org/)

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
