/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_API_DOMAIN]
    },
};

export default nextConfig;
