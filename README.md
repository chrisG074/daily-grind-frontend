# Daily Grind — Frontend

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Alpine-2496ED?logo=docker&logoColor=white)

A modern, fully-typed e-commerce storefront for **Daily Grind** — an online shop specialising in flags and flag-related products. Built with React 18, TypeScript, Vite, Tailwind CSS, and Shadcn/ui, the app delivers a fast, accessible, and internationalised shopping experience out of the box.

Users can browse products across three categories (Country Flags, Corporate Flags, Accessories), filter and sort listings, configure custom flags, manage a shopping cart, and complete checkout — all with support for four languages (Dutch, English, German, French) and three currencies (EUR, GBP, USD).

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Locally](#run-locally)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Docker](#docker)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Tech Stack

| Layer               | Technology                              |
|---------------------|-----------------------------------------|
| Frontend Framework  | React 18.3.1                            |
| Language            | TypeScript 5.6.3                        |
| Build Tool          | Vite 5.4.10                             |
| UI / Styling        | Tailwind CSS 3.4.15 + Radix UI          |
| Component Library   | Shadcn/ui (Radix primitives + Tailwind) |
| Form Library        | React Hook Form 7.71.2                  |
| Icons               | Lucide React 0.577.0                    |
| Containerisation    | Docker (Node 18 Alpine)                 |

---

## Project Structure

```
daily-grind-frontend/
├── public/
│   └── logo.jpg
├── src/
│   ├── App.tsx                    # Root application component & routing
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Global styles
│   ├── vite-env.d.ts              # Vite environment type declarations
│   ├── styles/
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx             # Site-wide navigation & language/currency switcher
│       ├── Footer.tsx
│       ├── HomePage.tsx           # Landing page
│       ├── ProductGrid.tsx        # Product listing with sort controls
│       ├── FilterSidebar.tsx      # Category & attribute filters
│       ├── FlagConfigurator.tsx   # Custom flag builder
│       ├── ShoppingCart.tsx       # Cart drawer / page
│       ├── CheckoutProgress.tsx   # Multi-step checkout indicator
│       ├── Payment.tsx            # Payment step
│       ├── FAQ.tsx
│       ├── Shipping.tsx
│       ├── Returns.tsx
│       ├── PrivacyPolicy.tsx
│       ├── TermsConditions.tsx
│       ├── CookiePolicy.tsx
│       ├── Newsletter.tsx
│       └── ui/                    # 46 reusable Shadcn/ui primitives
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── Dockerfile
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/) — the runtime required to install dependencies and run the dev server
- [npm](https://www.npmjs.com/) — comes bundled with Node.js

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/chrisG074/daily-grind-frontend.git
cd daily-grind-frontend
npm install
```

### Run Locally

```bash
# Optional: point the app at a running backend instance
export REACT_APP_API_URL=http://localhost:5000

npm run dev
```

The dev server starts at <http://localhost:3000> with hot-module replacement enabled.

---

## Available Scripts

| Script            | Description                                          |
|-------------------|------------------------------------------------------|
| `npm run dev`     | Start the Vite development server on port **3000**   |
| `npm run build`   | Type-check with `tsc` then produce a production build into `dist/` |
| `npm run preview` | Serve the production build locally for inspection    |
| `npm start`       | Alias for `npm run dev`                              |

---

## Environment Variables

Configure the app by setting the following variables in your shell or in a `.env` file at the project root:

| Variable             | Default                 | Description                                           |
|----------------------|-------------------------|-------------------------------------------------------|
| `PORT`               | `3000`                  | Port the development / preview server listens on      |
| `REACT_APP_API_URL`  | `http://localhost:5000` | Base URL of the [daily-grind-backend](https://github.com/chrisG074/daily-grind-backend) REST API |

> **Tip:** Create a `.env.local` file for local overrides — Vite automatically loads it and it is excluded from version control by default.

---

## Docker

A `Dockerfile` is included for containerised deployments. It uses a **Node 18 Alpine** base image to keep the image size small.

### Build the image

```bash
docker build -t daily-grind-frontend .
```

### Run the container

```bash
docker run -p 3000:3000 \
  -e REACT_APP_API_URL=http://localhost:5000 \
  daily-grind-frontend
```

The application will be accessible at <http://localhost:3000>.

---

## API Integration

This frontend is paired with the [daily-grind-backend](https://github.com/chrisG074/daily-grind-backend). Set the `REACT_APP_API_URL` environment variable to point the app at the correct backend instance before starting the server. No rebuild is necessary when switching environments — simply update the variable and restart the container or dev server.

---

## Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. **Make your changes** — keep commits focused and descriptive.
3. **Lint / build** before opening a PR:
   ```bash
   npm run build
   ```
4. **Open a Pull Request** against `main` with a clear description of what you changed and why.

> **Note:** There is currently no automated test suite configured for this project. When adding new components or logic, please include manual testing notes in your PR description.

---

## License

> ⚠️ **No LICENSE file is currently present in this repository.**

The maintainers intend to license this project under the **MIT License**. If you are a maintainer, please add a `LICENSE` file to the repository root to clarify the terms under which the code may be used, modified, and distributed.

