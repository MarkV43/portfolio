/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'fr', 'de', 'pt', 'es'],
    defaultLocale: 'default',
  }
}

module.exports = nextConfig
