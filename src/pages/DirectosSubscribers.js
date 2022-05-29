import React, {useContext} from "react"
import { TitleContext } from "../components/TitleContext"
import { PastLiveCard } from "../components/PastLiveCard";

const pastLiveList = [
  {liveTitle : "1 Sinfonia Mozart", liveDate : "20, 03, 2022"}
]

export const DirectosSubscribers = () => {
  const { title, setTitle} = useContext(TitleContext)
  return (
    <>
      <div>
        <div>
          <p>¡Proximo directo!</p>
          <p>TT / MM || HH:HH</p>
        </div>
        <p>Obra, obra, obra, obra, obra, obra, obra, obra</p>
        <img
          src="https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="next-stream__image"
        />
      </div>
      <div>
        <h2>Directos pasados</h2>
        <div>
            {pastLiveList && pastLiveList.map(live => {
                <PastLiveCard liveTitle = {live.liveTitle} liveDate = {live.liveDate} />
            })}
        </div>
      </div>
    </>
  );
};
