export const dynamic = 'force-static'
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://transportesgema.com/sitemap.xml',
  }
}
