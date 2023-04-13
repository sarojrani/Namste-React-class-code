import React from "react";

class Profile extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            type:"dummy",
        login:"dummy",

        }
        console.log(" child-constructor"+ this.props.name)
    }
//  async componentDidMount(){
//     //best place to make api call
    
//     console.log(" child-componentDidMount"+ this.props.name)
//   const data=await fetch("https://api.github.com/users/sarojrani")
//   const json= await data.json()
//   console.log(json)
//   this.setState( {
//     userInfo:json
//   })
     
// }
componentDidMount(){
    this.timer=setInterval(()=>{
        console.log("evertime call")
    },1000)
}
componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    clearInterval(this.timer)
    console.log("compenent will update")
}

    render(){
        console.log("child-render"+ this.props.name)
        return (
        <><h1>profile class Component </h1>
        {/* <h2>Name:{this.props.name}</h2> */}
        <h1>type:{this.state.userInfo?.type}</h1>
        <h1>login:{this.state.userInfo?.login}</h1>
    
        </>
        )
    }
}
export default Profile;