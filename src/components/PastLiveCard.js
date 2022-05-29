export const PastLiveCard = ({liveTitle, liveDate}) => {
    return(
        <div className="pastlivecard">
            <p className="pastlivecard__title">{liveTitle}</p>
            <p className="pastlivecard__date">{liveDate}</p>
        </div>
    )
}