import UserApprovalPage from '@/app/admin/pages/user-approval';

export default async function UserApprovalRoute({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <UserApprovalPage userId={decodedId} />;
}
