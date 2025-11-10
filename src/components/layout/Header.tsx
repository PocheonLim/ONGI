import { Link } from 'react-router-dom'
import Container from './Container'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
              로고
            </div>
            <span className="text-2xl font-bold">온기</span>
            <span className="text-sm text-gray-500 ml-2">따뜻한 마음을 전합니다</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-red-500 font-medium">홈</Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">요양원</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">방문요양</a>
          </nav>

          {/* Search & User */}
          <div className="flex items-center gap-12">
            {/* Search */}
            <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-64">
              <select className="border-none outline-none bg-transparent text-sm">
                <option>통합검색</option>
              </select>
              <input
                type="text"
                placeholder=""
                className="flex-1 border-none outline-none text-sm ml-2"
              />
              <button className="text-gray-400 ml-2 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* User Icon */}
            <Link to="/mypage" className="text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
