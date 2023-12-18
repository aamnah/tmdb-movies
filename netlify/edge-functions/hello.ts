import type { Config, Context } from '@netlify/edge-functions'

export default async function Hello(request: Request, context: Context) {
  return new Response('Hello world')
}

export const config: Config = { path: '/test' }
