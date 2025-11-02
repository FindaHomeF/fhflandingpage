import ApprovalPage from '../../pages/approval';

export default function ApprovalRoute({ params }) {
  return <ApprovalPage propertyId={params.id} />;
}
