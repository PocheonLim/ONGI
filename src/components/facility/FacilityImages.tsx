import type { Facility } from '../../data/facilities'

interface FacilityImagesProps {
  facility: Facility
}

function FacilityImages({ facility }: FacilityImagesProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Main Image */}
      <div className={`${facility.bgColor} h-96 flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-8xl mb-4">🏥</div>
          <p className="text-gray-600">시설 이미지</p>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2 p-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`${facility.bgColor} h-24 rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
          >
            <span className="text-2xl">🏥</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FacilityImages
