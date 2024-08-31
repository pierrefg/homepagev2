// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.pierrefg.com',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000
}
  