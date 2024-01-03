import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import dominos from "./dominos.png";
import mcd from "./mcd.png";

//trial
const heading = (<div>
    <h1>I'm JSX who is rendering now</h1>
</div>)


// const obj = {
//     resName : "Aggarwal sweets",
//     cusines: "sweets"
// }


//DESTRUCTURING IN JAVASCRIPT.
// const{alpha,cusines} = obj;     //you have to use the same name as in object while destructing..
// console.log(cusines);
// console.log(alpha);
// console.log(obj);


//Does it only work with 'props' keyword?

// const Title = (obj)=>{ 
//     const {resName,cusines} = obj;
//     // console.log(resName);
//     // console.log(obj);               //showing me empty object. neither it will print {obj.resName}...
//     console.log(resName);
//     return (
//         <div>
//             <h1>{resName}</h1>                      
//             <h1>hello</h1>
//         </div>
//     )
// }


//if your prop is already 'object'..then destruct it...
// const Title = (props)=>{
//     const{resData} = props;     //This is really needed to do.
//     console.log(resData);
//     return (
//         <div>
//             <h1>Hello Restro</h1>
//             <h2>{resData.resName}</h2>
//             <h3>{resData.cusines}</h3>
//             <h1>{props.resName}</h1>        
//             <h1>{props.owner}</h1>
//         </div>
//     )
// }





//2.IT IS WORKING FINE WHEN WE PASS DATA FROM 'COMPONENT CALLING POSITION...AT END MEANS...'
// const Title = (props)=>{ 
//     return (
//         <div>
//             <h1>{props.power}</h1>                      
//             <h1>hello</h1>
//         </div>
//     )
// }



//CODING ASSIGNMENT-4

const AppComponent = ()=>{
    return (
        <div id="app">
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}


//Header component
const Header = ()=>{
    return (
        <div id="app-header">
        <div className="logo-container">  
        <img className="app-logo" src={logo}></img>
        </div> 
        <div className="nav-container">
            <ul className="nav-items">
                <li>HOME</li>
                <li>CART</li>
                <li>ABOUT US</li>
            </ul>
        </div>
        </div>
    )
}


//Body Component

const Body = ()=>{
    return (
        <div id="body">
            <Search/>
            <CardContainer/>
        </div>
    )
}

//search component

const Search = ()=>{
    return (
        <div id="search-container">
            <input className="searchbar" type="text" placeholder="Search your Restro"></input>
           <button className="searchbutton">Search</button>
        </div>
    )
}

//Live swiggy data
//Sidhi si baat hai..array of object nhi aata tujhe..na he access karna..javascript mehath tang hai bsss...
const resList = [
    {
      "info": {
        "id": "168043",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "cloudinaryImageId": "fyuyd6jokqveketdmzpn",
        "locality": "Sector 10",
        "areaName": "Rohini",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.1,
        "parentId": "375065",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=10340603~p=1~eid=0000018c-c466-6137-7874-c8af00bc0167~srvts=1704102093111~45995",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 04:00:00",
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
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=168043",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "767725",
        "name": "Love Poori Wala",
        "cloudinaryImageId": "e554c893e09e1bb60f6c52e8373e0e08",
        "locality": "Sector 2",
        "areaName": "Rohini",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Indian",
          "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "13819",
        "avgRatingString": "4.4",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=767725",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "697863",
        "name": "Amritsari kulccha corner",
        "cloudinaryImageId": "2336b377fa1c6225ab6eaa8f3eea2504",
        "locality": "Sector-3",
        "areaName": "Rohini",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Street Food",
          "Thalis",
          "Beverages",
          "Desserts",
          "Home Food"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "15325",
        "avgRatingString": "4.0",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 21:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹45"
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=697863",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "451989",
        "name": "Hyderabadi Handi Biryani",
        "cloudinaryImageId": "x4klsynvibffbmvb7ogp",
        "locality": "Sector 7",
        "areaName": "Rohini",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 3.9,
        "parentId": "11087",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
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
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=451989",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "643750",
        "name": "WeFit-Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "727ee82703c6fa71d1c954ead91dc20d",
        "locality": "Sector 7",
        "areaName": "Rohini",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "355285",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=10357333~p=2~eid=0000018c-c466-6137-7874-c8b000bc0226~srvts=1704102093111~45995",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "17-27 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=643750",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "735634",
        "name": "Hari Om Chole Bhature",
        "cloudinaryImageId": "2143e05e16b0a949123def83f6353f2b",
        "locality": "Avantika Enclave",
        "areaName": "Rohini",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 2.2,
        "veg": true,
        "parentId": "14142",
        "avgRatingString": "2.2",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
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
          "header": "₹120 OFF",
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
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=735634",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "780423",
        "name": "Thalairaj Biryani",
        "cloudinaryImageId": "f94637edc026ad1d5d2aa9b9a559bcf0",
        "locality": "Sector 7",
        "areaName": "Rohini",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "Kebabs"
        ],
        "avgRating": 4.4,
        "parentId": "433875",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
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
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=780423",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "682631",
        "name": "Cake'O'Clocks",
        "cloudinaryImageId": "23efdc4ed72ca12167d671583b84a7d6",
        "locality": "Sector-6",
        "areaName": "Rohini",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "55230",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 00:00:00",
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
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=682631",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "809718",
        "name": "Angeethi tadka",
        "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
        "locality": "Rohini",
        "areaName": "Rohini",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Burgers"
        ],
        "parentId": "482979",
        "avgRatingString": "NEW",
        "promoted": true,
        "adTrackingId": "cid=10327996~p=4~eid=0000018c-c466-6137-7874-c8b200bc0469~srvts=1704102093111~45995",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-08 00:00:00",
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
          "header": "₹120 OFF",
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
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=809718",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "258189",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "Village Naharpur",
        "areaName": "Pushpanjali",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "319582",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=258189",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "36900",
        "name": "Wah Bhai Wah",
        "cloudinaryImageId": "ach30rz8ebyckifblioq",
        "locality": "Sector 4",
        "areaName": "Rohini",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tandoor",
          "Beverages"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "14882",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
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
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
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
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=36900",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "10392",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Sector 3",
        "areaName": "Rohini",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 04:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available"
                  }
                }
              ]
            },
            "textBased": {
              
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
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=10392",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "390153",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
        "locality": "Sector 7",
        "areaName": "Prashant Vihar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "avgRating": 4.4,
        "parentId": "22452",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "promoted": true,
        "adTrackingId": "cid=10357318~p=5~eid=0000018c-c466-6137-7874-c8b300bc055a~srvts=1704102093111~45995",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "12-22 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "description": "",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                }
              ]
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=390153",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "10208",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Sector 10",
        "areaName": "Rohini",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 06:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
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
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=10208",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "254192",
        "name": "McDonald's",
        "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "locality": "Sector 10",
        "areaName": "Rohini",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 01:00:00",
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
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
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
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=254192",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  ]


