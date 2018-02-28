import React, {Component} from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './routes/Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App
