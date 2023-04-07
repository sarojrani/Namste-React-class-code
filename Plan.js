import React from "react";
import  ReactDOM  from "react-dom/client";

const Header=()=>{
    return(
        
            <div className="header">
                <div className="Logo-style">
       <img className="logo-img" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg"/>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Card</li>
                    </ul>
                </div>
            </div>
        
    )
}
const ResturentCard=(props)=>{
    const { resData }=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,minDeliveryTime}= resData?.data
    return(
        <div className="res-card">
        <img className="food-style"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } alt="food-pic" />
          <h3>{name}</h3> 
          <h4>{cuisines.join(",")}</h4> 
          <h4>{avgRating} stars</h4>
          <h4>₹{costForTwo/100} FOR TWO</h4>
          <h4>{minDeliveryTime} minute</h4>
        </div>
    )
}

const resList= [
    {
     
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "486889",
                "name": "AR Food Junction",
                "uuid": "b801e1e0-5a8f-4d6f-b295-c8a381d02e5d",
                "city": "79",
                "area": "Rukanpura",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "xdzjueixxv9k8fhbjpdg",
                "cuisines": [
                  "Biryani",
                  "Chinese",
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 7.599999904632568,
                "slugs": {
                  "restaurant": "ar-food-junction-patliputra-colony-patliputra-colony",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "Digha Rd Near Scholars Abode  School Jay Prakash Nagar Rajeev  Nagar Patna 800024",
                "locality": "Digha Road",
                "parentId": 292231,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "FLAT150 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹150 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": "Closes soon"
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "7.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "486889",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 7.599999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.9",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.9"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "683655",
                "name": "Rikki Tikki",
                "uuid": "14f08bdd-8cd7-48af-a0af-602e361b5019",
                "city": "79",
                "area": "Kankarbagh",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "2a302f105ec371d077438b301b23ccf8",
                "cuisines": [
                  "North Indian",
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 4.699999809265137,
                "slugs": {
                  "restaurant": "rikki-tikki-kankarbagh-kankarbagh",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "Y, Road No-4, Nayachak, Khemnichak, East Lakshmi Nagar, Ramkrishan Nagar, Patna, Bihar 800016, India",
                "locality": "Nayachak",
                "parentId": 407974,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "FLAT150 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹150 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT150 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4.6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "683655",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 4.699999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.9",
                "totalRatings": 20,
                "new": true
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.9"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "547185",
                "name": "Thanco's Natural Ice Cream",
                "uuid": "5862418c-97fd-45e4-9955-28b54324fef1",
                "city": "79",
                "area": "Golambar",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "scrwpavdvlm3b6dnirsg",
                "cuisines": [
                  "Ice Cream"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 4.099999904632568,
                "slugs": {
                  "restaurant": "thancos-natural-ice-cream-srikrishnapuri-srikrishnapuri",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "Ground Floor, Om Kashyap, Boring Road, Kavi  Raman Path, Nageshwar Colony, Patna Sadar,  Patna,",
                "locality": "Nageshwar Colony",
                "parentId": 2522,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "547185",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "lastMileTravel": 4.099999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.9",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.9"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "677701",
                "name": "Grameen Kulfi",
                "uuid": "db384bfa-065f-4fe0-8cb1-5754bddb4486",
                "city": "79",
                "area": "ASHIYANA NAGAR",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "9222019938518b7ebe87fa1c2ae382e4",
                "cuisines": [
                  "Ice Cream",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 12000,
                "costForTwoString": "₹120 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 7.599999904632568,
                "slugs": {
                  "restaurant": "grameen-kulfi-ag-colony-po-khajpura",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "NO A-411, AG COLONY PO, ASHIYANA NAGAR, PATNA-800025 Patna Sadar, Patna, Bihar, 800025",
                "locality": "AG COLONY PO",
                "parentId": 12175,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "7.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "677701",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 7.599999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.8",
                "totalRatings": 20,
                "new": true
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.8"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "677700",
                "name": "NIC Ice Creams",
                "uuid": "ff88d1fa-aa81-44c9-8f7e-8128606c7a48",
                "city": "79",
                "area": "ASHIYANA NAGAR",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "91d6dda411b108965541c16ac1cfe2bc",
                "cuisines": [
                  "Ice Cream",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 12000,
                "costForTwoString": "₹120 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 7.599999904632568,
                "slugs": {
                  "restaurant": "nic-ice-creams-ag-colony-po-khajpura",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "NO A-411, AG COLONY PO, ASHIYANA NAGAR, PATNA-800025 Patna Sadar, Patna, Bihar, 800025",
                "locality": "AG COLONY PO",
                "parentId": 6249,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "Get every item under 159",
                  "shortDescriptionList": [
                    {
                      "meta": "Get every item under 159",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Get every item under 159",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "",
                  "shortDescriptionList": [
                    {
                      "meta": "",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Get every item under 159",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "7.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "677700",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 7.599999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.6",
                "totalRatings": 100,
                "new": true
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.6"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "541695",
                "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                "uuid": "33408ca1-2088-4143-9979-6ba5025019fb",
                "city": "79",
                "area": "Kidwaipuri",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "qxmw7ljjpgkwx2h9vgr0",
                "cuisines": [
                  "Desserts",
                  "Ice Cream",
                  "Ice Cream Cakes"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 5.5,
                "slugs": {
                  "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-srikrishnapuri-srikrishnapuri",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "HOUSE NO. 222 NEHRU NAGAR MANIPURA, PATNA SADAR, PATNA, BIHAR-800001",
                "locality": "Boring Canal Road",
                "parentId": 582,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  {
                    "tradeCampaignHeaders": [
                      
                    ],
                    "avgRating": "4.6",
                    "totalRatings": 1000,
                    "area": "Khajpura",
                    "city": "79",
                    "locality": "Ashokpuri Colony",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "slaString": "30 MINS",
                    "select": false,
                    "id": "483009",
                    "slugs": {
                      "restaurant": "kwality-wall’s-frozen-dessert-&-ice-cream-shop-khajpura-khajpura",
                      "city": "patna"
                    },
                    "feeDetails": {
                      "restaurant_id": 483009,
                      "fees": [
                        {
                          "name": "distance",
                          "fee": 4200,
                          "message": ""
                        },
                        {
                          "name": "time",
                          "fee": 0,
                          "message": ""
                        },
                        {
                          "name": "special",
                          "fee": 0,
                          "message": ""
                        }
                      ],
                      "total_fee": 4200,
                      "message": "",
                      "title": "Delivery Charge",
                      "amount": "4200",
                      "icon": ""
                    },
                    "promoted": true,
                    "adTrackingID": "cid=6427362~p=1~eid=00000187-5768-ecca-1120-82530026011d"
                  },
                  {
                    "tradeCampaignHeaders": [
                      
                    ],
                    "avgRating": "4.3",
                    "totalRatings": 50,
                    "area": "Khajpura",
                    "city": "79",
                    "locality": "Baily Road",
                    "deliveryTime": 40,
                    "minDeliveryTime": 40,
                    "maxDeliveryTime": 40,
                    "slaString": "40 MINS",
                    "select": false,
                    "id": "633716",
                    "slugs": {
                      "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-khajpura-khajpura",
                      "city": "patna"
                    },
                    "feeDetails": {
                      "restaurant_id": 633716,
                      "fees": [
                        {
                          "name": "distance",
                          "fee": 6200,
                          "message": ""
                        },
                        {
                          "name": "time",
                          "fee": 0,
                          "message": ""
                        },
                        {
                          "name": "special",
                          "fee": 0,
                          "message": ""
                        }
                      ],
                      "total_fee": 6200,
                      "message": "",
                      "title": "Delivery Charge",
                      "amount": "6200",
                      "icon": ""
                    },
                    "promoted": false,
                    "adTrackingID": ""
                  }
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "5.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "541695",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "lastMileTravel": 5.5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.6",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.6"
              }
            },
            
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "515587",
                "name": "Biryani Nawab",
                "uuid": "e77629ec-8b1b-4e1e-a458-887f31625afe",
                "city": "79",
                "area": "Anandpuri",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "xofwciq1dvl4rfnz9lyl",
                "cuisines": [
                  "Biryani",
                  "Beverages"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "slaString": "34 MINS",
                "lastMileTravel": 4.199999809265137,
                "slugs": {
                  "restaurant": "biryani-nawab-srikrishnapuri-srikrishnapuri",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "Shop No. 8, G-3, AMS Park, Behind  Heera Panna Jewellers, Boring,  Patna Sadar, Patna, , Bihar, 800001",
                "locality": "Boring Road",
                "parentId": 46886,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "Flat ₹125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4.1 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "515587",
                  "deliveryTime": 34,
                  "minDeliveryTime": 34,
                  "maxDeliveryTime": 34,
                  "lastMileTravel": 4.199999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.6",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.6"
              }
            },
            
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "657008",
                "name": "Anshu'S Kitchen",
                "uuid": "e48c3f05-74eb-43f7-ac55-8d59e403f31c",
                "city": "79",
                "area": "Fraser Road",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "7900fe21495c59310ab5ee848d1b871f",
                "cuisines": [
                  "Indian",
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 2.799999952316284,
                "slugs": {
                  "restaurant": "anshu's-kitchen-fraser-road-fraser-road",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "J45V+CFV,  603, BANSHI APPARTMENT, RK Bhattacharya Rd, Pirmuhani, Salimpur Ahra, Golambar, Patna, Bihar 800001, India",
                "locality": "Bhattacharya Road",
                "parentId": 355242,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": "Closes soon"
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "657008",
                  "deliveryTime": 39,
                  "minDeliveryTime": 39,
                  "maxDeliveryTime": 39,
                  "lastMileTravel": 2.799999952316284,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.5",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.5"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "636371",
                "name": "The Cafe Insta",
                "uuid": "13a6c90d-35fa-4127-86fe-ea0fcae1421c",
                "city": "79",
                "area": "Khajpura",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "n9klgdaoipvnimwrbq7e",
                "cuisines": [
                  "Continental",
                  "Chinese",
                  "Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 44,
                "minDeliveryTime": 44,
                "maxDeliveryTime": 44,
                "slaString": "44 MINS",
                "lastMileTravel": 10.600000381469727,
                "slugs": {
                  "restaurant": "the-cafe-insta-khajpura-khajpura",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "Gola road Bailey road near muneshwari memorial clinic Dr anita singh, opposite Sonu Market Road, Vastu Ganga Colony, Vivek Vihar Colony, Patna, Bihar 801503, India",
                "locality": "Vastu Ganga Colony",
                "parentId": 257248,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "Flat ₹125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 6200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 6200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "6200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "10.6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "636371",
                  "deliveryTime": 44,
                  "minDeliveryTime": 44,
                  "maxDeliveryTime": 44,
                  "lastMileTravel": 10.600000381469727,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.4"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "681033",
                "name": "Highlight Kitchen",
                "uuid": "598b3d8c-5d1e-4dd8-8bc7-a6aa960c86cb",
                "city": "79",
                "area": "Khajpura",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "f34657e4f398eec0e714971b58f8be69",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Chinese",
                  "Tandoor",
                  "Snacks"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "slaString": "35 MINS",
                "lastMileTravel": 7.800000190734863,
                "slugs": {
                  "restaurant": "highlight-kitchen-patliputra-colony-patliputra-colony",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "JAYPRAKASH NAGAR, A.G COLONY, P.O- AASHIYANA NAGAR, P.S- RAJIV NAGAR",
                "locality": "Jayprakash Nagar",
                "parentId": 406982,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "40% off",
                  "shortDescriptionList": [
                    {
                      "meta": "40% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "40% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "7.8 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "681033",
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 7.800000190734863,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 50,
                "new": true
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.4"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "542816",
                "name": "Meera hut",
                "uuid": "97624b32-fc4e-4ae8-b4a4-a18ff651e544",
                "city": "79",
                "area": "Sri Krishnapuri",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "rnzgyzbmnnaop84xux8m",
                "cuisines": [
                  "North Indian",
                  "Fast Food",
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "slaString": "33 MINS",
                "lastMileTravel": 4.199999809265137,
                "slugs": {
                  "restaurant": "meera-hut-srikrishnapuri-srikrishnapuri",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "H.No.92,Montessori School Ln, Anandpuri, Patna, Bihar, India",
                "locality": "Boring Road",
                "parentId": 326249,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "10% off",
                  "shortDescriptionList": [
                    {
                      "meta": "10% off | Use JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹100 on orders above ₹300| Use code JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "10% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹100 on orders above ₹300| Use code JUMBO",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4.1 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "542816",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "lastMileTravel": 4.199999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.4"
              }
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "641565",
                "name": "Somen19",
                "uuid": "e88d5298-0045-47aa-8d24-ce3750ecc889",
                "city": "79",
                "area": "Sri Krishnapuri",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "ed517d693c01179f5a25d5320ce9fcab",
                "cuisines": [
                  "Indian",
                  "Biryani",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "slaString": "32 MINS",
                "lastMileTravel": 4.099999904632568,
                "slugs": {
                  "restaurant": "somen19-srikrishnapuri-srikrishnapuri",
                  "city": "patna"
                },
                "cityState": "79",
                "address": "23-B, Srikrishnapuri, West Boring Canal Road, Patna, Bihar _800001",
                "locality": "Boring Canal Road",
                "parentId": 387336,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "10% off",
                  "shortDescriptionList": [
                    {
                      "meta": "10% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "10% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "641565",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "lastMileTravel": 4.099999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 20,
                "new": false
              },
              "subtype": "basic",
              "scrubber": {
                "value": "RATING 4.4"
              }
            }
          ]
          
            //   https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING
const Body=()=>{
    return(
        <div className="body">
        <div className="serach-container"> serach</div>
        
            <div className="res-container">

           {
            resList.map((resturent)=> (
              <ResturentCard  key={resturent.data.id} resData={resturent} />)
            )
           }
            
             </div>
        </div>
    )
}
const Footer=()=>{
    return(
        <div className="footer">
           <ul>
            <li>CopyRight</li>
            <li>Links</li>
            <li>Address</li>
            <li>Contant</li>
           </ul>
        </div>
    )
}
const AppLayout=() => {
    return <div className="layout">
    <Header />
    <Body />
    <Footer />
    </div>
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
