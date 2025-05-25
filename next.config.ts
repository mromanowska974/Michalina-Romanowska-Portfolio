import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    experimental: {
        nodeMiddleware: true,
    }
}

module.exports = withNextIntl(nextConfig);
