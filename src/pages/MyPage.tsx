import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import Container from '../components/layout/Container'
import UserProfile from '../components/mypage/UserProfile'
import DocumentUpload from '../components/mypage/DocumentUpload'

function MyPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">마이페이지</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - User Profile */}
            <div className="lg:col-span-1">
              <UserProfile />
            </div>

            {/* Right Column - Document Upload */}
            <div className="lg:col-span-2">
              <DocumentUpload />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MyPage
