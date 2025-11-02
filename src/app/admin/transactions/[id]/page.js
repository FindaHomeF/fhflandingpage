import TransactionDetailsPage from '../../pages/transaction-details'

export default async function TransactionDetailPage({ params }) {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  return <TransactionDetailsPage transactionId={decodedId} />
}
