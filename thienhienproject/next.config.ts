// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'], // Thêm domain nơi hình ảnh của bạn được lưu trữ
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
