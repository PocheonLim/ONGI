import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import Container from '../components/layout/Container'
import toast from 'react-hot-toast'

function MyPage() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    toast.success('로그아웃 되었습니다')
    navigate('/')
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-8">마이페이지</h1>

            <div className="space-y-6">
              {/* User Info */}
              <div className="pb-6 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">이메일</p>
                    <p className="text-lg font-medium text-gray-900">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-lg transition-colors"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-2">
              이용 가능한 서비스
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 관심 요양원 저장</li>
              <li>• 상담 신청 내역 확인</li>
              <li>• 맞춤 요양원 추천</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MyPage
