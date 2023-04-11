import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    const {status,statusText}=err
return(
    <>
        <h1>opps!!</h1>
        <h2>something went wrong</h2>
        <h2>{status}:{statusText}</h2>
    </>
)
}
export default Error;