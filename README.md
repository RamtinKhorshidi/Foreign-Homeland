# Foreign Homeland (2025)

**A Film by Armin Zarringhalam**

*Foreign Homeland* is a poignant cinematic journey tracking the first three weeks of an Iranian father and his three children after fleeing to Calgary, Canada. This interactive web experience serves as the official digital presence for the film, offering a bilingual (English/Persian) interface, detailed cast biographies, and exclusive premiere highlights.

## 🎬 Project Overview

This website provides a minimal, elegant, and cinematic experience tailored for both audiences and industry professionals. It is built as a highly optimized Single Page Application (SPA) without heavy framework dependecies, ensuring maximum performance and accessibility.

### ✨ Key Features

#### 🌍 Bilingual Support (Internationalization)
*   **English & Persian (Farsi)**: Full language support with instant toggling.
*   **RTL Layout**: Automatic Right-to-Left (RTL) layout adjustment and font switching (Vazirmatn for Persian) when in Farsi mode.
*   **Deep Linking**: URL parameter support (e.g., `/?lang=fa`) allows users to share direct links to the Persian version, enabling better social sharing and specific targeting.
*   **Persistence**: User language preference is saved via `localStorage`.

#### 🌓 Dynamic Theming
*   **Dark/Light Mode**: A robust theming system that respects system preferences by default but allows user override.
*   **Cinematic Toggle**: A custom-animated toggle switch with day/night visualizations.
*   **Persistence**: Theme choice is remembered across sessions.

#### 🖼️ Interactive Galleries & Modals
*   **Premiere Gallery**: An immersive, full-screen image gallery for the "Red Carpet Premiere" coverage.
    *   Includes keyboard navigation (Arrow keys, Escape).
    *   Smart background carousel pausing for performance.
*   **Biometric Cast Cards**: Interactive modals revealing detailed actor biographies and "Follow on Instagram" integrations.

#### 🚀 SEO & Performance
*   **Search Engine Optimization**: Fully optimized with comprehensive meta tags, Open Graph (OG) data for social sharing, and JSON-LD Schema markup for Google rich results.
*   **Technical SEO**: Implementation of `hreflang` tags for proper language indexing and a dynamic `sitemap.xml`.
*   **Performance**: 
    *   Lazy loading for off-screen images.
    *   Modular JavaScript architecture bundled for production.
    *   `IntersectionObserver` used for background animations to save battery on mobile devices.

## 🛠️ Technology Stack

*   **Core**: HTML5, Vanilla JavaScript (ES6+), CSS3 (Variables & Modular Architecture).
*   **Fonts**: 
    *   *English*: Cinzel (Headings), Lato (Body).
    *   *Persian*: Vazirmatn.
*   **Icons**: FontAwesome 6 & SVG Feather Icons.
*   **Hosting**: Firebase Hosting with global CDN.

## 🏆 Awards & Recognitions

*   **Best Canadian Feature Award**: Vancouver International Youth Film Festival.
*   **Best Actor Award**: Ramtin Khorshidi, Vancouver International Youth Film Festival.
*   **Best Debut Feature Film**: Makizhmithran International Film Festival.

## 🚀 Deployment

The project is configured for automated deployment via Firebase.

**Live URL**: [foreign-homeland-web.web.app](https://foreign-homeland-web.web.app)

---
© 2025 Armin Productions. All rights reserved.
