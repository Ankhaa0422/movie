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
            { 
                protocol: "https", 
                hostname: "firebasestorage.googleapis.com", 
            },
        ],
    },
    // experimental: {
    //     appDir: true,
    // },
    output: 'export'
}

module.exports = nextConfig
