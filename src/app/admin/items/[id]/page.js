import ItemDetailsPage from '@/app/admin/pages/item-details';

export default async function ItemDetailsRoute({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <ItemDetailsPage itemId={decodedId} />;
}
