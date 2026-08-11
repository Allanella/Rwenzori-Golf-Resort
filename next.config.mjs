/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  serverExternalPackages: ['nodemailer'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig