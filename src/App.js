import React  from 'react'
import Navbar from './components/navbar'
import Slider from './components/slider/index'
import Main from './components/main'





class App extends React.Component {

  render() {
      return(
          <div className="container">
                <Navbar />
                <Slider />
                <Main />
          </div>
      ) 
    }

}
export default App