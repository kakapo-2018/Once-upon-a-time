import React from 'react'
import data from '../../data/data'

const Storyboard = props => {

    let placing = props.match.params.story

    let img = data[placing][0].image
    let content = data[placing][0].content
    let subtitle = data[placing][0].subtitle
    let sound = data[placing][0].sound

    function playAudio(){
        var audio = new Audio(sound);
        audio.play()
    }
    
    return(
            <div className="storyboard">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-12">
                        <div className="tile">
                            <div className="tile is-parent">
                                <article id="bg" className="tile is-child notification is-info">
                                <p className="title">Chapter {placing} </p>
                                <p className="subtitle">{subtitle}</p>
                                <figure className="image is-5by3">
                                <img src={img}/>
                                
                                </figure>
                                <p className="subtitle">{content[0]}<strong onClick={playAudio}>{content[1]}</strong>{content[2]}</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
}

export default Storyboard