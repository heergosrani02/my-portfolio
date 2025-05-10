import resumeCss from "./ResumeSection.module.css"
import { education, experience } from "./../../data.js"

function ResumeSection(){
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

            <div className={resumeCss.education}>
              {education.map((edu) => (
                <div className={resumeCss.innerDiv} key={edu.id}>
                  <img src={edu.image} alt="czmgLogo" />
                  <div className={resumeCss.details}>
                    <p>{edu.date}</p>
                    <p>{edu.collegeName}</p>
                    <p>{edu.courseName}</p>
                    <p>{edu.cityName}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={resumeCss.experience}></div>
          </div>
        </section>
      </>
    );
}

export default ResumeSection