# SoftSell - Marketing Website

![SoftSell Logo](public/softshell-logo.png)

A responsive marketing website for SoftSell, a platform that helps businesses recover value from unused software licenses.

## 🚀 Live Demo

[View the live site](#) <!-- Replace with actual deploy URL when available -->

## ✨ Features

- **Responsive Design** - Optimized for all device sizes from mobile to desktop
- **Animated UI** - Engaging animations using Framer Motion to create a dynamic user experience
- **Dark/Light Mode** - User-toggleable theme preference with smooth transitions
- **Smooth Scroll Navigation** - Enhanced UX with smooth scrolling between sections
- **Modern Design** - Clean, professional aesthetic with an orange-focused color scheme
- **Optimized Performance** - Fast loading times with Next.js optimizations

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive, utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for sophisticated animations and transitions
- **Typography**: Custom typography with responsive font sizing
- **Icons**: Custom SVG icons
- **Development**: TypeScript for type safety

## 🎨 Design Choices

### Color Palette

- **Primary Color**: Orange (#FF7E33) - Conveys energy, enthusiasm, and affordability
- **Background**: Light/dark mode adaptive backgrounds
- **Text**: High-contrast readable text that adapts to the selected theme
- **Accents**: Subtle gradient effects and shadows for depth

### Typography

- **Headings**: Bold, impactful headings with larger font sizes for hierarchy
- **Body**: Clean, readable text with appropriate line height and spacing
- **Responsive**: Font sizes adjust based on viewport width

### Layout Structure

The website follows a logical flow with these main sections:

1. **Hero Section** - Captivating introduction with animated 3D elements and call-to-action buttons
2. **How It Works** - Three-step process explanation with animated icons
3. **Why Choose Us** - Key benefits with hover-enhanced cards
4. **Testimonials** - Client testimonials with animated cards
5. **Contact Form** - Lead generation form with animated gradient backgrounds
6. **Footer** - Organized site links and copyright information

### Animation Philosophy

Animations were strategically implemented to:

- Enhance user engagement without distracting from content
- Guide user attention to important elements
- Create a sense of polish and quality
- Provide feedback for user interactions

## 📱 Responsive Design Strategy

- **Mobile-First Approach**: Designed for small screens first, then enhanced for larger viewports
- **Flexible Grid System**: Using Tailwind's grid system for consistent layouts
- **Component Adaptability**: Each component adjusts its layout based on screen size
- **Touch-Friendly**: Larger hit areas on mobile for better usability

## 🧩 Component Structure

The application is built with a modular component architecture:

- **Layout Components**: Base layout, Navbar, Footer
- **Section Components**: HeroSection, HowItWorksSection, WhyChooseUsSection, TestimonialsSection, ContactSection
- **UI Components**: ThemeToggle, ScrollAnimationWrapper, HeroAnimationBox, ChatWidget
- **Utility Functions**: Animations, smooth scrolling, theme management

## 💻 Development Approach

1. **Component-First**: Built each section as isolated components
2. **Progressive Enhancement**: Started with basic structure, then added styling and animations
3. **Performance Optimization**: Ensured animations run smoothly with proper optimization
4. **Accessibility Considerations**: Maintained proper contrast and semantic HTML
5. **Code Organization**: Structured code for maintainability and reusability

## 🔧 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/soft-sell.git
cd soft-sell
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Building for Production

```bash
npm run build
npm run start
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## �� Acknowledgements

- Design inspiration from modern SaaS websites
- Icons and animations inspired by current web design trends
- Created for demonstration purposes only
