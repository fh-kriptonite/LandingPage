/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    WAG_ADDRESS:"0x17f4c498D755f802AE7BA5a77255f0733fc37220",
    USDT_ADDRESS:"0x0F61Cc0Ff777B76dBD17AEBf9cCC9c8E2fbCCDBf",
    WAGON_EXCHANGER:"0xDD95576abe51c2Beb90E5B4ffb68E2493D013d7f"
  },
  trailingSlash: true
}

module.exports = nextConfig