// console.log(resObj);




//card-container component

// const CardContainer = ()=>{
//     return (
//         <div id="card-container">
//             <Card resName="Dominos Pizza" key="0" city="Delhi" image={dominos}/>
//             <Card resName="McDonald's" key="1" city="gurugram" image={mcd}/>
//         </div>
//     )
// }
const CardContainer = ()=>{
    return (
        <div id="card-container">
            {
                resList.map((restaurant)=>{
                    return(
                        <Card key={restaurant.info.id} resData={restaurant}/>
                    )
                })
            }



            {/* <Card resData={resList[0]} gender="male"/>
            <Card resData={resList[1]} gender="female"/> */}
            {/* <Card resData={resList[2]}/>
            <Card resData={resList[3]}/>
            <Card resData={resList[4]}/>
            <Card resData={resList[5]}/>
            <Card resData={resList[6]}/>
            <Card resData={resList[7]}/>
            <Card resData={resList[8]}/>
            <Card resData={resList[9]}/> */}
        </div>
    )
}





//card component

// const Card = (props)=>{
//     const{resName,city,image} = props;
//     return (
//         <div id="card">
//                 <div className="card-image-container">
//                 <img className="card-img" alt="dominos" src={image}></img>
//                 </div>
//                 <div className="card-details">
//                 <h2>{resName}</h2>
//                 <h3>{city}</h3>
//                 <h3>starts from 99</h3>
//                 <h3>Delivery in 39 mins</h3>
//                 </div>
//         </div>
//     )
// }


const Card = (props)=>{
    // console.log(props);

    //IMPORTANT:Destructuring is only for to avoid 'to again nd again using props.resDatinsted of resData'..
    const{resData,gender} = props;
    const{cloudinaryImageId,name,areaName,cuisines,costForTwo} = resData.info;
    // console.log(resData);
    console.log(gender);
    return (
        <div id="card">
                <div className="card-image-container">
                <img className="card-img" alt="dominos" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
                </div>
                <div className="card-details">
                <h3>{name}</h3>
                <h4>{areaName}</h4>
                <h4>{cuisines.join(', ' )}</h4>
                <h4>{costForTwo}</h4>
                </div>
        </div>
    )
}



//Footer component

const Footer = ()=>{
    return (
        <div id="footer">
            <div className="address">
                <h3>Gurugram Headquarter</h3>
                <h4>Near Cyber park</h4>
                <p>Building No-697/23</p>
            </div>
            <div className="social-icons-container">

            </div>
        </div>
    )
}









































const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);