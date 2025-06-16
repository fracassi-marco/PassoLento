import type { NextConfig } from "next";

// Import bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // Ottimizzazioni per browser moderni
  compiler: {
    // Rimuovi console.log in produzione
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Configurazione Webpack per browser moderni
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Target ES2020+ per browser moderni
      config.target = ["web", "es2020"];
    }
    
    // Ottimizzazioni per bundle moderni
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },

  // Configurazione per immagini ottimizzate
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configurazione per export statico ottimizzato
  trailingSlash: true,
};

export default withBundleAnalyzer(nextConfig);
