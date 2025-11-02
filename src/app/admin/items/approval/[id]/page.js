import ItemApprovalPage from '../../../pages/item-approval';

export default function ItemApprovalRoute({ params }) {
  return <ItemApprovalPage itemId={params.id} />;
}
