import React from 'react'
import Styled from 'styled-components'

export default function Loader() {
    return (
        <Load className="Loading">
            <i className="fa fa-spinner" aria-hidden="true"></i>
        </Load>
    )
}


const Load = Styled.div`
    background:black;
    background-image: url('./img/ascii-pattern-tall.svg');
    width : 100%;
    height : 100vh;
    display:flex;
    justify-content : center ;
    align-items: center;
    font-size : 4rem;
    transition : all 1s ease ;
`

