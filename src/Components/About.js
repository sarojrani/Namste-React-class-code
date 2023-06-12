// import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
import { Component } from "react";
import ProfileFunction from "./Profile";
// import { useContext } from "react";
// import UserContext from "../utils/userContext";

// const About = () => {
//   return (
//     <>
//       <p>this is about page</p>
//       {/* <Outlet /> */}
//       {/* <ProfileFunction /> */}
//       <Profile  name="saroj"/>
//     </>
//   );
// };
// export default About;

class About extends Component {
  constructor(props) {
    super(props);
  
    console.log("parent-constructor");
  }
  componentDidMount() {
    console.log("parent-didmount");
  }
  render() {
    console.log(" parent-render");
    return (
      <>
        <p>this is about page</p>
        {/* <UserContext.Consumer>
          {(value)=console.log(value)}
        </UserContext.Consumer> */}
        <ProfileFunction name={"first child"} />
        
      </>
    );
  }
}
export default About;
