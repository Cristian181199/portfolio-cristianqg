# 🚀 Portfolio & Blog - Cristian Quintero García

A modern, multilingual portfolio website with an integrated blog, built with Astro, TypeScript, and Tailwind CSS. Features dark/light mode, Google Analytics 4 integration, and a functional contact form powered by Resend.

[![Deploy to Dokploy](https://img.shields.io/badge/Deploy%20to-Dokploy-blue)](https://dokploy.com)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## ✨ Features

### 🌐 Multilingual Support
- **3 Languages**: English, Spanish (Español), German (Deutsch)
- Automatic language detection based on URL
- Easy language switching with persistent preference
- SEO-optimized with proper `hreflang` tags

### 🎨 Modern Design
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Clean UI**: Minimalist design focused on content

### 📝 Blog System
- **Markdown/MDX Support**: Write blog posts in Markdown with component support
- **Syntax Highlighting**: Code blocks with Shiki (GitHub Dark theme)
- **Reading Time**: Automatic calculation of estimated reading time
- **Search Functionality**: Filter posts by title or content
- **Tags System**: Organize posts with tags

### 📬 Contact Form
- **Email Integration**: Powered by Resend API
- **Full Validation**: Client-side and server-side validation
- **Multilingual**: Error messages in all supported languages
- **Spam Protection**: Validation to prevent empty or whitespace-only submissions
- **Success Feedback**: User-friendly success/error messages

### 📊 Analytics
- **Google Analytics 4**: Full GA4 integration
- **Custom Events**: Track form submissions, project views, theme changes
- **Privacy-Focused**: IP anonymization enabled for GDPR compliance
- **6 Custom Events**:
  - Form submissions
  - External link clicks
  - Project views
  - Language changes
  - Theme changes
  - Scroll depth tracking (25%, 50%, 75%, 100%)

### 🔧 Technical Features
- **SSR & SSG Hybrid**: Server-side rendering for dynamic pages, static for blog
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap
- **Fast Performance**: Optimized images, lazy loading, minimal JavaScript
- **Type-Safe**: Full TypeScript support
- **Docker Ready**: Production-ready Dockerfile with multi-stage builds
- **CI/CD**: GitHub Actions workflow for automated deployments
- **Health Checks**: Built-in `/health` endpoint for monitoring
- **Zero Downtime**: Automatic rollbacks on health check failures

## 🛠 Tech Stack

- **Framework**: [Astro 5](https://astro.build) - The web framework for content-driven websites
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX support
- **Email**: [Resend](https://resend.com/) - Modern email API
- **Analytics**: [Google Analytics 4](https://analytics.google.com/) - Web analytics
- **Deployment**: [Dokploy](https://dokploy.com) - Self-hosted PaaS
- **Node Adapter**: [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) - Node.js SSR

## 📦 Project Structure

```
portfolio-cristianqg/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD workflow
├── public/                     # Static assets
│   └── favicon.svg
├── src/
│   ├── components/            # Reusable components
│   │   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LanguageSelector.astro
│   │   └── GoogleAnalytics.astro
│   ├── content/              # Content collections
│   │   ├── blog/            # Blog posts (Markdown/MDX)
│   │   └── config.ts        # Content schema
│   ├── i18n/                # Internationalization
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── de.json
│   │   └── utils.ts
│   ├── layouts/             # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/               # Routes
│   │   ├── api/            # API endpoints
│   │   │   └── contact.ts  # Contact form handler
│   │   ├── blog/           # Blog pages
│   │   ├── health.ts       # Health check endpoint
│   │   └── index.astro     # Home page
│   └── styles/
│       └── global.css       # Global styles
├── astro.config.mjs         # Astro configuration
├── Dockerfile               # Production Docker image
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **pnpm**: v8 or higher (recommended) or npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Cristian181199/portfolio-cristianqg.git
   cd portfolio-cristianqg
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```bash
   # Resend API Key (for contact form)
   RESEND_API_KEY=your_resend_api_key_here
   
   # Google Analytics 4 Measurement ID
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**:
   ```bash
   pnpm dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production

```bash
pnpm build
pnpm preview
```

## 🐳 Docker Deployment

### Build the Docker image

```bash
docker build -t portfolio-cristianqg .
```

### Run the container

```bash
docker run -p 3000:3000 \
  -e RESEND_API_KEY=your_key \
  -e GA_MEASUREMENT_ID=G-XXXXXXXXXX \
  portfolio-cristianqg
```

### Health Check

The application includes a health check endpoint:
```bash
curl http://localhost:3000/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T18:00:00.000Z",
  "service": "portfolio-cristianqg"
}
```

## 🔄 CI/CD with GitHub Actions

The repository includes a GitHub Actions workflow that automatically builds and pushes Docker images to GitHub Container Registry (ghcr.io) on every push to the `main` branch.

### Setup

**No additional configuration needed!** The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub Actions.

1. **Push to main branch**:
   ```bash
   git push origin main
   ```
   
2. **Monitor the build**:
   - Go to the Actions tab in your repository
   - Watch the "Build and Push Docker Image" workflow
   
3. **View your image**:
   - Go to your repository page
   - Click on "Packages" in the right sidebar
   - Your image will be at `ghcr.io/cristian181199/portfolio-cristianqg:latest`

## 📱 Deploying to Dokploy

### Prerequisites

- Dokploy instance running
- GitHub Container Registry image (built automatically by GitHub Actions)

### Deployment Steps

1. **Create a new application in Dokploy**:
   - Source Type: **Docker**
   - Docker Image: `ghcr.io/cristian181199/portfolio-cristianqg:latest`
   - Registry: Select "GitHub Container Registry" or leave default

2. **Add environment variables**:
   - `RESEND_API_KEY`
   - `GA_MEASUREMENT_ID`

3. **Configure health check** (Advanced → Cluster Settings → Swarm Settings):
   ```json
   {
     "Test": [
       "CMD",
       "curl",
       "-f",
       "http://localhost:3000/health"
     ],
     "Interval": 30000000000,
     "Timeout": 10000000000,
     "StartPeriod": 30000000000,
     "Retries": 3
   }
   ```

4. **Configure update policy** (Update Config):
   ```json
   {
     "Parallelism": 1,
     "Delay": 10000000000,
     "FailureAction": "rollback",
     "Order": "start-first"
   }
   ```

5. **Set up domain**:
   - Go to Domains tab
   - Generate a domain or add your custom domain
   - Set port to `3000`

6. **Deploy**:
   - Click "Deploy"
   - Monitor deployment in real-time

### Auto-Deploy with Webhooks

Enable automatic deployments:

**Option 1: GitHub Actions Webhook (Recommended)**

1. Get Dokploy webhook URL from Deployments tab
2. Add to GitHub repository secrets as `DOKPLOY_WEBHOOK_URL`
3. Update workflow to call webhook after successful build

**Option 2: Manual trigger**

Simply redeploy in Dokploy after each push (image updates automatically)

## 🔧 Configuration

### Adding a New Language

1. Create a new JSON file in `src/i18n/` (e.g., `fr.json`)
2. Add translations following the existing structure
3. Update `src/i18n/utils.ts` to include the new language
4. Add language routes in `src/pages/`

### Customizing the Theme

Edit `src/styles/global.css` to change colors, fonts, and other design tokens:

```css
:root {
  --color-primary: 59 130 246; /* blue-500 */
  --color-secondary: 100 116 139; /* slate-500 */
  /* Add your custom colors */
}
```

### Adding Blog Posts

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2025-01-15
lang: en
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

## 📊 Analytics Events

The following custom events are tracked:

| Event | Description | Category |
|-------|-------------|----------|
| `form_submission` | Contact form sent | Contact |
| `click` | External link clicked | External Link |
| `view_project` | Project GitHub link clicked | Project |
| `language_change` | Language switched | Engagement |
| `theme_change` | Theme toggled | Engagement |
| `scroll_depth` | Page scroll milestones | Engagement |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Cristian Quintero García**

- Website: [cristianqg.dev](https://cristianqg.dev)
- GitHub: [@Cristian181199](https://github.com/Cristian181199)
- LinkedIn: [cristian-quintero-garcia](https://www.linkedin.com/in/cristian-quintero-garcia/)

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing web framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Resend](https://resend.com) - Email API
- [Dokploy](https://dokploy.com) - Deployment platform

---

Made with ❤️ and ☕ by Cristian Quintero García
