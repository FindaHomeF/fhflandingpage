import ServiceApprovalPage from '@/app/admin/pages/service-approval';

export default async function ServiceApprovalRoute({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <ServiceApprovalPage serviceId={decodedId} />;
}
