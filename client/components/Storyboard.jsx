import React from 'react'

class Storyboard extends React.Component{
    constructor(props){
        // we are expecting content and image to be passed
        super(props)

        this.state = {
            content: "",
            image: ""
        }

        this.render(){
            return(
                <div className='storyboard'>
                
                    <img src={image}/>
                    <div className='story'>
                        <p>{content}</p>
                    </div>
                
                </div>
            )
        }




    }
    

}

export default Storyboard