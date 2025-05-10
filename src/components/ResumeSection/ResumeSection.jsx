import resumeCss from "./ResumeSection.module.css";
import { education, experience } from "./../../data.js";

import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";

function ResumeSection() {
  return (
    <>
      <section>
        <div className={resumeCss.container}>
          <div className={resumeCss.backWord}>
            <p>Resume</p>
          </div>
          <div className={resumeCss.frontWord}>
            <p>My Resume</p>
          </div>

          <div className={resumeCss.title}>
            <IoSchool size={43} />
            <p>Education</p>
          </div>

          <div className={resumeCss.education}>
            {education.map((edu) => (
              <div className={resumeCss.details} key={edu.id}>
                <img src={edu.image} alt="czmgLogo" />
                <div className={resumeCss.inner}>
                  <p>{edu.date}</p>
                  <p>{edu.collegeName}</p>
                  <p>{edu.courseName}</p>
                  <p>{edu.cityName}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={resumeCss.title}>
            <MdWork size={43} />
            <p>Experience</p>
          </div>

          <div className={resumeCss.experience}>
            {experience.map((edu) => (
              <div className={resumeCss.details} key={edu.id}>
                <img src={edu.image} alt="czmgLogo" />
                <div className={resumeCss.inner}>
                  <p>{edu.date}</p>
                  <p>{edu.companyName}</p>
                  <p>{edu.role}</p>
                  <p>{edu.cityName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumeSection;