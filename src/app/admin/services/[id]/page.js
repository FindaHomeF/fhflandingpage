import ServiceDetailsPage from '@/app/admin/pages/service-details';

export default async function ServiceDetailsRoute({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <ServiceDetailsPage serviceId={decodedId} />;
}
