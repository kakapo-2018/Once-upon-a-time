import React from 'react'
import stories from '../../data/data'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="storyboard">
            <h2>Testing Sidebar</h2>
            <ul>
                
                {Object.keys(stories).map(chapter => {
          
                    
                    return <li key={chapter}><Link to={`/chapter/${chapter}`}>Chapter {chapter.name} -></Link></li>
                })}
            </ul>    
        </div>
    )
}

export default Sidebar