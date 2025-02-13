import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">

                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-2'>
                        <p className="mx-6">Postagens</p>
                        <p className="mx-6">Temas</p>
                        <p className="mx-6">Cadastrar Temas</p>
                        <p className="mx-6">Perfil</p>
                        <p className="mx-6">Sair</p>
                    </div>
                </div>
            </div>
        </>
    )
}