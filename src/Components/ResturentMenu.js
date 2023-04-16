

import { useParams } from "react-router-dom";
import useResturents from "../utils/useResturents";
const ResturentMenu = () => {
  
  const params = useParams();
  const { resId } = params;

  const resturant=useResturents(resId)

  return (
    <>
      <h1>resturent id:{resId}</h1>
      <h2> namste resturent</h2>
    </>
  );
};
export default ResturentMenu;
