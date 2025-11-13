# Portfolio Website

A modern, interactive portfolio website built with Next.js 15, React 19, and Tailwind CSS 4. Features a stunning visual design with animated weather effects, smooth navigation, and a responsive layout.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15 App Router, React 19, and TypeScript
- **Interactive Weather Effects**: Toggle between shooting stars and rain animations
- **Smooth Navigation**: Animated navigation bar with scroll-based active state tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Performance Optimized**: Server-side rendering, optimized images, and minimal bundle size
- **Sections**:
  - About: Personal introduction with technology stack showcase
  - Timeline: Professional experience and education history
  - Projects: Portfolio of software engineering projects with live demos and GitHub links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zacbemis/InBrowserDesigner.git
cd InBrowserDesigner
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Tech Stack

### Core
- **Next.js** 15.5.4 - React framework with App Router
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety

### Styling
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **PostCSS** 8.5.6 - CSS processing

### Icons & Assets
- **React Icons** 5.5.0 - Icon library (Simple Icons for tech logos)

### Development
- **ESLint** 9.37.0 - Code linting
- **Next.js ESLint Config** - Next.js-specific linting rules

## 🏗️ Project Structure

```
InBrowserDesigner/
├── app/
│   ├── components/
│   │   ├── footer.tsx              # Footer with contact links
│   │   ├── navigation.tsx          # Animated navigation bar
│   │   ├── projects.tsx            # Projects showcase component
│   │   ├── rain-overlay.tsx        # Rain animation effect
│   │   ├── shooting-stars-overlay.tsx  # Shooting stars effect
│   │   ├── timeline.tsx            # Experience timeline component
│   │   └── weather-toggle.tsx      # Weather effect toggle button
│   ├── public/
│   │   └── assets/                 # Images and static assets
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout with metadata
│   ├── loading.tsx                 # Loading state component
│   ├── page.tsx                    # Home page
│   └── providers.tsx               # Client-side providers wrapper
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Key Components

### Navigation
Smooth-scrolling navigation bar with animated indicator that follows the active section. Automatically updates based on scroll position.

### Weather Effects
Toggle between two ambient animations:
- **Shooting Stars**: Animated stars streaking across the background
- **Rain**: Falling rain effect with realistic physics

### Timeline
Visual timeline showcasing education and work experience with images, dates, and descriptions.

### Projects
Grid layout of portfolio projects with:
- Project images
- Technology stack icons
- Links to live demos and GitHub repositories

## 🎯 Customization

### Adding Projects

Edit `app/page.tsx` and modify the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    image: yourImage,
    title: "Project Title",
    description: "Project description",
    technologies: [
      { name: "React", Icon: SiReact },
      // Add more technologies
    ],
    githubUrl: "https://github.com/...",
    websiteUrl: "https://...", // Optional
  },
  // Add more projects
];
```

### Adding Experience

Edit `app/page.tsx` and modify the `experiences` array:

```typescript
const experiences: Experience[] = [
  {
    id: 1,
    image: companyLogo,
    title: "Position Title",
    company: "Company Name",
    date: "Start Date - End Date",
    description: "Description of role and achievements",
  },
  // Add more experiences
];
```

### Changing Colors & Styles

The site uses Tailwind CSS 4. Modify `app/globals.css` for global theme changes or update utility classes directly in components.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🌐 Deployment

This site is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Zac Bemis**
- Portfolio: [zacbemis.com](https://zacbemis.com)
- GitHub: [@zacbemis](https://github.com/zacbemis)
- LinkedIn: [Zac Bemis](https://linkedin.com/in/zac-bemis)

## 🙏 Acknowledgments

- Background image: Yosemite Valley at dusk
- Icons: [Simple Icons](https://simpleicons.org/) via React Icons
- Inspiration: Modern portfolio design trends

---

Built with ❤️ using Next.js and React