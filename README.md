# GrowMate - Professional Business Website

A modern, responsive React-based business website for GrowMate, featuring comprehensive business growth solutions and professional services.

## 🚀 Features

### ✅ Completed Features

- **Modern React Architecture**: Built with React 18, React Router, and modern hooks
- **Responsive Design**: Mobile-first approach with Flexbox and CSS Grid
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **Professional Navigation**: Sticky navbar with dropdowns and mobile menu
- **Hero Section**: Engaging landing section with animations and call-to-actions
- **Services Showcase**: Clean service cards with hover effects
- **Contact Forms**: Functional contact form with validation and success states
- **Footer**: Comprehensive footer with links, contact info, and newsletter signup
- **Page Structure**: All essential pages (Home, About, Services, Portfolio, Contact, Blog)
- **Interactive Elements**: Scroll-to-top button, loading states, animations
 - **SEO Ready**: Meta tags, Open Graph, and Twitter Card support
 - **Development Process UI**: Visual 6-step growth & delivery process (Discover → Optimize) with animated progress bars

### 🎨 Design Highlights

These UI/UX touches make the interface feel polished and professional:

- **Beautiful Gradient Badge**: Section headers (e.g., Testimonials) feature a modern gradient pill for instant visual hierarchy.
- **Smooth Fade-In Animations**: Key sections (hero, cards, testimonials) reveal gracefully for better engagement without clutter.
- **Interactive Hover Effects**: Subtle scaling and color transitions on buttons, navigation controls, and cards improve affordance.
- **Dark Mode Support**: Full theme inversion using CSS variables ensures consistent contrast and readability.
- **Fully Responsive Layout**: Optimized breakpoints across mobile, tablet, and desktop—no horizontal scrolling or layout shifts.
- **Brand-Aligned Color System**: Primary / secondary pairing with accent gradients used sparingly for emphasis (badges, stats, CTAs).
- **Clean, Uncluttered Composition**: Generous spacing rhythm, restrained shadow usage, and consistent typography scale keep content scannable.

> These design decisions focus on clarity, accessibility, and conversion while maintaining a modern aesthetic.

### 🔧 Technical Features

- **Performance Optimized**: Lazy loading, code splitting ready
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **CSS Variables**: Consistent theming system
- **Font Integration**: Google Fonts (Inter + Poppins)
- **Icon System**: React Icons (Feather icons)
- **Animations**: CSS keyframes and smooth transitions

## 📁 Project Structure

```txt
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Main layout wrapper
│   ├── Navbar/          # Navigation component
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero section
│   ├── Services/        # Services showcase
│   ├── ContactForm/     # Contact form
│   ├── CTA/             # Call-to-action sections
│   └── ...              # Other components
├── pages/               # Page components
│   ├── Home/            # Homepage
│   ├── About/           # About page
│   ├── Services/        # Services page
│   ├── Portfolio/       # Portfolio page
│   ├── Contact/         # Contact page
│   └── Blog/            # Blog page
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── App.js               # Main app component
├── index.js             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb)
- **Secondary**: Green (#10b981)
- **Accent**: Amber (#f59e0b)

### Typography

- **Headings**: Poppins (700-800 weight)
- **Body**: Inter (400-600 weight)

### Spacing

- Consistent spacing scale (0.25rem increments)
- Section padding: 5rem vertical

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/danujaadikari/GrowMate---Business-Website.git
cd GrowMate---Business-Website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📱 Pages

1. **Homepage** - Hero, services overview, testimonials, CTA
2. **About** - Company story, team, values
3. **Services** - Detailed service listings, pricing, process
4. **Portfolio** - Case studies, project showcases
5. **Contact** - Contact form, business info, map
6. **Blog** - Articles, insights, resources

## 🎯 Business Features

- **Service Showcase**: Business consulting, digital marketing, web development
- **Structured Delivery Process**: Transparent 6-phase methodology (Discovery, Planning, Design, Development, Launch, Optimization)
- **Contact Forms**: Lead generation with form validation
- **Newsletter Signup**: Email collection for marketing
- **Social Media Integration**: Links to all social platforms
- **SEO Optimization**: Meta tags, structured data ready
- **Analytics Ready**: Google Analytics integration ready

## 🔧 Customization

### Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
}
```

### Content Updates
- Update company info in `src/components/Footer/Footer.js`
- Modify services in `src/components/Services/Services.js`
- Update contact details in `src/components/ContactInfo/ContactInfo.js`

## 📦 Dependencies

### Core
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.8.0

### UI & Styling
- React Icons 4.7.1
- Framer Motion 8.5.2 (for animations)

### Development
- React Scripts 5.0.1
- Testing utilities included

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Lighthouse Score: 90+ (all categories)
- Mobile-first responsive design
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**GrowMate**
- Email: danujaadikari2001@gmail.com
- Phone: +94 78 662 1310
- Location: Colombo, Sri Lanka
- Website: [growmate.com](https://growmate.com)

**Developer: Danuja Adikari**
- Email: danujaadikari2001@gmail.com
- Phone: +94 78 662 1310
- Location: Colombo, Sri Lanka

## 🎉 Acknowledgments

- React team for the amazing framework
- Feather Icons for beautiful icons
- Google Fonts for typography
- Create React App for project scaffolding

---

