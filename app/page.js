'use client'

import Navbar from './components/Navbar';
import CardProject from './components/cardProject';
import FullName from './components/FullName';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Info from './components/Info';
import Experience from './components/Experience';
import Education from './components/Education';
import CardForm from './components/cardForm';
import LoginButton from './components/LoginButton';
import { Providers } from './providers';

const experience = [
  { key: 1, jobTitle: 'WORDPRESS DEVELOPER', company: 'ARASH LAW', jobDescription: 'WordPress Developer, posting news, blogs etc. QA and updating wordpress sites.', 
  workExperience: 'June 2022 – January 2023' },
  { key: 2, jobTitle: 'WORDPRESS DEVELOPER', company: 'RC Digital Marketing', jobDescription: 'WordPress Developer, creating from scratch, website maintenance, Search Engine Optimizations, Clickfunnels, Zapier, Gohighlevel and redesigning websites.', 
  workExperience: 'August 2020 – April 2022' },
  { key: 3, jobTitle: 'Technical Support', company: 'Far East Noble House, Inc. (Gaisano Grand Calinan)', jobDescription: 'Providing technical support and ensuring the whole company runs smoothly. Handles network, hardware and software troubleshooting.', 
  workExperience: 'February 2019 - February 2020' }
]

// const CardData = [
//   { key: 1, image: 'img/1.jpg', title: 'Laser Machines Direct', description: 'One-Stop-Shop for Medical Grade Lasers', link: 'https://laser-machine.co.uk/' },
//   { key: 2, image: 'img/2.jpg', title: 'Hydrafacial Reading', description: 'Reveal Your True Beauty with Hydrafacial Reading', link: 'https://hydrafacialreading.co.uk/' },
//   { key: 3, image: 'img/3.jpg', title: 'Profhilo Reading', description: 'Profhilo Reading: Regain Your Youth and Natural Glow', link: 'https://profhiloreading.co.uk/' },
//   { key: 4, image: 'img/4.jpg', title: 'GetCCN', description: 'Managed IT Services For Chicago And Surrounding Areas.', link: 'https://getccn.com/Echo/' },
//   { key: 5, image: 'img/5.jpg', title: 'Net512', description: 'Managed IT Services For Austin And Surrounding Areas', link: 'https://www.net512.com/' }
// ]

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex d-column bg-light"
          id="about">
          <div className="my-auto">
            <FullName />
            <Info />
            <About />
            <SocialIcons />
          </div>
        </section>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
          id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>
            <Experience experience={experience} />
          </div>
        </section>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
          id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            <Education />
          </div>
        </section>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
          id="projects">
          <div className="my-auto">
            <h2 className="mb-5">Projects</h2>
            <div className="card-columns mb-5">
              <CardProject />
            </div>
            <Providers>
              <CardForm />
            </Providers>
            <LoginButton />
          </div>
        </section>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column bg-light"
          id="contact">
          <div className="my-auto">
            <h2 className="mb-5">Contact</h2>
            <About />
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
              className="btn btn-primary ml-3 mb-4">
                Submit
            </button>
            <SocialIcons />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
