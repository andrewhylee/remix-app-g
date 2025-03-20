# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Custom Notes

### Tailwind breakpoints

Breakpoint prefix Minimum width CSS
sm 40rem (640px) @media (width >= 40rem) { ... }
md 48rem (768px) @media (width >= 48rem) { ... }
lg 64rem (1024px) @media (width >= 64rem) { ... }
xl 80rem (1280px) @media (width >= 80rem) { ... }
2xl 96rem (1536px) @media (width >= 96rem) { ... }
