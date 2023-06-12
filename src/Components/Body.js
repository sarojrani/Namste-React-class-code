import ResturentCard from "./ResturentCard";
// import resList from "../utils/mockdata";
import { useState, useEffect, UserContext, useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allResturent, setAllResturent] = useState([]);
  const [filteredResturent, setFilterdResturent] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  //    console.log(listOfResturent)

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    // console.log("call  this when dependency changed")
    // console.log("useEffect")
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
      //bangolre  / "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // console.log(json)
    setAllResturent(json?.data?.cards[0]?.data?.data?.cards);
    setFilterdResturent(json?.data?.cards[0]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h3>offline,check your internet connection!!</h3>;
  }
  //    console.log("render")
  //    if(filteredResturent?.length==0) return <h1>No resturant mtach to filter!!</h1>
  //early return
  if (!allResturent) return null;
  return allResturent?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="p-5 bg-gray-300 my-5">
          <input
            type="text"
            className="focus:bg-blue-400 p-2 m-2"
            value={searchtext}
            placeholder="search"
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="search-btn p-1 m-2 bg-purple-500 "
            onClick={() => {
              const data = filterData(searchtext, allResturent);
              setFilterdResturent(data);
            }}
          >
            search
          </button>
          <input
            value={user.name}
            onChange={(e) => {
              setUser({
                name: e.target.value,
                email: "saru@123",
              });
            }}
          >
            
          </input>
        </div>

        <div className="flex p-10  flex-wrap  hover:bg-gray-100">
          {filteredResturent.map((resturent) => {
            return (
              <Link
                to={"/restaurant/" + resturent.data.id}
                key={resturent.data.id}
              >
                <ResturentCard {...resturent.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
