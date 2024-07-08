import { useEffect,useState } from "react";
import { FETCH_MENU_URL } from "../constants";


const useRestaurant= (ResId)=>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+ResId);
        const json = await data.json();
        setRestaurant(json); 
    }

    return restaurant;

}

export default useRestaurant;