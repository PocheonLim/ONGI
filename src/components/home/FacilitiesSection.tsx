import Container from '../layout/Container'
import FacilityCard from './FacilityCard'
import { facilities } from '../../data/facilities'

function FacilitiesSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-2">편하게 요양원을 비교하세요</h2>
        <p className="text-gray-600 mb-8">내 이웃을 내 몸과 같이 사랑합니다.</p>

        <div className="grid grid-cols-6 gap-4">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FacilitiesSection
