# Execution Flow

## Startup Flow
1. Browser loads index.html
2. Vite injects main.jsx
3. main.jsx renders <App />
4. App loads all UI sections

## Component Render Order
App.jsx
  ├─ Navbar
  ├─ HeroSection
  ├─ About
  ├─ Gallery
  ├─ Trainers
  ├─ PricingSection
  ├─ Testimonial
  ├─ ContactSection
  └─ Footer
