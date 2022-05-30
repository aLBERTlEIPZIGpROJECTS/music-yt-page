import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
export const DirectosOpen = () => {
  const { title, setTitle} = useContext(TitleContext)
  setTitle("Directos")
  return (
    <>
      <div>
        <div>
          <p>¡Proximo directo!</p>
          <p>TT / MM || HH:HH</p>
        </div>
        <p className="next-stream__title" >Obra, obra, obra, obra, obra, obra, obra, obra</p>
        <img
          src="https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="next-stream__image"
        />
        <button><a href="">Al directo</a></button>
      </div>
      <p>
        ¡Gracias por interesarte en los directos! Para acceder a los directos
        del canal solo tienes que realizar una suscripción.
      </p>
      <p>
        La suscripción te da acceso a los directos semanales, además de los
        videos de los directos pasados y a encuestas en las que ayudas a escoger
        el contenido del canal.
      </p>
      <p>
        La suscripción cuesta 5 euros al mes que puedes realizar a través de
        paypal y que puedes cancelar sin problemas en cualquier momento.
      </p>
      <p>
        Gracias a tu suscripción no solo disfrutarás de un contenido poco
        presente en internet, si no que además ayudarás a seguir creando
        contenido.
      </p>
    </>
  );
};
