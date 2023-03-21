import React from 'react'
import {heroInfo} from '../context'


const Slider = () => {

    return(
        <>
        <div className="row slider">
            <div className="col-md-6 slider-text">
                <div className="slider-text">
                    <h1>{heroInfo.name}</h1>
                    <h1>{heroInfo.hero1}</h1>
                </div>
            </div>
            <div className="col-md-6">
                <img src="img/Application programming interface-rafiki.svg"  alt="img"/>
            </div>
        </div>
        </>
    )
}

export default Slider