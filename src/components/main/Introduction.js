import React from 'react'
import {intro , sectionInfo} from '../context'

const Introduction = () => {
    return(
        <>
            <h6>{intro.minititle}</h6>
            <h2>{intro.titele}</h2>
            <p>{intro.text} {sectionInfo.disc}</p>
        </>
    )

}
export default Introduction