# Nexus Weather

A simple, responsive weather app for checking current conditions in cities around the world. Search by city name to see the temperature, country, humidity, and wind speed.

## Features

- Search for a city using the search button or the Enter key
- View current temperature in Celsius, country code, humidity, and wind speed
- Loads Taunsa by default
- Dark, responsive interface

## Built with

- HTML
- CSS with Tailwind CSS utility classes
- Vanilla JavaScript
- [Vite](https://vite.dev/)
- [OpenWeatherMap Current Weather API](https://openweathermap.org/current)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) and npm
- An OpenWeatherMap API key

### Setup

1. Clone the repository and open its directory:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your API key:

   ```env
   VITE_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite in your browser.

## API key safety

The app calls OpenWeatherMap directly from the browser. Vite variables prefixed with `VITE_` are included in the client-side bundle, so this API key is **not secret**. Restrict the key with the provider where possible, and use a backend to protect it if it must remain private.

Keep `.env` out of version control. The repository's `.gitignore` already excludes it. If a key has been committed or exposed, revoke it and create a replacement.

## Project structure

```text
.
├── images/          # App icons and images
├── src/
│   ├── input.css    # Tailwind CSS input
│   └── output.css   # Stylesheet loaded by the app
├── index.html
└── script.js        # Weather API request and search behavior
```

## License

The project metadata declares the ISC license. See `package.json`; a separate license file is not currently included.
