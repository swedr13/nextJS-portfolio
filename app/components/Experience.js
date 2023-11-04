const Experience = ( {experience} ) => {
  return (
    <>
      {experience?.map(experience => (
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">{experience.jobTitle}</h3>
              <div className="subheading mb-3">{experience.company}</div>
              <p>{experience.jobDescription}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">{experience.workExperience}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;