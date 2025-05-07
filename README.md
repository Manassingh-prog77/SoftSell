# SoftSell

_A responsive, single-page marketing website for a fictional software resale startup built with React, Vite, and Material-UI._

---

## Project Overview

**SoftSell** is a modern, one-page marketing website demonstrating a clear, engaging user experience for reselling unused software licenses. The site features:

- **Hero Section:** Bold headline, subheading, and primary & secondary CTAs.
- **How It Works:** A three-step visual guide using icons and animations.
- **Why Choose Us:** Four feature tiles highlighting key benefits.
- **Customer Testimonials:** Two sample reviews with avatars & ratings.
- **Contact / Lead Form:** Frontend-validated form collecting user details.
- **Theme Toggle:** Light and dark mode via MUI’s ThemeProvider.
- **Animations:** Subtle section reveals and interactive feedback using Framer Motion.

Replica of a production-ready landing page, optimized for responsiveness and accessibility.

---

## Tech Stack

- **Framework:** React 18 + [Vite](https://vitejs.dev/) (fast build & HMR)
- **UI Library:** Material-UI v5 (@mui/material & @mui/icons-material)
- **Animation:** Framer Motion
- **Meta & SEO:** react-helmet-async
- **Styling:** MUI’s `sx` prop, custom theming, Google Fonts
- **Form Validation:** Built-in HTML5 & custom hooks

---

## Project Structure

```

softsell/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/             # Images, SVGs, fonts
│   ├── components/         # Reusable UI components
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── ChatWidget.jsx
│   ├── hooks/              # Custom React hooks (e.g. useForm)
│   ├── theme.js            # MUI theme with light/dark toggle
│   ├── Seo.jsx             # React Helmet setup
│   ├── main.jsx            # App entrypoint
│   ├── App.jsx             # Layout & routing
│   └── index.css           # Global styles
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

````

---

## Getting Started

### Prerequisites

- Node.js ≥14.x
- npm ≥6.x or yarn ≥1.x

### Installation & Local Dev

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/softsell.git
   cd softsell
````

2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start development server**

   ```bash
   npm run dev
   ```
4. **Open in browser**
   Visit `http://localhost:5173` (or the port shown in terminal).

### Build for Production

```bash
npm run build
npm run preview
```

Then deploy the `dist/` folder to your preferred hosting (Vercel, Netlify, GitHub Pages).

---

## Design & UX Choices

* **Color Palette:** Tech-friendly purples & blues, high-contrast text.
* **Typography:** Sans-serif primary font with bold headings and readable body text.
* **Responsive Layout:** Flexbox & CSS Grid ensure fluid, mobile-first design.
* **Animations:** Framer Motion for subtle reveals and hover feedback.
* **Accessibility:** ARIA labels on forms, keyboard-focus styles, and semantic HTML.

---

## Features

| Feature             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Hero Section        | Engaging CTA with gradient text and actionable buttons |
| How It Works        | Visual three-step process with icons and motion        |
| Why Choose Us       | Key selling points in responsive tiles                 |
| Testimonials        | Avatar-based dummy reviews with star ratings           |
| Contact Form        | Frontend validation with instant Snackbar feedback     |
| Light/Dark Mode     | Toggle persisted in `localStorage`                     |
| SEO Optimization    | Page `<title>`, `<meta>` tags via React Helmet         |
| Chat Widget (Bonus) | Mocked LLM Q\&A interface with example questions       |

---

## Deployment

The site is deployed on **Netlify** :


