import Image from 'next/image'



export default function CardProject() {

  return (
    <>
    <div className="card-columns">
          <div className="card">
            <img
              className="card-img-top"
              src="img/1.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Laser Machines Direct</h5>
              <p className="card-text">
                One-Stop-Shop for Medical Grade Lasers
              </p>
              <a href="https://laser-machine.co.uk/">Visit Website</a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="img/2.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Hydrafacial Reading</h5>
              <p className="card-text">
                Reveal Your True Beauty with Hydrafacial Reading
              </p>
              <a href="https://hydrafacialreading.co.uk/">Visit Website</a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="img/3.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Profhilo Reading</h5>
              <p className="card-text">
                Profhilo Reading: Regain Your Youth and Natural Glow
              </p>
              <a href="https://profhiloreading.co.uk/">Visit Website</a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="img/4.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">GetCCN</h5>
              <p className="card-text">
                Managed IT Services For Chicago And Surrounding Areas.
              </p>
              <a href="https://getccn.com/Echo/">Visit Website</a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="img/5.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Net512</h5>
              <p className="card-text">
                Managed IT Services For Austin And Surrounding Area
              </p>
              <a href="https://www.net512.com/">Visit Website</a>
            </div>
          </div>
        </div>
     
      <div className="subheading mb-3">
              Add Project
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="cardImage">Project Image</label>
        <input type="file" className="form-control-file" id="cardImage" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="cardTitle">Project Title</label>
        <input type="text" className="form-control" id="cardTitle" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="cardText">Project Description</label>
        <input type="text" className="form-control" id="cardDescription" />
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="cardLink">Project Link</label>
        <input type="text" className="form-control" id="cardLink" />
      </div>
      <div className="form-group col-md-4">
      <button
          type="submit"
          style={{ backgroundColor: "#bd5d38", borderColor: "#bd5d38" }}
          className="btn btn-primary">
          Add Project
      </button>
      </div>
      
</>
  )
}

