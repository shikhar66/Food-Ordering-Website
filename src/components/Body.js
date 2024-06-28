import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterdata(searchInput) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.info.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [searchInput, setsearchInput] = useState();
  const [restaurants, setrestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);  
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchInput);
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
        {/* <RestaurantCard {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info}/>
        <RestaurantCard {...restaurantList[2].info}/>
        <RestaurantCard {...restaurantList[3].info}/> */}
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
      </div>
    </>
  );
};

export default Body;
