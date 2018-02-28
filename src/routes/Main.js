import React from 'react'
import {Route} from 'react-router-dom'

import Home from '../ui/Home/Home'

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home}/>
      </React.Fragment>
    )
  }
}

export default Main