import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const restaurantList = [
    {
        "info": {
          "id": "871340",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/aa5acd22-119b-4e65-aeb8-6b6030ab553e_871340.jpg",
          "locality": "Cantt. Road",
          "areaName": "Burlington",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.9,
          "parentId": "721",
          "avgRatingString": "3.9",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-26 04:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=871340",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "747866",
          "name": "The Terrace-Hotel Charans Plaza",
          "cloudinaryImageId": "0cd4d1e98a6476d83437ac2684db5d68",
          "locality": "Hazratganj",
          "areaName": "Vidhansabha Marg",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Thalis",
            "North Indian",
            "Chinese",
            "Biryani"
          ],
          "avgRating": 4.1,
          "parentId": "473114",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-26 05:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.2",
              "ratingCount": "5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=747866",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "803172",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG",
          "locality": "CHOWK",
          "areaName": "Lucknow",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-26 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=803172",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "880922",
          "name": "Sara Lazeez Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/8583196e-5ece-41bd-9a83-2ca5b7aeb10d_880922.jpg",
          "locality": "Iradat Nagar",
          "areaName": "Mahanagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Lucknowi"
          ],
          "avgRating": 2.7,
          "parentId": "516526",
          "avgRatingString": "2.7",
          "totalRatingsString": "2",
          "promoted": true,
          "adTrackingId": "cid=14381268~p=1~adgrpid=14381268#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=880922~eid=d446c8a2-e75d-4bc8-a505-50448f6772e4~srvts=1719353930124~collid=45995",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-26 23:55:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {

              },
              "imageBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=880922",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
]

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
    
  return (
    <div className="card" >
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}  />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
       { restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
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
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
