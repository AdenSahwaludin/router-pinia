# frontend
# Vibe — Vue 3 + Vite Starter (Router · Pinia · ESLint · Prettier)

Comprehensive starter project and learning playground built with Vue 3, Vite, Vue Router and Pinia.
The UI uses a modern "liquid glass" (glassmorphism) theme and includes examples showing router usage, Pinia stores, and recommended development tooling.

This README follows common industry standards: clear project description, quickstart, scripts, architecture, contribution guidance, and troubleshooting tips.

## Table of contents
- Project overview
- Quickstart
- Scripts
- Project structure
- Coding conventions & tooling
- How to contribute
- Troubleshooting
- License & contact

## Project overview

- Framework: Vue 3 (Composition API)
- Bundler: Vite
- Routing: Vue Router 4
- State: Pinia
- Linting & formatting: ESLint + Prettier
- Theme: Liquid glass / glassmorphism UI

This repository is both a small app and a learning resource. It demonstrates:
- Router navigation and query parameters
- Pinia stores with actions/getters and history tracking
- Component-based design with reusable UI primitives
- Aesthetic modern CSS (backdrop-filter, gradients, animations)

## Quickstart (development)

Prerequisites: Node.js 18+ and npm (or yarn/pnpm).

1. Install dependencies

```powershell
npm install
```

2. Run dev server (Vite)

```powershell
npm run dev
```

3. Open in the browser: http://localhost:5173

## Useful scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint
- `npm run format` — run Prettier (if configured)

Adjust scripts in `package.json` as needed for your environment.

## Project structure (high level)

```
src/
	main.js            # app bootstrap
	App.vue            # root layout + navigation
	router/
		index.js         # Vue Router configuration
	stores/
		counter.js       # Pinia counter store (demo)
		user.js          # Pinia user/profile store (demo)
	views/
		Home.vue
		About.vue
		Counter.vue       # interactive counter demo
	components/
		BaseButton.vue    # reusable glass button
public/               # static assets
vite.config.js        # vite configuration
README.md
```

## Coding conventions & tooling

- ESLint enforces code quality (recommended VSCode extensions: ESLint, Volar)
- Prettier for consistent formatting
- Use `script setup` + Composition API for new components
- Prefer functional, small components and hoist shared logic to Pinia stores

Tip: Enable Vue Devtools and Volar in your editor for a much better DX.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/brief-description`
3. Make focused commits with conventional commit messages, e.g.:

```
feat(router): add query param handling to counter
fix(counter): prevent overflow beyond maxValue
docs(readme): improve instructions and examples
```

4. Run lint & tests (if any) before opening PR

5. Open a PR against `main` and explain the behaviors/changes

## Troubleshooting

- If the dev server fails: stop server, remove `node_modules` and reinstall
- If you get Vue template parse errors, check unclosed tags in `.vue` files
- If remote push fails due to permissions, verify SSH/HTTPS credentials and remote URL

## Pushing to remote (example commands)

These are the exact commands you provided; run from repo root:

```powershell
git branch -M main
git remote add origin https://github.com/AdenSahwaludin/router-pinia.git
git push -u origin main
```

If `origin` already exists, remove it first: `git remote remove origin` then add again.

## License & contact

Add your license file if this project is intended for public distribution.

Maintainer: Aden Sahwaludin

---
Generated and curated for learning modern Vue workflows and production-ready patterns.
