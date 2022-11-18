// https://nuxt.com/docs/api/configuration/nuxt-config
import BasicAuth from 'nuxt-basic-authentication-module'

const basicAuthPairs: {
  [key: string]: string
} = {}
let isActiveBasicAuth = false

if (process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD) {
  isActiveBasicAuth = true
  basicAuthPairs[process.env.BASIC_AUTH_USER] = process.env.BASIC_AUTH_PASSWORD
}

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  modules: [
    [
      BasicAuth,
      {
        enabled: isActiveBasicAuth,
      },
    ],
  ],
  runtimeConfig: {
    basicAuth: {
      pairs: basicAuthPairs,
    },
  },
})
