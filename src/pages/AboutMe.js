import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const AboutMe = () => {
  const { setTitle} = useContext(TitleContext)
  return (
    <>
      <p>
        Me llamo Albert Löwe. Nací hace 42 años en Barcelona, donde viví hasta
        que me mudé a Alemania hace 9 años
      </p>
      <p>
        He estudiado dirección de orquesta, aunque hasta ahora he hecho
        practicamente de todo: desde tocar en jam sessions de blues en Berlin o
        fiddle en pubs en Dublin a organista en Munich o dirigir una escuela de
        música y estrenar una obra en Madrid. Mi CV lo puedes descargar aquí.
      </p>
      <p>
        Creo en la música como una de las vivencias mas significativas a las que
        tenemos acceso, que todo el mundo puede acceder a ella, y que para ello
        no es necesario haber estudiado años, si no tener curiosidad y estar en
        contacto con ella cada dia.
      </p>
    </>
  );
};
