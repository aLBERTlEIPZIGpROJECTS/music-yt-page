import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const Contact = () => {
    const { title, setTitle} = useContext(TitleContext)
    return(
        <>
            <h2>¡Encantado de leerte!</h2>
            <form action="">
                <label htmlFor="firstName">Nombre
                    <input type="text" />
                </label>
                <label htmlFor="lastName">Apellido
                    <input type="text" />
                </label>
                <label htmlFor="email">E-Mail
                    <input type="email" />
                </label>
                <label htmlFor="msg">Tu mensaje
                    <input type="text" />
                </label>
            </form>
        </>
    )
}