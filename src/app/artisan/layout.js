import ArtisanLayoutProvider from './components/ArtisanLayoutProvider'

export default function ArtisanLayout({ children }) {
  return <ArtisanLayoutProvider>{children}</ArtisanLayoutProvider>
}

export const metadata = {
  title: 'Artisan Dashboard - Find-a-Home FUTA',
  description: 'Manage your services and profile on Find-a-Home FUTA.',
}

