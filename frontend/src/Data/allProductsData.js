import fastfood from "../images/food5.webp";
import southindian from "../images/food6.jpg";
import Italian from "../images/food8.jpg";
import indianfood from "../images/food7.jpg";
import shake from "../images/food9.jpg";
import desert from "../images/food10.jpg";


const productsData = [
    {
        id: "1",
        imgsrc: fastfood,
        title: "Fast Food",
        info: "Fast Food only on FoodHub",
        link: "/products/fastfood"
    },
    {
        id: "2",
        imgsrc: Italian,
        title: "Italian",
        info: "Italian Food only on FoodHub",
        link: "/product"
    },
    {
        id: "3",
        imgsrc: southindian,
        title: "South Indian",
        info: "South Indian Food only on FoodHub",
        link: "/products/southindian"
    },
    {
        id: "4",
        imgsrc: indianfood,
        title: "Indian",
        info: "Indian Food only on FoodHub",
        link: "/products/indianfood"
    },

    {
        id: "5",
        imgsrc: shake,
        title: "Shakes",
        info: "Milk Shakes only on FoodHub",
        link: "/products/shake"
    },
    {
        id: "6",
        imgsrc: desert,
        title: "Deserts",
        info: "Deserts only on FoodHub",
        link: "/products/deserts"
    },

    // {
    //     imgsrc: bloodPressure,
    //     title: "Blood Pressure",
    //     info: "Medicines on Blood Pressure",
    //     link: "/Dermatology"
    // },
];

export default productsData;
