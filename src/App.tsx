import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { toastConfig } from './config/toast'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import FacilityDetail from './pages/FacilityDetail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/facility/:id" element={<FacilityDetail />} />
      </Routes>
      <Toaster {...toastConfig} />
    </BrowserRouter>
  )
}

export default App
