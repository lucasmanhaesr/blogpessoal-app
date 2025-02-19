import { useContext, useEffect, useState } from "react";
import { DNA, RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import CardTemas from "../cardtemas/CardTemas";
import { buscar } from "../../../services/Service";

export default function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar('/tema', setTemas, { headers: { Authorization: token }})
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()    
    }, [temas.length])
    
    return (
        <>
            <div className="flex justify-center">
                {temas.length === 0 && (<RotatingLines strokeColor="black" strokeWidth="1.5" animationDuration="0.75" width="100" visible={true} /> )}
            </div>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {temas.map((tema) => (
                            <CardTemas key = {tema.id} tema = {tema} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}