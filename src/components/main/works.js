import React from 'react'
import {works} from '../context'

const Works = () => {

    

    return(
        <>
        <h6>{works.minititle}</h6>
        <h2>{works.title}</h2>
        <div className="row">
            {
                works.projects.map(pro => {
                    return(
                            <div className="col-md-4" key={pro.id}>
                                <div className="card">
                                    <img src={pro.img} alt="project" loading="lazy"/>
                                    <h3>{pro.type}</h3> 
                                    <div className="overlay overlayLeft">
                                        <h4 className="card-title" to="/item">{pro.title}</h4>
                                        <p className="card-text">{pro.tech}</p>
                                        <div className="btn btn-primary">
                                            <a href={pro.gitUrl} target="_blank" rel="noreferrer">
                                                {pro.git}
                                            </a>  
                                        </div>
                                        <div className="btn btn-primary">
                                            <a href={pro.url} target="_blank" rel="noreferrer">
                                                {pro.live}
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
        </>
    )

}

export default Works