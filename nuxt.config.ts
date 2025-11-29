import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Совместимость (Nuxt требует эту строку)
  compatibilityDate: "2025-07-15",

  // DevTools
  devtools: { enabled: false },

  // Глобальные стили
  css: ["~/assets/css/main.css"],

  // Vite настройки
  vite: {
    plugins: [tailwindcss()],
  },

  // Nuxt модули
  modules: ["@nuxt/image", "@nuxt/content"],

  // SEO, мета-теги
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  // Автоимпорт компонентов
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Runtime переменные
  runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.NUXT_PUBLIC_YANDEX_MAPS_API_KEY || "",
      yandexMetricaId: process.env.NUXT_PUBLIC_YANDEX_METRICA_ID || "",
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "",
      apiCallbackEndpoint:
        process.env.NUXT_PUBLIC_API_CALLBACK_ENDPOINT || "/callback",
    },
  },

  // Nitro сервер
  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
    compressPublicAssets: true,

    // Глобальный кэш SSR → Ускоряет сайт ×5-10
    routeRules: {
      "/**": { cache: false },
    },
  },

  // Nuxt Image
  image: {
    quality: 85,
    format: ["webp", "avif", "jpg"],
  },

  // Экспериментальные оптимизации
  experimental: {
    payloadExtraction: false,
  },
});
