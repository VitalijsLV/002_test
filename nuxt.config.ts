// https://nuxt.com/docs/api/configuration/nuxt-config
//import { resolve } from "path";
export default defineNuxtConfig({
  //alias: {
//	"@": resolve(__dirname, "/"),
  //},
  
  modules: [
    '@vueuse/nuxt',
	'@pinia/nuxt',
  ],
  
  pinia: {
    storesDirs: ['./stores/**'],
  },
  
  devtools: { enabled: true },
  
  css: ['~/assets/scss/global.scss'],
  
})
