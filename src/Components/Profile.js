import { useEffect, useState } from "react";

const Profile=()=>{
    const [count]=useState(0)

    useEffect(()=>{
      const timer=  setInterval(()=>{
            console.log("namste React")
        },1000)
        return()=>{
            clearInterval(timer)
            console.log("useeffect return")
        }
    },[])
return(
    <>
        <h2>profile page</h2>
        <h2>count:{count}</h2>
    </>
)

}

export default Profile;