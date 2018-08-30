import React from 'react'
import data from '../../data/data'

class Storyboard extends React.Component{
    constructor(props){
        // we are expecting keys to JSON
        super(props)

        this.state = {
            content: data.this.props.match.params.story[0].content,
            image: data.this.props.match.params.story[0].image
        }

        this.render(){
            return(
                <div className="storyboard">
                
                    <img src={this.state.image}/>
                    <div className="story">
                        <p>{this.state.content}</p>
                    </div>
                
                </div>
            )
        }




    }
    

}

export default Storyboard