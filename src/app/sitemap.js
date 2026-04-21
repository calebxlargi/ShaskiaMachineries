import { catalogData } from '@/data/products'

export default function sitemap() {
  const baseUrl = 'https://www.shaskiamachineries.com.my'

  const routes = ['', '/about', '/catalog', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const machineRoutes = catalogData.map((machine) => ({
    url: `${baseUrl}/catalog/${machine.slug}`,
    lastModified: machine.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...routes, ...machineRoutes]
}
