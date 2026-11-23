# AMG ONE Showcase

A learning project: a Mercedes-AMG ONE showcase website built with React and TypeScript. The current interface includes a hero section, performance specifications, a gallery, mobile navigation and scroll-based animation.

This is a vehicle showcase, not a verified AI assistant or a production booking service. The Reserve buttons are presentation elements in the current interface.

## Stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4
- Motion for animation
- Lucide React icons

## Run locally

Use a current Node.js version compatible with the dependencies in `package-lock.json`, and npm.

```sh
npm ci
npm run dev
```

The development script starts Vite on port 3000 and listens on all interfaces. Open `http://localhost:3000`. Only expose the development server on a network you trust.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the built site locally. |
| `npm run lint` | Run TypeScript checks with `tsc --noEmit`. |
| `npm run clean` | Remove `dist/` using a POSIX shell command. |

There is no `npm test` script in the current package file. Build and type-check results have not been verified as part of this documentation update.

## Project layout

- `src/App.tsx`: the showcase interface, navigation, specifications and image gallery.
- `src/`: application entry point and styles.
- `index.html`: HTML entry point.
- `vite.config.ts`: React, Tailwind and development-server configuration.
- `package.json`: dependencies and scripts.

## API keys and configuration

The current showcase interface in `src/App.tsx` does not require an AI API call. The repository includes `@google/genai` and a Vite definition for `process.env.GEMINI_API_KEY`, but that alone does not make this an AI-powered application.

Do not put a real private API key into a browser build. The Vite definition can substitute the value into client-side code if referenced. Any future AI integration should keep secrets on a server. Never commit real credentials or a local environment file.

## Images and usage

The interface loads vehicle photos from Wikimedia Commons. Check each original file's license and attribution requirements before publishing or reusing the images. This learning project does not claim affiliation with Mercedes-Benz or Mercedes-AMG.

## Before deployment

Run the build and type checks, review the image licenses and API-key handling, and test the interface on desktop and mobile. A successful build is not a security audit or a claim of production readiness.

## Photo credits and project license

See [CREDITS.md](CREDITS.md) for the nine original photo sources, authors and licenses. The interface also includes photo credits and an unofficial student-project notice. No affiliation with Mercedes-Benz or Mercedes-AMG is claimed. There is no project LICENSE file; this README does not grant an open-source license for the code. Third-party photos and dependencies retain their own licenses.
