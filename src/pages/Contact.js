import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const Contact = () => {
    const { title, setTitle} = useContext(TitleContext)
    setTitle("Contacto")
    return(
        <>
            <h2>¡Encantado de leerte!</h2>
            <form action="">
                <label htmlFor="firstName" >Nombre
                    <input type="text" required/>
                </label>
                <label htmlFor="lastName">Apellido
                    <input type="text" required/>
                </label>
                <label htmlFor="email">E-Mail
                    <input type="email" required/>
                </label>
                <label htmlFor="msg" required>Tu mensaje
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
                <button className="form__btn"><a href="">Envia</a></button>
            </form>
        </>
    )
}