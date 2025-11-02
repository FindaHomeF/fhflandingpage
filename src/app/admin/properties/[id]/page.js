import PropertyDetailsPage from '../../pages/property-details';

export default function PropertyDetailsRoute({ params }) {
  return <PropertyDetailsPage propertyId={params.id} />;
}
