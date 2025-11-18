import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import toast from 'react-hot-toast'

function UserProfile() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('로그아웃 되었습니다')
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">내 정보</h2>

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
        <button
          onClick={handleLogout}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-lg transition-colors"
        >
          로그아웃
        </button>
      </div>
    </div>
  )
}

export default UserProfile
