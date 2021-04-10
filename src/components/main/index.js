import React from 'react'
import Aside from './aside'
import Contact from './contact'
import Introduction from './Introduction'
import Skills from './skills'
import Works from './works'
import About from './about'



const Main = () => {

    return(
        <>
            <div className="row main">
                <div className="col-md-4"><Aside /></div>
                <div className="col-md-8">
                    <div className="row" id="container">
                        <div className="col-md-12 itro" id="about">
                            <About />
                        </div>
                        <div className="col-md-12 itro" id="intro">
                            <Introduction id="into" />
                        </div>
                       
                        <div className="col-md-12 skills" id="skills">
                            <Skills />
                        </div>
                        <div className="col-md-12 works" id="works">
                            <Works />
                        </div>
                        <div className="col-md-12 contact"  id="contact">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main