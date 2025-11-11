import { useParams, useNavigate } from 'react-router-dom'
import Container from '../components/layout/Container'
import FacilityImages from '../components/facility/FacilityImages'
import FacilityInfo from '../components/facility/FacilityInfo'
import FacilityPricing from '../components/facility/FacilityPricing'
import { facilities } from '../data/facilities'

function FacilityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const facility = facilities.find(f => f.id === Number(id))

  if (!facility) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">요양원을 찾을 수 없습니다</h2>
          <button
            onClick={() => navigate('/')}
            className="text-red-500 hover:text-red-600"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <button onClick={() => navigate('/')} className="hover:text-gray-900">홈</button>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">{facility.name}</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Images & Info */}
          <div className="col-span-2 space-y-6">
            <FacilityImages facility={facility} />
            <FacilityInfo facility={facility} />
          </div>

          {/* Right Column - Pricing & CTA */}
          <div className="col-span-1">
            <FacilityPricing facility={facility} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FacilityDetail