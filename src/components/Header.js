import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"

export const Header = () => {
    const { title, setTitle} = useContext(TitleContext)
    return(
        <header>
            <h1>{title}</h1>
            <menu>
                <a href="/">Inicio</a>
                <a href="/directosSubscribers">Directos</a>
                <a href="/aboutme">Acerca de mi</a>
                <a href="/aboutchannel">Prisma de Orquesta</a>
                <a href="/contact">Contacto</a>
            </menu>
        </header>        
    )
}