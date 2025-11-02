import AdminLayoutProvider from './components/AdminLayoutProvider'

export default function AdminLayout({ children }) {
  return <AdminLayoutProvider>{children}</AdminLayoutProvider>
}

export const metadata = {
  title: 'Admin Dashboard - Find-a-Home FUTA',
  description: 'Manage properties, services, and users on the Find-a-Home FUTA platform.',
}
