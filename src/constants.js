export const swiggy_api_URL =
  "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  export const swiggy_menu_api_URL =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const restaurantList = [
  {
    restaurants: {
      info: {
        id: "75556",
        name: "McDonald's",
        cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
        locality: "Tania Horizon Mall",
        areaName: "Nalasopara West",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "75556",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3900,
        },
        parentId: "630",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-14 00:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-tania-horizon-mall-nalasopara-west-mumbai-75556",
        type: "WEBLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "38949",
        name: "Domino's Pizza",
        cloudinaryImageId: "bng1la7zqlxu1jhckkxw",
        locality: "Vasai Nalasopara Link Road",
        areaName: "Nalasopara East",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "38949",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "2456",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-14 02:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-vasai-nalasopara-link-road-nalasopara-east-mumbai-38949",
        type: "WEBLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "47594",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "NalaSopora",
        areaName: "Vasai West",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "47594",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4900,
        },
        parentId: "721",
        avgRatingString: "3.8",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-14 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-nalasopora-vasai-west-mumbai-47594",
        type: "WEBLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "351129",
        name: "Grameen Kulfi",
        cloudinaryImageId: "gkemzbjznxyjuyj5emso",
        locality: "Nalasopara West",
        areaName: "PATANKAR PARK CHS",
        costForTwo: "₹120 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.7,
        veg: true,
        feeDetails: {
          restaurantId: "351129",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3900,
        },
        parentId: "12175",
        avgRatingString: "4.7",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-14 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/grameen-kulfi-nalasopara-west-patankar-park-chs-mumbai-351129",
        type: "WEBLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "59032",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Ambadi Road",
        areaName: "Vasai West",
        costForTwo: "₹250 for two",
        cuisines: ["Desserts"],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "59032",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 6800,
        },
        parentId: "5588",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-13 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ambadi-road-vasai-west-mumbai-59032",
        type: "WEBLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "58733",
        name: "Behrouz Biryani",
        cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
        locality: "Sairam Nagar",
        areaName: "Vasai West",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "58733",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 6800,
        },
        parentId: "1803",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-13 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/behrouz-biryani-sairam-nagar-vasai-west-mumbai-58733",
        type: "WEBLINK",
      },
    },
  },
];
