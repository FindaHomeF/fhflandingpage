import AgentLayoutProvider from './components/AgentLayoutProvider'

export default function AgentLayout({ children }) {
  return <AgentLayoutProvider>{children}</AgentLayoutProvider>
}

export const metadata = {
  title: 'Agent Dashboard - Find-a-Home FUTA',
  description: 'Manage your properties, items, and profile on Find-a-Home FUTA.',
}


