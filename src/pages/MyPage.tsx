import Container from '../components/layout/Container'

function MyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Login Section */}
          <div className="bg-white rounded-lg shadow p-8 mb-6 mt-12">
            <div className="text-center mb-6">
              <button className="w-full bg-[#FEE500] cursor-pointer text-gray-900 font-medium py-3 rounded-lg mb-4 flex items-center justify-center gap-2">
                <span className="text-xl">💬</span>
                카카오로 시작하기
              </button>
              <div className="text-sm text-gray-500 mb-4">또는</div>
            </div>

            {/* Email Login Form */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="keepLogin"
                  className="w-4 h-4 text-red-500"
                />
                <label htmlFor="keepLogin" className="text-sm text-gray-700">
                  로그인상태유지
                </label>
              </div>

              <button className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-medium py-3 rounded-lg">
                로그인
              </button>

              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <button className="hover:text-gray-900">회원가입</button>
                <span className="text-gray-300">·</span>
                <button className="hover:text-gray-900">아이디 찾기</button>
                <span className="text-gray-300">·</span>
                <button className="hover:text-gray-900">비밀번호 찾기</button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-2">
              로그인하시면 더 많은 서비스를 이용하실 수 있습니다
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