import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Cadastro from './components/cadastro/cadastro'
import Login from './components/login/login'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import FormTema from './components/temas/formtema/FormTema'
import DeletarTema from './components/temas/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import FormPostagem from './components/postagens/formpostagem/FormPostagem'

export default function App() {

  return (  
    <>
       <AuthProvider> 
        <BrowserRouter>
              <div className='h-screen flex flex-col justify-between'>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Login/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/cadastro" element={<Cadastro/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/temas" element={<ListaTemas />} />
                  <Route path="/cadastrartema" element={<FormTema />} />
                  <Route path="/editartema/:id" element={<FormTema />} />
                  <Route path="/deletartema/:id" element={<DeletarTema />} />
                  <Route path="/postagens" element={<ListaPostagens />} />
                  <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                  <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                </Routes>
                <Footer />
              </div>
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}