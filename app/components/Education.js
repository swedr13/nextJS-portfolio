const Education = () => {
  return (
    <>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">HOLY CROSS OF DAVAO COLLEGE</h3>
          <div className="subheading mb-3">
            BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
          </div>
          <p>14-B Sta. Ana Ave, Poblacion District, Davao City</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2013-2018</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">HOLY CROSS COLLEGE OF CALINAN</h3>
          <p>McArthur Highway, Datu Abing St, Calinan District, Davao City</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2007-2011</span>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">CALINAN CENTRAL ELEMENTARY SCHOOL</h3>
          <p>Penano St., Calinan, Calinan District, Davao City</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">2001-2007</span>
        </div>
      </div>
    </>
  );
}

export default Education;