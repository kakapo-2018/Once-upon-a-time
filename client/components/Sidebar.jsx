import React from 'react'
import stories from '../../data/data'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="storyboard">
            <h2>Chapter Selection</h2>
            <ul>
                <li key="intro"><Link to={`/chapter/intro`}>Intro</Link></li>
                {Object.keys(stories).map(chapter => {
                    if(chapter == 'Intro'){
                        return
                    }
                    return <li key={chapter}><Link to={`/chapter/${chapter}`} replace>Chapter {chapter} -></Link></li>
                })}
            </ul>    
        </div>
    )
}

export default Sidebar