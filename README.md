# daily-grind-frontend

A lightweight frontend for the **Daily Grind** application. It is served by a small Node.js/Express static file server and communicates with the [daily-grind-backend](https://github.com/chrisG074/daily-grind-backend) API.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install Dependencies](#install-dependencies)
  - [Environment Variables](#environment-variables)
  - [Run Locally](#run-locally)
- [Docker](#docker)
- [API Integration](#api-integration)

---

## Tech Stack

| Layer    | Technology           |
|----------|----------------------|
| Runtime  | Node.js 18           |
| Server   | Express 4            |
| Frontend | Vanilla HTML/CSS/JS  |
| Container | Docker (Alpine)     |

---

## Project Structure

```
daily-grind-frontend/
├── public/
│   └── index.html      # Main page served to the browser
├── server.js           # Express server – serves static files & injects runtime config
├── Dockerfile          # Container image definition
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Install Dependencies

```bash
npm install
```

### Environment Variables

| Variable              | Default                  | Description                          |
|-----------------------|--------------------------|--------------------------------------|
| `PORT`                | `3000`                   | Port the Express server listens on   |
| `REACT_APP_API_URL`   | `http://localhost:5000`  | Base URL of the backend API          |

> **Note:** The variable is named `REACT_APP_API_URL` for historical reasons – this project uses plain HTML/JS, not React.

The server exposes a `/config.js` endpoint that injects `REACT_APP_API_URL` into the browser at runtime via `window.APP_CONFIG.API_URL`.

### Run Locally

```bash
# Optional: set the backend URL
export REACT_APP_API_URL=http://localhost:5000

npm start
```

The application is now available at <http://localhost:3000>.

---

## Docker

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

---

## API Integration

The frontend calls the backend's `/api/ping` endpoint to verify connectivity. The backend URL is read at runtime from `window.APP_CONFIG.API_URL`, which is injected by the server via `/config.js`. This means no rebuild is required when changing the backend URL – simply set the `REACT_APP_API_URL` environment variable before starting the server.

