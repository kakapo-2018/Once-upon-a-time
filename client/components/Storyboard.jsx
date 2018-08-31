import React from 'react'
import data from '../../data/data'


const Storyboard = props => {

    let placing = props.match.params.story

    let img = data[placing][0].image
    let content = data[placing][0].content
    let sound = data[placing][0].sound

    function playNoise(){
        
        var audio = new Audio(sound);
        audio.play();
    }
    
    return(
<div className="storyboard">
                
                <img src={img}/>
                   <div className="story">
                       <p>{content[0]}<strong onClick={playNoise}>{content[1]}</strong>{content[2]}</p>
                   </div>
                
               </div>
    )
}


export default Storyboard