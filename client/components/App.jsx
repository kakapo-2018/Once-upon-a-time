import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'
import Storyboard from './Storyboard'
import SoundComp from './SoundComp'

class App extends React.Component {
  render(){
    return (
    <div>
      <Router>
        <div>
      <Route path="/" component={Nav}/>
      <Route exact path="/chapter/:story" render={props => {
              return <Storyboard {...props }/>
            }}/>
        <Sidebar/>
        {/* <Storyboard/> */}
      </div>
      </Router>
    </div>
    )
  }
}


export default App