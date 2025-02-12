import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './components/home/home'

export default function App() {

  return (  
    <>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}