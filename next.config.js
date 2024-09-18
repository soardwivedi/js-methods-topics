/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { optimizeCss: true },
    images: {
      // domains: [
      //   "d15mcvsd48kerh.cloudfront.net",
      //   "ktmdev.bajajauto.com",
      //   "i.travelapi.com",
      //   "zoomcar-assets.zoomcar.com",
      //   "www.zoomcar.com",
      //   "imageupload.io",
      //   "media-cdn.tripadvisor.com",
      //   "lh5.googleusercontent.com",
      //   "fastui.cltpstatic.com",
      //   "photos.hotelbeds.com",
      //   "fastui.cltpstatic.com",
      //   "q-xx.bstatic.com",
      //   "lh3.googleusercontent.com",
      //   "*",
      // ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
          pathname: "**",
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: "/hotels/booking-detail/:slug",
          destination: "/hotels/booking-status/:slug",
        },
        {
          source: "/zoomcar/booking-detail/:slug",
          destination: "/zoomcar/booking-status/:slug",
        },
      ];
    },
      async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' },
            { key: 'Access-Control-Allow-Headers', value: 'Origin, X-Requested-With, Content-Type, Accept' },
          ],
        },
      ]
    },
  };
  
  module.exports = nextConfig;
  