import Container from '../layout/Container'

function HeroBanner() {
  return (
    <section className="bg-gray-100 py-16">
      <Container>
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">
              <span className="block">전문 요양 서비스</span>
              <span className="block mt-2">월 <span className="text-red-500">1,000,000원</span>부터</span>
            </h1>
            <div className="flex items-center gap-2 mt-6">
              <span className="text-3xl font-bold">70%</span>
              <div className="bg-red-500 text-white px-3 py-1 rounded flex items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3l-7 7h4v7h6v-7h4l-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-2">🏥</div>
                <p className="text-sm">요양원 이미지</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroBanner
