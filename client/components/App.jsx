import React from 'react'
<<<<<<< HEAD
import Sound from 'react-sound'
=======
import {HashRouter as Router, Route} from 'react-router-dom';
>>>>>>> 426602955b24ecdd530deb0854ae51484ed7b6f3
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
       
        <Sidebar/>
        <Storyboard/>
      </div>
      </Router>
    </div>
    )
  }
}


export default App