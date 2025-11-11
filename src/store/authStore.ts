import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  email: string
  password: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, password: string) => {
        // MVP: 간단한 로그인 (백엔드 없이)
        set({
          user: { email, password },
          isAuthenticated: true,
        })
      },
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'auth-storage', // localStorage key
    }
  )
)