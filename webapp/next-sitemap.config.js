// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.pierrefg.com',
    generateRobotsTxt: true,
    // changefreq: 'monthly',
    // priority: 0.7,
    // sitemapSize: 5000,
    transform: async (config, path) => {
        const priorityMap = {
            '/': 1.0,
            '/art': 0.8,
            '/science': 0.8,
            '/background': 0.8
        };
        
        const defaultPriority = 0.5;
        const priority = priorityMap[path] || defaultPriority;

        return {
            loc: path,
            priority: priority,
            changefreq: 'monthly',
        };
    },
}
  