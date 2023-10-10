const Education = ( {education} ) => {
  return (
    <>
    {education?.map(education => (
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{education.schoolName}</h3>
            <div className="subheading mb-3">
            {education.course}
            </div>
              <p>{education.address}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{education.schoolYear}</span>
        </div>
    </div>
    ))}
    </>
  );
}

export default Education;