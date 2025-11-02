import UserDetailsPage from '@/app/admin/pages/user-details';

export default async function UserDetailsRoute({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <UserDetailsPage userId={decodedId} />;
}
