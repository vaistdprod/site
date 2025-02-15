import type { NextConfig } from 'next'
import path from 'path'

const contentSecurityPolicy = `
  default-src 'self';
  media-src 'self' blob: https:;
  script-src 
    'self' 
    'unsafe-inline' 
    'unsafe-eval' 
    blob:
    https://*.google.com 
    https://*.google.cz
    https://*.googleapis.com 
    https://*.gstatic.com
    https://va.vercel-scripts.com
    https://kit.fontawesome.com
    https://ka-f.fontawesome.com
    https://vercel.live;
  style-src 
    'self' 
    'unsafe-inline' 
    https://fonts.googleapis.com
    https://ka-f.fontawesome.com;
  img-src 
    'self' 
    data:
    blob:
    https:;
  font-src 
    'self' 
    data:
    https://fonts.gstatic.com
    https://ka-f.fontawesome.com;
  connect-src 
    'self'
    data:
    https://*.google.com
    https://*.google.cz
    https://*.googleapis.com
    https://*.gstatic.com
    https://va.vercel-scripts.com
    https://kit.fontawesome.com
    https://ka-f.fontawesome.com;
  frame-src 
    'self'
    https://*.google.com;
  worker-src 
    'self'
    blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  manifest-src 'self';
`.replace(/\s{2,}/g, ' ').trim()

const cspHeader = {
  key: 'Content-Security-Policy',
  value: contentSecurityPolicy,
}

const securityHeaders = [
  cspHeader,
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: 'GET, POST, PUT, DELETE, OPTIONS',
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
]

const cachingHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=3600, must-revalidate',
  },
]

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  experimental: {
    cssChunking: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/:all*(\\.(?:jpg|jpeg|png|gif|svg|ico|webp|css|js))',
        headers: cachingHeaders,
      },
      {
        source: '/((?!assets\\/email\\/).*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
