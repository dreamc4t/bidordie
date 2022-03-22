
const auction = ({firstName,lastName,place,briefInformation,imageUrl,availability, competence}) => {

    return (
        <div className="auction">
            <img src={imageUrl}></img>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{place}</h3>
            <h3>{availability}</h3>
            <h3>{competence}</h3>
            <p>{briefInformation}</p>

        </div>
    );
    
}

/*firstName={auction.firstName}
lastName={auction.lastName}
place= {auction.place}
availability={auction.availability}
competence={auction.competence}
briefInformation={auction.briefInformation}*/

export default auction 