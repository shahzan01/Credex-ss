# SoftSell - Marketing Website

![SoftSell Logo](public/favicon.png)

A responsive marketing website for SoftSell, a platform that helps businesses recover value from unused software licenses.

## 🚀 Live Demo
## Live Site : https://soft-sell-fawn.vercel.app/
   ## Gdrive : https://drive.google.com/file/d/1m1A-zz31LF2_f1Ob8KkontNlzfzfTDsC/view
<div align="center">
    


  <a href="https://youtu.be/gWDoxEnFSzI" target="_blank">
    <img src="https://img.youtube.com/vi/gWDoxEnFSzI/hqdefault.jpg" alt="Watch the demo video" width="640" height="360" />
  </a>
</div>

## ✨ Features

- **Responsive Design** - Optimized for all device sizes from mobile to desktop
- **Animated UI** - Engaging animations using Framer Motion to create a dynamic user experience
- **Dark/Light Mode** - User-toggleable theme preference with smooth transitions
- **Smooth Scroll Navigation** - Enhanced UX with smooth scrolling between sections
- **Modern Design** - Clean, professional aesthetic with an orange-focused color scheme
- **Optimized Performance** - Fast loading times with Next.js optimizations
- **AI-Powered Chatbot** - Secure and responsive customer support chatbot using Llama model

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive, utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for sophisticated animations and transitions
- **Development**: TypeScript for type safety
- **AI Integration**:
  - [Groq SDK](https://groq.com) for fast inference
  - [Llama model](https://ai.meta.com/llama/) for natural language processing
  - Secure API implementation with server-side processing

## 🤖 Chatbot Implementation

The AI-powered chatbot enhances user engagement and provides instant support:

- **Backend Implementation** - Runs on `/api/chat` route to protect API keys and ensure security
- **AI Model** - Utilizes the Llama model via Groq's high-performance inference API
- **Secure Architecture** - Client-side widget communicates with server-side API to prevent exposure of credentials
- **Contextual Awareness** - Maintains conversation context for natural interactions
- **Custom Styling** - Integrated with the site's design system for a cohesive look and feel
- **Responsive Design** - Adapts to all screen sizes with an expandable/collapsible UI
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
- **API Routes**: Secure endpoints for chatbot functionality

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

3. Set up environment variables:

```bash
# Create .env.local file
touch .env.local

# Add your Groq API key
echo "GROQ_API_KEY=your_api_key_here" >> .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Building for Production

```bash
npm run build
npm run start
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Design inspiration from modern SaaS websites
- Icons and animations inspired by current web design trends
- Created for demonstration purposes only
- Llama model by Meta AI
- Groq for providing high-performance inference API
