declare interface ViteEnv {
  VITE_BASE_URL: string
  VITE_APP_TITTLE: string
}
interface ImportMetaEnv extends ViteEnv {
  __: unknown
}
