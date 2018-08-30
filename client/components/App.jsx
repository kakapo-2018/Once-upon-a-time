import React from 'react'
import Sound from 'react-sound'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Storyboard from './Storyboard'
import SoundComp from './SoundComp'

class App extends React.Component {
  render(){
    return (
    <div>
    <Nav/>
    <Sidebar/>
    <Storyboard/>
    </div>
    )
  }
}


export default App