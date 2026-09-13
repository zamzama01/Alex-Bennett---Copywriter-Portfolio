# Alex Bennett — Copywriter Portfolio

A responsive, editorial single-page portfolio website designed for **Alex Bennett**, a creative copywriter specializing in brand voice development, high-converting website copy, and content strategy.

![Project Preview](public/preview-hero.png)

---

## ✨ Features

- **Hero Section**: Bold typography with customizable greeting, animated accent badges, and direct call-to-action.
- **My Story**: Narrative section introducing Alex's journey, philosophy, and featured quote.
- **Services ("What I Can Do for You")**: Interactive breakdown of core offerings (Brand Voice Development, Website & Landing Page Copy, Content Writing & Strategy) with bulleted deliverables.
- **Portfolio Showcase ("A Few Things I'm Proud Of")**: Filterable, card-based case studies with modal detail previews displaying client goals, results, and copy samples.
- **Client Testimonials**: Authentic social proof cards with client titles, companies, and pull-quotes.
- **Interactive Contact Section**: Contact form with validation and direct email/social links.
- **Fully Responsive**: Mobile-first design with a sliding navigation drawer, touch-friendly interactions, and smooth scrolling.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: JavaScript (React JSX)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/alex-bennett-portfolio.git
   cd alex-bennett-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the Vite development server with hot reloading |
| `npm run build` | Compiles and bundles production-ready static assets into `/dist` |
| `npm run preview` | Locally serves the built production distribution for inspection |
| `npm run lint` | Runs Vite build checks to validate code integrity |

---

## 📁 Project Structure

```
├── public/               # Static assets & sample images
├── src/
│   ├── assets/           # Icons and graphics
│   ├── components/       # UI sections & modal components
│   │   ├── ContactSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── StorySection.jsx
│   │   └── TestimonialsSection.jsx
│   ├── data/
│   │   └── portfolioData.js  # Project content, services, testimonials
│   ├── App.jsx           # Root application shell
│   ├── index.css         # Global styles & font imports
│   └── main.jsx          # React DOM entry point
├── index.html            # Main HTML document
├── package.json          # Dependencies & scripts
└── vite.config.ts        # Vite configuration
```

---

## 🎨 Customization

All portfolio content (services, projects, client reviews, contact information) can easily be modified in:
- `src/data/portfolioData.js`

To update colors, typography, or styling, edit the Tailwind utility classes or custom variables in:
- `src/index.css`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
