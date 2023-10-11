import Image from 'next/image'
import styles from './page.module.css';
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import FullName from './components/FullName';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Info from './components/Info';
import Experience from './components/Experience';
import Education from './components/Education';
import LoginButton from './components/LoginButton';




const fullName = [
  { firstName: 'Junelle', lastName: 'Suaybaguio' }
]

const info = [
  { address: 'Calinan, Davao City Philippines', contactNo: '0910-1151395', email: 'junelle@gmail.com' }
]

const about = [
  { about: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites and web services.' }
]

const socialIcons = [
  { facebook: 'fa fa-facebook fa-stack-1x fa-inverse', facebooklink: 'facebook.com/swedr13', twitter: 'fa fa-twitter fa-stack-1x fa-inverse', twitterlink: 'twitter.com/swedr420',
  linkedin: 'fa fa-linkedin fa-stack-1x fa-inverse', linkedinlink: 'linkedin.com/in/junelle-suaybaguio', github: 'fa fa-github fa-stack-1x fa-inverse', githublink: 'github.com/swedr13'
  },
]

const experience = [
  { key: 1, jobTitle: 'WORDPRESS DEVELOPER', company: 'ARASH LAW', jobDescription: 'WordPress Developer, posting news, blogs etc. QA and updating wordpress sites.', 
  workExperience: 'June 2022 – January 2023' },
  { key: 2, jobTitle: 'WORDPRESS DEVELOPER', company: 'RC Digital Marketing', jobDescription: 'WordPress Developer, creating from scratch, website maintenance, Search Engine Optimizations, Clickfunnels, Zapier, Gohighlevel and redesigning websites.', 
  workExperience: 'August 2020 – April 2022' },
  { key: 3, jobTitle: 'Technical Support', company: 'Far East Noble House, Inc. (Gaisano Grand Calinan)', jobDescription: 'Providing technical support and ensuring the whole company runs smoothly. Handles network, hardware and software troubleshooting.', 
  workExperience: 'February 2019 - February 2020' }
]

const education = [
  { key: 1, schoolName: 'HOLY CROSS OF DAVAO COLLEGE', course: 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY', 
  address: '14-B Sta. Ana Ave, Poblacion District, Davao City', schoolYear: '2013-2018' },
  { key: 2, schoolName: 'HOLY CROSS COLLEGE OF CALINAN', course: '', address: 'McArthur Highway, Datu Abing St, Calinan District, Davao City', schoolYear: '2007-2011' },
  { key: 3, schoolName: 'CALINAN CENTRAL ELEMENTARY SCHOOL', course: '', address: 'Penano St., Calinan, Calinan District, Davao City', schoolYear: '2001-2007' }
]

const CardData = [
  { key: 1, image: 'img/1.jpg', title: 'Laser Machines Direct', description: 'One-Stop-Shop for Medical Grade Lasers', link: 'https://laser-machine.co.uk/' },
  { key: 2, image: 'img/2.jpg', title: 'Hydrafacial Reading', description: 'Reveal Your True Beauty with Hydrafacial Reading', link: 'https://hydrafacialreading.co.uk/' },
  { key: 3, image: 'img/3.jpg', title: 'Profhilo Reading', description: 'Profhilo Reading: Regain Your Youth and Natural Glow', link: 'https://profhiloreading.co.uk/' },
  { key: 4, image: 'img/4.jpg', title: 'GetCCN', description: 'Managed IT Services For Chicago And Surrounding Areas.', link: 'https://getccn.com/Echo/' },
  { key: 5, image: 'img/5.jpg', title: 'Net512', description: 'Managed IT Services For Austin And Surrounding Areas', link: 'https://www.net512.com/' }
]


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
      <LoginButton />
      <FullName fullName={fullName} />
      <Info info={info} />
        <About about={about} />
        <SocialIcons socialIcons={socialIcons} />
      </div>
    </section>
    
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="experience"
    >
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        <Experience experience={experience} />
      </div>
    </section>

    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        <Education education={education} />
      </div>
    </section>
    
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="projects"
    >
      
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <div className="card-columns">
        <CardProject CardData={CardData} />
        </div>
      </div>
    </section>

    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
      id="contact"
    >
      <div className="my-auto">
        <h2 className="mb-5">Contact</h2>
        <About about={about} />
        <div className="form-group col-4">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" />
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
        <SocialIcons socialIcons={socialIcons} />
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
