import React from 'react'

export default function About() {
    return (
        <div className="about">
            <div className="row">
                <div className="col-md-6">
                    <img src="img/Online resume-rafiki.svg" alt="" />
                </div>
                <div className="col-md-6">
                   <div className="row">
                        <div className="col-md-12">
                            <div className="myinfos">
                                <div>Phone : <span>+212 621 420 623</span></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="myinfos">
                                <div>Email   : <span>aamhamdi943@gmail.com</span></div>
                                <div>Adresse : <span>Morocco/marrakech</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                  //  <a 
                   //     className="btn btn-primary btn-block offset-4" 
                     //   href="#"
                      //  target="_blank"
                      //  rel="noreferrer"
                   // >My Resume</a> 
                </div>
            </div>
        </div>
    )
}
