import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterdata } from "../utils/Helper";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const {user,setUser}=useContext(UserContext);

  useEffect(() => {
    async function getRestaurants() {
      try
    {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
  
      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }catch (error) {
      console.error('Error fetching data:', error);
    };
  }
    getRestaurants();
  }, []);

  

  // if(filteredRestaurants?.length === 0) return <h1>No restaurant match your filter.</h1>

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline,Please check your internet...</h1>;
  }

  if (!allRestaurants) return null;

  
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-lime-200 my-5">
        <input
         
          type="text"
          className="focus:bg-blue-200 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        />
        <button
          
          className="p-2 m-2 bg-green-400 hover:bg-green-500 rounded-lg "
          onClick={() => {
            const data = filterdata(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input type="text" value={user.name} onChange={(e)=>setUser({name:e.target.value})}/>
      </div>
      <div className="flex flex-wrap" >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
