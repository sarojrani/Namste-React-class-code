import { createContext } from "react";

const UserContext=createContext({
   user:{ name:"dummy",
    email:"sk@gmail.com"}
})
UserContext.displayName="UserContext";
export default UserContext
//C:\Users\DELL\Desktop\Namste-React\src\utils\UserContext.js