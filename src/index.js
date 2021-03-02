import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import Loader from './loader.jsx'



document.addEventListener('DOMContentLoaded' , ()=> {
    setTimeout(() => {
        ReactDom.render(<App />, document.getElementById('root'))
    }, 5000);
    ReactDom.render(<Loader />, document.getElementById('root'))
    
})


