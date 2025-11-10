import Header from '../components/layout/Header'
import HeroBanner from '../components/home/HeroBanner'
import FacilitiesSection from '../components/home/FacilitiesSection'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <FacilitiesSection />
    </div>
  )
}

export default Home
