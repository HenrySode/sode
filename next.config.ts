/** @type {import('next').NextConfig} */
const nextConfig = {

    // baseDir or source directory is automatically src in Next.js 14+; older versions require appDir config
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
