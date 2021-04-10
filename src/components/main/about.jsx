import React from 'react'

export default function About() {
    return (
        <div className="about">
            <div className="row">
                <div className="col-md-6">
                    <img src="./img/undraw_online_cv_qy9w.svg" alt="cv"/>
                </div>
                <div className="col-md-6">
                   <div className="row">
                        <div className="col-md-12">
                            <div className="myinfos">
                                <div>Birthday : <span>18-06-2000</span></div>
                                <div>Phone : <span>+212 624 206 23</span></div>
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
                    <div className="btn btn-primary btn-block offset-4">Download My Cv</div>
                </div>
            </div>
        </div>
    )
}
