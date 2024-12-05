# Kasa-vite ![Version](https://img.shields.io/badge/version-0.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

Description not available.

## Features

- **Fast Development**: Built with Vite for blazing-fast HMR.
- **Modern React**: Leverages React for building interactive UIs.
- **Lightweight**: Minimal dependencies for a fast and efficient app.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url> (a ajouter apres)
cd kasa-vite
npm install
```

## Usage

Run the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- **public/**: Static files served directly.
- **src/**: Main source code for the React application.
- **index.html**: Entry HTML file.
- **vite.config.js**: Configuration for Vite.

## Scripts

Here are the scripts available in the project:

| Script      | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `predeploy` | npm run build                                                             |
| `deploy`    | gh-pages -d dist                                                          |
| `dev`       | vite                                                                      |
| `build`     | vite build                                                                |
| `lint`      | eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0 |
| `preview`   | vite preview                                                              |

## Dependencies

### Runtime

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.22.3

### Development

- **@types/react**: ^18.2.66
- **@types/react-dom**: ^18.2.22
- **@vitejs/plugin-react**: ^4.2.1
- **eslint**: ^8.57.0
- **eslint-plugin-react**: ^7.34.1
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.6
- **gh-pages**: ^6.1.1
- **sass**: ^1.74.1
- **vite**: ^5.2.0

## License

This project is licensed under the MIT License.

---

Generated with ❤️ by Kda-sparkle.
