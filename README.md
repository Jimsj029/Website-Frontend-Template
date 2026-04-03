# Business Website Frontend Template

A clean React + CSS starter for business websites.

This project is built as an editable frontend template, with sections split into reusable components and content stored in one central file.

## Tech Stack

- React (JavaScript)
- Vite
- Plain CSS (no CSS framework)

## Run Locally

1. Install dependencies:
	 npm install
2. Start development server:
	 npm run dev
3. Build for production:
	 npm run build

## Template Structure

- src/data/siteContent.js
	- Main content source (brand, hero text, services, testimonials, footer info)
- src/components/
	- Reusable UI sections
- src/App.jsx
	- Page composition (order of sections)
- src/index.css
	- Global tokens, typography, and base styles
- src/App.css
	- Section and component styles

## How To Customize

1. Edit content in src/data/siteContent.js.
2. Add, remove, or reorder sections in src/App.jsx.
3. Adjust design tokens in src/index.css.
4. Tune section-level styling in src/App.css.

## Notes

- Layout is responsive for desktop and mobile.
- Typography and color tokens are centralized for quick branding.
- This is intentionally simple so you can extend it for different industries.
