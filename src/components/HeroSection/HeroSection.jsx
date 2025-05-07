import heroCss from "./HeroSection.module.css";
import person from "./../../assets/img/heer.png"
import { HiDownload } from "react-icons/hi";

function HeroSection(){
    return(
        <>
           <section>
                <div className={heroCss.container}>
                    <div className={heroCss.intro}>
                        <p>Hello, </p>
                    </div>

                    <div className={heroCss.intro1}>
                        <p> I'm <span>Heer Gosrani</span>,</p>
                    </div> 

                    <div className={heroCss.myRole}>
                        <p>a <span>Software</span> Developer.</p>
                    </div>

                    <div className={heroCss.heroImg}>
                        <img src={person} alt="person" />
                    </div>

                    <div className={heroCss.glass}>
                        <p>- I'm creative developer, and designer based in India, and I'm very passionate and dedicated to my work.</p>
                    </div>

                    <div className={heroCss.downloadCv}>
                        <p> - Download Cv <HiDownload className={heroCss.down}/></p>
                    </div>
                </div>
           </section>
        </>
    )
}

export default HeroSection