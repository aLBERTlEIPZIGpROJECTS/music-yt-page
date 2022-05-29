import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"

export const LandingPage = () => {
  const { title, setTitle} = useContext(TitleContext)
  
  return (
    <>
      <p>
        Prisma de orquesta es el canal de youtube especializado en música de
        orquesta.
      </p>
      <p>En el canal hablamos sobretodo de repertorio, análisis y dirección.</p>
      <p>
        Una vez por semana hacemos directos de 1 - 2 horas en los que vemos una
        obra desde diversas perspectivas: ritmo, armonia, instrumentación... y
        su aplicación a la interpretación y el gesto.
      </p>
      <button><a href="">Descubre mas</a></button>
    </>
  );
};
