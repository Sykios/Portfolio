# Portfolio Website - Laurenz Bilek

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://choosealicense.com/licenses/mit/)

> A modern, responsive portfolio website showcasing my software engineering skills, projects, and professional experience. Built with modern web technologies and designed with user experience in mind.

## 🌟 Live Demo

**[View Live Portfolio →](https://laurenz-bilek.vercel.app)**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Development Workflow](#development-workflow)
- [Performance & SEO](#performance--seo)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a comprehensive showcase of me as a person and my technical abilities as a software engineering student at TU Wien. It demonstrates proficiency in modern web development technologies while maintaining clean, maintainable code architecture.

### 🎨 Design Philosophy
- **Clean & Modern**: Minimalist design with intuitive navigation
- **Responsive First**: Mobile-optimized with progressive enhancement
- **Accessibility**: WCAG compliant with semantic HTML and proper contrast ratios
- **Performance**: Optimized for speed with lazy loading and efficient rendering

## ✨ Features

### 🔧 Technical Features
- **📱 Fully Responsive Design** - Optimized for all device sizes
- **🌙 Dark/Light Mode** - Automatic theme switching based on user preference
- **⚡ Performance Optimized** - Next.js 15 with Turbopack for lightning-fast builds
- **📧 Contact Form Integration** - Server-side email handling with Resend API
- **🎨 Interactive UI Elements** - Smooth animations and transitions
- **📊 Dynamic Skills Visualization** - Animated progress bars and skill categorization
- **🔍 SEO Optimized** - Meta tags, structured data, and semantic HTML

### 💼 Professional Features
- **Project Showcase** - Detailed project cards with live demos and source code links
- **Skills Assessment** - Comprehensive technical skills breakdown with proficiency levels
- **Social Integration** - Direct links to LinkedIn and GitHub profiles

## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 19](https://react.dev/)** - Latest React with concurrent features

### Backend & Services
- **[Resend](https://resend.com/)** - Email API for contact form functionality
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sykios/Portfolio.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── api/
│       │   └── contact/
│       │       └── route.ts          # Contact form API endpoint
│       ├── globals.css               # Global styles
│       ├── layout.tsx                # Root layout component
│       └── page.tsx                  # Home page
├── components/
│   ├── contact-form.tsx              # Contact form with validation
│   ├── footer.tsx                    # Site footer
│   ├── navbar.tsx                    # Navigation with scroll progress
│   ├── project-card.tsx              # Project showcase cards
│   └── skills-section.tsx            # Reusable skills component
├── public/
│   └── laurenz-bilek-cover-pic.png   # Profile image
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🔧 Key Components

### Navigation System
- **Smooth scrolling** navigation between sections
- **Progress indicator** showing scroll position
- **Mobile-responsive** hamburger menu
- **Active section** highlighting

### Contact Form
- **Client-side validation** with TypeScript
- **Server-side email processing** using Resend API
- **Error handling** and user feedback
- **Responsive design** with accessibility features

### Skills Visualization
- **Modular component architecture** for reusability
- **Dynamic progress bars** with smooth animations
- **Categorized skill display** (Frontend, Backend, Tools & DevOps)
- **TypeScript interfaces** for type safety

### Project Showcase
- **Interactive project cards** with hover effects
- **Status indicators** (Completed, In Progress, Planned)
- **Technology stack** highlighting
- **Direct links** to live demos and source code

## 🔄 Development Workflow

### Branch Strategy
```bash
main              # Production branch
├── development   # Staging branch
└── feature/*     # Feature branches
```

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code consistency
- **Component-based architecture** for maintainability
- **Responsive design principles** throughout

### Deployment
- **Automatic deployment** via Vercel
- **Preview deployments** for all branches
- **Production builds** optimized for performance

## ⚡ Performance & SEO

### Performance Optimizations
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **Minimal bundle size** with tree shaking
- **Fast refresh** during development with Turbopack

### SEO Features
- **Semantic HTML** structure
- **Meta tags** optimization
- **Open Graph** and Twitter Card support
- **Sitemap** generation
- **Structured data** markup

## 📈 Project Highlights

### Technical Achievements
- **Modern Architecture**: Leveraging Next.js 15's latest features including App Router
- **Type Safety**: Comprehensive TypeScript implementation with custom interfaces
- **Component Reusability**: Modular design with reusable components like SkillsSection
- **Performance First**: Optimized for Core Web Vitals and user experience
- **Professional Grade**: Production-ready code with proper error handling

### Development Best Practices
- **Clean Code**: Well-structured, readable, and maintainable codebase
- **Git Workflow**: Professional branching strategy with meaningful commits
- **Documentation**: Comprehensive README and inline code documentation
- **Testing Ready**: Component structure suitable for unit and integration testing

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Laurenz Bilek** - Software Engineering Student @ TU Wien

- 💼 [LinkedIn](https://www.linkedin.com/in/laurenz-bilek-48445b210/)
- 🐙 [GitHub](https://github.com/Sykios)
- 📧 [Contact Form](https://laurenz-bilek.vercel.app#contact)

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*