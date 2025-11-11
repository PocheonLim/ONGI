import { Link } from 'react-router-dom'
import type { Facility } from '../../data/facilities'

interface FacilityCardProps {
  facility: Facility
}

function FacilityCard({ facility }: FacilityCardProps) {
  const formatPrice = (price: number) => {
    return (price / 10000).toFixed(0) + '만원'
  }

  return (
    <Link
      to={`/facility/${facility.id}`}
      className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer block"
    >
      {/* Image */}
      <div className={`${facility.bgColor} h-40 flex items-center justify-center`}>
        <div className="text-4xl">🏥</div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{facility.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{facility.address}</p>
        <p className="text-xl font-bold text-gray-900 mb-2">
          {formatPrice(facility.monthlyPrice)} <span className="text-sm font-normal text-gray-500">/ 월</span>
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded">{facility.category}</span>
          <span className="text-gray-500">{facility.distance}</span>
        </div>
      </div>
    </Link>
  )
}

export default FacilityCard
