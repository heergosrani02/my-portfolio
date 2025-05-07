import heroCss from "./HeroSection.module.css"

function HeroSection(){
    return(
        <>
           <section>
                <div className={heroCss.container}>
                    <div className={heroCss.intro}>
                        <p>Hello I'm <span>Heer Gosrani</span>,</p>
                    </div>
                    <div className={heroCss.myRole}>
                        <p>a <span>Software</span> Developer.</p>
                    </div>
                </div>
           </section>
        </>
    )
}

export default HeroSection