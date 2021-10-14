const isProd = process.env.NODE_ENV === 'production'
console.log('isProd', isProd)

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://mvhydraendpoint.azureedge.net' : '',
  images: {
    domains: ['images.ctfassets.net'],
  },
}