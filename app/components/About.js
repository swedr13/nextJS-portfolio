const About = () => {
  return (
    <>
    <section className="resume-section p-3 p-lg-5 d-flex d-column bg-light" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          Junelle
          <span className="text-primary">Suaybaguio</span>
        </h1>
        <div className="subheading mb-5">
          Calinan, Davao City Philippines · 0910-1151395 ·
          <a href="mailto:name@email.com">junelle@gmail.com</a>
        </div>
        <p className="mb-5">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites and web services.
        </p>
        
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-facebook fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-twitter fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-github fa-stack-1x fa-inverse" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
}

export default About;