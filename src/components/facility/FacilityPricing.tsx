import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import toast from 'react-hot-toast'
import type { Facility } from '../../data/facilities'

interface FacilityPricingProps {
  facility: Facility
}

function FacilityPricing({ facility }: FacilityPricingProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()

  const formatPrice = (price: number) => {
    return (price / 10000).toLocaleString() + '만원'
  }

  const handleReservation = () => {
    if (!isAuthenticated) {
      // 미로그인: 현재 요양원 페이지로 돌아올 수 있도록 redirect 파라미터 추가
      navigate(`/login?redirect=/facility/${facility.id}`)
    } else {
      // 로그인됨: 서비스 준비중 알림
      toast('서비스 준비중입니다', {
        icon: '🚧',
      })
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 sticky top-8">
      {/* Price */}
      <div className="mb-6">
        <div className="text-sm text-gray-600 mb-1">월 이용료</div>
        <div className="text-3xl font-bold text-gray-900">
          {formatPrice(facility.monthlyPrice)}
        </div>
        <div className="text-sm text-gray-500 mt-1">부가세 포함</div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 mb-6">
        <button
          onClick={handleReservation}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          예약 신청하기
        </button>
      </div>

      {/* Additional Info */}
      <div className="border-t pt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">수용 인원</span>
          <span className="font-medium text-gray-900">{facility.capacity}명</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">거리</span>
          <span className="font-medium text-gray-900">{facility.distance}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">분류</span>
          <span className="font-medium text-gray-900">{facility.category}</span>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-xs text-gray-600">
          💡 상담 신청 시 더 자세한 정보와 견적을 받아보실 수 있습니다.
        </p>
      </div>
    </div>
  )
}

export default FacilityPricing