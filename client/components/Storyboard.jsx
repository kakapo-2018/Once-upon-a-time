import React from 'react'
import data from '../../data/data'

// class Storyboard extends React.Component{
//     constructor(props){
//         // we are expecting keys to JSON
//         super(props)

//         let placing = this.props.match.params.story;

//         this.state={
//             content: "",
//             image: ""
//         }

    

//         // this.reset = this.reset.bind(this)

//         this.componentDidMount(){
//             this.setState({
//                 content: data[placing][0].content,
//                 image: data[placing][0].image
//             })
//         }
//     }

//     // reset(placing){
//     //     let para = data[placing][0].content
//     //     let img = data[placing][0].image

//     //     this.setState({
//     //         content: para,
//     //         image: img
//     //     })
        
//     // }
        
//         render(){
//             return(
//                 <div className="storyboard">
                
//                     <img src={this.state.image}/>
//                     <div className="story">
//                         <p>{this.state.content}</p>
//                     </div>
                
//                 </div>
//             )
//         }
//     }

const Storyboard = props => {

    let placing = props.match.params.story
    let img = data[placing][0].image
    let content = data[placing][0].content


    console.log(`image: ${img} and content: ${content}`);
    
    return(
<div className="storyboard">
                
                <img src={img}/>
                   <div className="story">
                       <p>{content}</p>
                   </div>
                
               </div>
    )
}


export default Storyboard