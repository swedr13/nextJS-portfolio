const About = ( {about} ) => {
  return (
    <>
    {about?.map(about => (
      <p className="mb-5">
      {about.about}
      </p>
    ))}
    </>
  );
}

export default About;