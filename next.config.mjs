/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cf-sparkai-live.s3.amazonaws.com',
          port: '',
          pathname: '/**', // This allows all image paths from this hostname
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          port: '',
          pathname: '/**', // Existing configuration for Pinimg
        },
      ],
    },
  };
  
  export default nextConfig;
  
  