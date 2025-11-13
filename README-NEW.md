# Elite Digital Solutions - React + Vite + Tailwind CSS

A modern, high-performance website built with React, Vite, Tailwind CSS, and Framer Motion. Features stunning UI/UX, smooth animations, and comprehensive SEO optimization.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimal build performance
- 🎨 **Modern UI/UX** - Glassmorphism effects, smooth animations with Framer Motion
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **SEO Optimized** - React Helmet for meta tags, structured data, and social media cards
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🌙 **Dark Theme** - Beautiful dark theme with gold accents
- 🎭 **Custom Cursor** - Interactive custom cursor for desktop
- 📧 **Contact Form** - Integrated with Formspree for easy form submissions
- 💬 **WhatsApp Integration** - Quick contact via WhatsApp button

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: Axios + Formspree
- **SEO**: React Helmet Async
- **Smooth Scroll**: React Scroll

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Step 1: Install Dependencies

```powershell
npm install
```

Or with yarn:

```powershell
yarn install
```

### Step 2: Setup Environment (Optional)

If you want to use your own Formspree endpoint, update the form action in `src/components/Contact.tsx`:

```typescript
await axios.post('YOUR_FORMSPREE_ENDPOINT', formData)
```

### Step 3: Development Server

```powershell
npm run dev
```

The site will be available at `http://localhost:3000`

### Step 4: Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 5: Preview Production Build

```powershell
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services grid
│   ├── Stats.tsx          # Animated statistics
│   ├── Showcase.tsx       # Portfolio projects
│   ├── Experience.tsx     # Latest projects
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer with links
│   ├── LoadingScreen.tsx  # Loading animation
│   └── CustomCursor.tsx   # Custom cursor effect
├── App.tsx                # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    300: '#ffd700', // Gold color
    // Add more shades
  }
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change:

1. Update the Google Fonts link
2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
  display: ['YourDisplayFont', 'sans-serif'],
}
```

### Content

- Update project content in component files
- Replace images in `/public` folder
- Update meta tags in `src/App.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Other Platforms

Build command: `npm run build`
Output directory: `dist`

## 📊 SEO Optimization

The site includes:

- Meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card tags
- Structured data (JSON-LD) for search engines
- Semantic HTML
- Fast loading times
- Mobile optimization

## 🎯 Performance Features

- Code splitting and lazy loading
- Optimized images with lazy loading
- Minimized CSS and JS
- Tree shaking
- Fast refresh during development
- Production build optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

Copyright © 2025 Gouri Shanker - Elite Digital Solutions

## 📞 Contact

- **Email**: gourishanker0408@gmail.com
- **Phone**: +91 7893804498
- **Website**: https://www.elitedigitalsolutions.tech
- **LinkedIn**: [Gouri Shanker](https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/)

---

Made with ❤️ by Gouri Shanker
