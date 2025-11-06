# ReadMe - Dashboard Project

## Overview

This folder contains a responsive React.js dashboard built using Vite + Tailwind CSS, featuring a fixed header, collapsible sidebar, and dynamic content sections with an auto-playing carousel.. The project is prepared for evaluator usage. All required source files are inside the `dashboard` folder. If `node_modules` is not included (the evaluator will regenerate by running `npm install`).

---

## What is included (inside `dashboard/`)

* `package.json` (project dependencies + scripts)
* `vite.config.js` (Vite config)
* `tailwind.config.js` and `postcss.config.js`
* `index.html` (app entry)
* `src/`

  * `main.jsx` (React entry)
  * `App.jsx` (App root)
  * `components/CarouselSection.jsx`
  * `components/ContentSection.jsx`
  * `components/ContentTile.jsx`
  * `components/Header.jsx`
  * `components/Sidebar.jsx`
  * `index.css` (Tailwind imports + small custom css)
* `public/` (static assets if any)
* `ReadMe.md` (this file)

Notes:

* The project uses Tailwind CSS and lucid-react for icons.

---

## Prerequisites (Evaluator)

* Node.js installed (v16 or newer recommended)
* npm (comes with Node.js) 
* Internet access for downloading npm packages

---

## Quick setup steps (what the evaluator should do)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dashboard.git
   cd dashboard

3. Install dependencies (this will create `node_modules`):

   ```bash
   npm install
   ```

   If `lucid-react` is not present for any reason, run:

   ```bash
   npm i lucide-react
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at the address printed by Vite (usually `http://localhost:5173`).


## npm scripts (present in package.json)

* `dev` — start Vite dev server

---

## File naming & structure guidelines followed

* Components are placed in `src/components/`.
* CSS is in `src/index.css` and relies on Tailwind utility classes.
* Code is written using functional React components and hooks.

---

Thank you !