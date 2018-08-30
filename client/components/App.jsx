import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'
import Storyboard from './Storyboard'

const App = () => (
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


export default App