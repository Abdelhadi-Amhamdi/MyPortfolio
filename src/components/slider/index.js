import React from 'react'
import {heroInfo} from '../context'
import Svg from './svg'


const Slider = () => {

    return(
        <>
        <div className="row slider">
            <div className="col-md-6">
                
                <h1>{heroInfo.name}</h1>
                <h1>{heroInfo.hero1}</h1>
            </div>
            <div className="col-md-6">
                <Svg />
                {/* <img src="./img/undraw_feeling_proud_qne1.svg" alt="slideImg"/> */}
            </div>
        </div>
        </>
    )
}

export default Slider