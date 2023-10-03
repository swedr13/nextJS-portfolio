import Image from 'next/image'
import styles from './page.module.css';
import CardProject from './components/cardProject'
import Navbar from './components/navbar';



const Home = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Junelle Suaybaguio Portfolio</title>

  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"/>
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
  <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet" />
  <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet"/>
  <link href="css/resume.min.css" rel="stylesheet" />

  <Navbar />






  <div className="container-fluid p-0">
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
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="experience"
    >
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">WordPress Developer</h3>
            <div className="subheading mb-3">Arash Law</div>
            <p>
              WordPress Developer, posting news, blogs etc. QA and updating
              wordpress sites.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2022 – January 2023</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">
              WordPress, Clickfunnels, Zapier, Gohighlevel
            </h3>
            <div className="subheading mb-3">RC Digital Marketing</div>
            <p>
              WordPress Developer, creating from scratch, website maintenance,
              Search Engine Optimizations, Clickfunnels, Zapier, Gohighlevel and
              redesigning websites.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2020 – April 2022</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Technical Support</h3>
            <div className="subheading mb-3">
              Far East Noble House, Inc. (Gaisano Grand Calinan)
            </div>
            <p>
              Providing technical support and ensuring the whole company runs
              smoothly. Handles network, hardware and software troubleshooting.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2019 - February 2020</span>
          </div>
        </div>
      </div>
    </section>
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Holy Cross of Davao College</h3>
            <div className="subheading mb-3">
              Bachelor of Science In Information Technology
            </div>
            <p>14-B Sta. Ana Ave, Poblacion District, Davao City </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2013-2018</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Holy Cross College of Calinan</h3>
            <p>McArthur Highway, Datu Abing St, Calinan District, Davao City</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2007-2011</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Calinan Central Elementary School</h3>
            <p>Penano St., Calinan, Calinan District, Davao City </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2001-2007</span>
          </div>
        </div>
      </div>
    </section>
    
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="projects"
    >
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>

        <CardProject />


      </div>
    </section>

    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="contact"
    >
      <div className="my-auto">
        <h2 className="mb-5">Contact</h2>
        <p className="mb-5">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites and web services.
        </p>
        <div className="form-group col-4">
          <label htmlFor="cardTitle">Full Name</label>
          <input type="text" className="form-control" id="cardTitle" />
        </div>
        <div className="form-group col-4">
          <label htmlFor="cardText">Email</label>
          <input type="text" className="form-control" id="cardText" />
        </div>
        <div className="form-group col-4">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            rows={4}
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "#bd5d38", borderColor: "#bd5d38" }}
          className="btn btn-primary ml-3"
        >
          Submit
        </button>
        <br />
        <br />
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
  </div>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/resume.min.js"></script>
</>
  )
}

export default Home;
