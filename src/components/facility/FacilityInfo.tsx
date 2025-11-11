import type { Facility } from '../../data/facilities'

interface FacilityInfoProps {
  facility: Facility
}

function FacilityInfo({ facility }: FacilityInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{facility.name}</h1>
      <p className="text-gray-600 mb-4">{facility.address}</p>

      <div className="flex items-center gap-3 mb-6">
        <span className="bg-red-100 text-red-600 px-3 py-1 rounded font-medium">
          {facility.category}
        </span>
        <span className="text-gray-600">수용 인원: {facility.capacity}명</span>
        <span className="text-gray-600">{facility.distance}</span>
      </div>

      {/* Info Sections */}
      <div className="space-y-6 border-t pt-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">시설 정보</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 24시간 간호 서비스</li>
            <li>• 전문 의료진 상주</li>
            <li>• 개인 맞춤 케어 프로그램</li>
            <li>• 물리치료실 완비</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">편의시설</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 쾌적한 개인실 및 다인실</li>
            <li>• 식당 및 휴게실</li>
            <li>• 정원 및 산책로</li>
            <li>• 무료 주차장</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">특별 서비스</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 정기 건강검진</li>
            <li>• 문화 프로그램 운영</li>
            <li>• 가족 상담 서비스</li>
            <li>• 영양 맞춤 식단</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FacilityInfo