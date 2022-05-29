import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"

export const Header = () => {
    const { title, setTitle} = useContext(TitleContext)
    return(
        <header>
            <h1>{title}</h1>
            <menu>
                <a href="">Inicio</a>
                <a href="">Directos</a>
                <a href="">Sobre mi</a>
                <a href="">Contacto</a>
            </menu>
        </header>        
    )
}