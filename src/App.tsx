import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import FacilityDetail from './pages/FacilityDetail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/facility/:id" element={<FacilityDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
