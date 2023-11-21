/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OMDB_API: 'cbac66f1',
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
