import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
   const [isLogedIn,setIsLogedIn]=useState(false)

    return(
        
            <div className="header">
                <div className="Logo-style">
       <img className="logo-img" src={LOGO_URL}/> </div>
       
                <div className="nav-item">
                    <ul>
                    
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                       
                    </ul>
                </div>
                {isLogedIn?(
                <button onClick={()=>setIsLogedIn(false)}>Logout</button>):(<button onClick={()=>setIsLogedIn(true)}>Login</button>)}
                
                        
            </div>
        
    )
}
export default Header;