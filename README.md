This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install npm dependencies by running the following command:

```bash
npm install
```

Ensure that you have a valid apikey from OpenWeather if not, be sure to register and login to retreive your key [OpenWeather API key](https://home.openweathermap.org/api_keys)

Add API key to your environment variables

// in your project's .env file add the following
```
weatherAPI="YOUR_API_KEY"
```

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## TechStack and libraries used

- [Next.js](https://nextjs.org)
- [Next.js API Routes](https://nextjs.org/blog/building-apis-with-nextjs)
- [TanStack](https://tanstack.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [open-weather-icons](https://www.npmjs.com/package/open-weather-icons?activeTab=code)

## Design Decisions

### Temperature Display
Temperature is displayed in ***Celsius*** (°C).

### TanStack Query

Used for data fetching and server state management.
This provides:
- Built-in loading and error states
- Automatic caching of API responses
- Simple refetching logic

### Next.js API Routes
The OpenWeather API call is proxied through a Next.js API route (`/api/weather`). This keeps the API key secure and on the server-side and avoids exposing it on the Client side.

## Links for Github and Deployment on Vercel

- [Github repository](https://github.com/tony2tones/search-city-weather)
- The Vercel deployed [City weather search application](https://search-city-weather-dlw9mk8dz-tony2tones-projects.vercel.app/) 
