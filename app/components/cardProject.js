const CardProject = ({ CardData }) => {
  return (
    <>
    {CardData?.map(CardData => (
      <div key={CardData.key}>
        
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={CardData.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{CardData.title}</h5>
              <p className="card-text">
                {CardData.description}
              </p>
              <a href={CardData.link}>Visit Website</a>
            </div>
          </div>
        </div>
      
    ))}
    </>
  );
}

export default CardProject;