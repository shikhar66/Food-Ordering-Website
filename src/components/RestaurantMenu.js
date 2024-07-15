import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const {resId } = useParams();
      
    const [restaurant,setRestaurant]= useState(null );
    const [menuItems,setMenuItems]= useState([]);

    useEffect(() => {
        getRestaurantInfo();
    },[])

   
    async function getRestaurantInfo(){
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId);;
        const json = await data.json();
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    const dispatch =useDispatch(); 
    
    const addFoodItem = (item)=> {
        dispatch(addItem(item));
    };

    return (!restaurant) ? <Shimmer/> : (
        <div className="flex ">
        <div>
        <h1>Restaurant ID:{resId}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
        </div>
       
        <div className="p-5">
            <h1>Menu</h1>
            <ul>
                {menuItems?.map((items) => (
                    <li key={items?.card?.info?.id}>{items?.card?.info?.name }<button className="p-1 ml-2  rounded-lg bg-green-100" onClick={()=>addFoodItem(items?.card?.info)}>Add</button></li>
                ))}
            </ul>

        </div>
        </div>
    )




    // const restaurant = useRestaurant(ResId);
    // return (!restaurant)? <Shimmer/> : (
    //     <div className="menu">
    //         <div>
    //             <h1>Restaurant is: {ResId}</h1>
    //             <h2>{restaurant.name}</h2>
    //             <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
    //             <h3>{restaurant.area}</h3>
    //             <h3>{restaurant.city}</h3>
    //             <h3>{restaurant.avgRating}</h3>
    //             <h3>{restaurant.costForTwoMsg}</h3>
    //         </div>
    //         <div>
    //             <h1>Menu</h1>
    //             <ul>
    //                 {Object.values(restaurant?.menu?.items).map((item) =><li key={item.id}>{item.name}</li>) }
    //             </ul>
    //         </div>
    //     </div>
    // )
}

export default RestaurantMenu;