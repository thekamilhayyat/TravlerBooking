// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui","@nuxtjs/google-fonts", "vue3-carousel-nuxt", '@pinia/nuxt',"@nuxt-alt/proxy"],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/images/Logo.png' }
      ]
    }
  },
  alias:{
    assets: "/<rootDir>/assets"
  },
  colorMode: {
    preference: "light",
  },
  ui: {
    icons: ["carbon"],
  },
  css: ['~/assets/css/main.scss'],
  proxy:{
    debug: false,
    experimental: {
        listener: false
    },
    proxies: {
        // with options
        '/api': {
            target: 'http://18.232.81.249/',
            changeOrigin: true,
        },
    }
  },
  googleFonts: {
    families: {
      // Make sure to replace or add the Poppins font with the desired weights
      Poppins: [100, 300, 400, 500, 700, 900]
    },
    display: 'swap', // Optional: Adds `&display=swap` to the URL.
  },
  tailwindcss:{
config:{
    theme: {
        extend: {
          colors: {
            "paris-daisy": {
              DEFAULT: "#FFF974",
              50: "#FFF974",
              100: "#FFF858",
              200: "#FFF520",
              300: "#E7DD00",
              400: "#AFA700",
              500: "#FFF974",
              600: "#3E3C00",
              700: "#060600",
              800: "#000000",
              900: "#000000",
              950: "#000000",
            },
          },
          maxWidth: {
            '128': '32rem',
          }

        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
      },
}
}
});
