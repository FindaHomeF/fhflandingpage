import StudentLayoutProvider from './components/StudentLayoutProvider'

export default function StudentLayout({ children }) {
  return <StudentLayoutProvider>{children}</StudentLayoutProvider>
}

export const metadata = {
  title: 'Student Dashboard - Find-a-Home FUTA',
  description: 'Manage your properties, items, and profile on Find-a-Home FUTA.',
}

