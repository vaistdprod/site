const path = require('path');

const contentSecurityPolicy = `
  default-src 'self';
  
  script-src 
    'self' 
    'unsafe-inline' 
    'unsafe-eval' 
    blob:
    https://*.google.com 
    https://*.google.cz
    https://*.googleadservices.com
    https://*.googletagmanager.com 
    https://*.google-analytics.com 
    https://*.analytics.google.com 
    https://*.doubleclick.net 
    https://*.googleapis.com 
    https://*.gstatic.com
    https://kit.fontawesome.com
    https://ct.leady.com
    https://ka-f.fontawesome.com;
  
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
    https://*.google.com
    https://*.google.cz
    https://*.googleadservices.com
    https://*.googletagmanager.com
    https://*.google-analytics.com
    https://*.analytics.google.com
    https://*.doubleclick.net
    https://*.googleapis.com
    https://*.gstatic.com
    https://kit.fontawesome.com
    https://ct.leady.com
    https://ka-f.fontawesome.com;

  frame-src 
    'self'
    https://*.google.com
    https://*.googletagmanager.com
    https://*.doubleclick.net;

  worker-src 
    'self'
    blob:;

  object-src 'none';
  base-uri 'self';
  form-action 'self';
  manifest-src 'self';
`.replace(/\s{2,}/g, " ").trim();

const cspHeader = {
  key: 'Content-Security-Policy',
  value: contentSecurityPolicy,
};

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
    value: 'camera=(), microphone=()',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
];

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;