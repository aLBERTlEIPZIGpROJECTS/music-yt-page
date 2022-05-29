import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const AboutChannel = () => {
    const { title, setTitle} = useContext(TitleContext)
    return(
        <>
        <p>Prisma de orquesta nació en septiembre de 2019 como Monkey Musician de la necesidad de compartir lo que sentia y pensaba sobre música.</p>
        <p>El canal ha ido evolucionando a lo largo de mas de 500 videos y directos.</p>
        <p>A principios de este año (2022) tomé la decisión de compartimentar mi contenido: por un lado intentar producir contenido en un formato mas breve, y por el otro ofrecer el contenido mas largo a aquellos realmente interesados en el.</p>
        <p>Desde entonces realizo un directo cada semana, en el que analizamos una obra sinfónica. Siempre que el tiempo y las fuerzas me lo permiten tomo vuestras sugerencias para obras a analizar en futuros directos. </p>
        <p>¿Te interesan los directos? Mas información aquí</p>
        <button><a href="">Accede a los directos</a></button>
        </>   
    )
}