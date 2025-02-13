import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Cadastro from './components/cadastro/cadastro'
import Login from './components/login/login'

export default function App() {

  return (  
    <>
      <BrowserRouter>
            <div className='h-screen flex flex-col justify-between'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/home" element={<Home/>} />
              </Routes>
              <Footer />
            </div>
        </BrowserRouter>
    </>
  )
}