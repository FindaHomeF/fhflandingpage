# TanStack Query Usage Examples

## Using Query Hooks

### Fetching Properties with Filters

```jsx
import { useProperties } from '@/contexts/DataContext'

function PropertiesList() {
  const { data: properties, isLoading, error } = useProperties({ 
    category: 'Single Rooms',
    status: 'Active'
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>{property.title}</div>
      ))}
    </div>
  )
}
```

### Creating a Property

```jsx
import { useCreateProperty } from '@/lib/mutations'

function AddPropertyForm() {
  const createProperty = useCreateProperty()

  const handleSubmit = (data) => {
    createProperty.mutate({
      title: data.title,
      price: data.price,
      category: data.category,
      // ... other fields
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={createProperty.isPending}>
        {createProperty.isPending ? 'Creating...' : 'Create Property'}
      </button>
    </form>
  )
}
```

### Updating a Property

```jsx
import { useUpdateProperty } from '@/lib/mutations'

function EditPropertyForm({ propertyId }) {
  const updateProperty = useUpdateProperty()

  const handleSubmit = (data) => {
    updateProperty.mutate({
      id: propertyId,
      updates: {
        title: data.title,
        price: data.price,
        // ... other fields to update
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={updateProperty.isPending}>
        {updateProperty.isPending ? 'Updating...' : 'Update Property'}
      </button>
    </form>
  )
}
```

### Deleting a Property

```jsx
import { useDeleteProperty } from '@/lib/mutations'

function DeletePropertyButton({ propertyId }) {
  const deleteProperty = useDeleteProperty()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty.mutate(propertyId)
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={deleteProperty.isPending}
    >
      {deleteProperty.isPending ? 'Deleting...' : 'Delete'}
    </button>
  )
}
```

### Fetching Single Item

```jsx
import { useService } from '@/contexts/DataContext'

function ServiceDetails({ serviceId }) {
  const { data: service, isLoading, error } = useService(serviceId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!service) return <div>Service not found</div>

  return (
    <div>
      <h1>{service.serviceName}</h1>
      <p>{service.description}</p>
    </div>
  )
}
```

## Available Hooks

### Query Hooks (from DataContext)
- `useProperties(filters)` - Get filtered properties
- `useItems(filters)` - Get filtered items
- `useServices(filters)` - Get filtered services
- `useTransactions(userId, userType)` - Get transactions
- `useProperty(id)` - Get single property
- `useItem(id)` - Get single item
- `useService(id)` - Get single service

### Mutation Hooks (from mutations.js)
- `useCreateProperty()` - Create new property
- `useUpdateProperty()` - Update existing property
- `useDeleteProperty()` - Delete property
- `useCreateItem()` - Create new item
- `useUpdateItem()` - Update existing item
- `useDeleteItem()` - Delete item
- `useCreateService()` - Create new service
- `useUpdateService()` - Update existing service
- `useDeleteService()` - Delete service
- `useCreateTransaction()` - Create new transaction

