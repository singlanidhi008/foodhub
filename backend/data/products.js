const products = [
    // ------ Dermatology  ------- \\
    {
        imgsrc: "https://i.pinimg.com/736x/ee/50/fc/ee50fc45578d516bef255b6486f7cf82.jpg",
        title: "Crispy Veg Double Patty + Crispy Veg Double Patty",
        indication: "Crispy Veg Double Patty + Crispy Veg Double Patty",
        dosage: "",
        sideEffects: "",
        price: 420.00,
        countInStock : 50,
        category: "Dermatology",
    },

    {
        imgsrc: "https://www.pexels.com/photo/crop-cook-preparing-tasty-cheeseburger-in-house-kitchen-5908286/",
        title: "Cheeseburger ",
        indication: "Our best-selling burger with cheese slice, crispy chicken patty, onion and our signature sauce.",
        dosage: "",
        sideEffects: "",
        price: 299.00,
        countInStock : 50,
        category: "Dermatology",
    },
    {
        imgsrc: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p6mwyxapm29wjxtltwpn",
        title: "Veg Whopper",
        indication: "Our signature Whopper with 7 layers between the buns. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces with xxl buns. Its Not A Burger, its a Whopper.",
        dosage: "",
        sideEffects: "",
        price: 300.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/kzqwwiqxj6axbrqlmqln",
        title: "Crispy Veg Double Patty Burger",
        indication: "Our best-selling burger with crispy veg Double patty, fresh onion and our signature sauce.",
        dosage: "",
        sideEffects: "",
        price: 240.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/vhdpx6ohlagdm6utmtss",
        title: "Tikki Twist Burger",
        indication: "Tikki bhi, Twist bhi! Our new signature burger with spicy sauce, onion, mix veg patty & a crunchy twist!",
        dosage: "",
        sideEffects: "",
        price: 220.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://www.pexels.com/photo/club-sandwich-served-on-chopping-board-1600711/",
        title: "Sandwich",
        indication: "",
        dosage: "",
        sideEffects: "",
        price: 190.00,
        countInStock : 50,
        category: "Dermatology",
    },
    {
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVL31oXg_7W0ZspV17nG5fILCYaY5j6lbdrA&usqp=CAU",
        title: "Aloo Patty Sandwich",
        indication: "Aloo patty seasoned with special herbs and spices, paired with your choice of your favourite nutritious veggies, on a freshly baked bread.",
        dosage: "",
        sideEffects: "",
        price: 320.00,
        countInStock : 50,
        category: "Dermatology",
    },

    {
        imgsrc: "https://images.deliveryhero.io/image/talabat/Menuitems/PHOTO-2018-07-14-18-_636675932081171436.jpg",
        title: "Corn and Peas Sandwich",
        indication: "A delicious assortment of green peas, golden corn and diced carrots, dressed with a creamy mixture of eggless mayo sauce and served on your favourite bread.",
        dosage: "",
        sideEffects: "",
        price: 285.00,
        countInStock : 50,
        category: "Dermatology",
    },
    {
        imgsrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fim1.dineout.co.in%2Fimages%2Fuploads%2Frestaurant%2Fsharpen%2F4%2Fz%2Ff%2Fp4640-16058678065fb7991e4a94c.jpg%3Ftr%3Dtr%3An-xlarge&imgrefurl=https%3A%2F%2Fwww.dineout.co.in%2Fchandigarh%2Ftaco-bell-sector-35-west-chandigarh-46860&tbnid=UmESEu_1UO_-aM&vet=12ahUKEwj68NOPltf3AhWPg2MGHWOjAZ0QMygHegUIARCDAg..i&docid=TE37rd79TlkmRM&w=1200&h=569&itg=1&q=Taco&ved=2ahUKEwj68NOPltf3AhWPg2MGHWOjAZ0QMygHegUIARCDAg",
        title: "Taco",
        indication: "",
        dosage: "",
        sideEffects: "",
        price: 325.00,
        countInStock : 50,
        category: "Dermatology",
    },
    {
        imgsrc: "https://b.zmtcdn.com/data/dish_photos/b0e/104dd88dc97727f845d8a963c3888b0e.jpg",
        title: "Veg Crunchy Volcano",
        indication: "Be ready for a crunchy, saucy, explosion. A crunchy volcano shell filled with beans & veg mix, chef's secret sauce, fresh onion & crisp lettuce.",
        dosage: "",
        sideEffects: "",
        price: 225.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6eG4Z5woq14yZV8cG3aHViZcvWgJJH5xXw&usqp=CAU",
        title: "Hot dog",
        indication: "",
        dosage: "",
        sideEffects: "",
        price: 200.00,
        countInStock : 50,
        category: "Dermatology",
    },
    {
        imgsrc: "https://content3.jdmagicbox.com/comp/mumbai/f3/022pxx22.xx22.161230111206.n3f3/catalogue/burger-king-ghatkopar-west-mumbai-home-delivery-restaurants-q4im9t.jpg",
        title: "Veggie Delite™ Signature Wrap",
        indication: "A wholesome wrap that gives you double portion of nutritious veggies you love, with the best of sauces, packed inside a tortilla of your choice.",
        dosage: "",
        sideEffects: "",
        price: 295.00,
        countInStock : 50,
        category: "Dermatology",
    },


    // ------ Dermatology End ------- \\

    // ------ Diabetes ------- \\
    {
        imgsrc:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        title: "Pizza",
        indication:
            "A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier  ",
        dosage:
            "",
        sideEffects:
            "",
        price: 405,
  
  countInStock : 50,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://pasta.com/wp-content/uploads/2021/06/01_Vegan-Gnocchi-1200x900-cropped.jpeg",
        title: "Gnocchi",
        indication:
            "Aromatic and flavorful classic Italian sauce made with tomatoes, garlic, herbs and olive oil served with housemade chicken meatballs, parmesan, basil",
        dosage: "",
        sideEffects:
            "",
        price: 500,
  
  countInStock : 50,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&resize=556,505",
        title: "Pasta",
        indication:
            "Peri-peri spice added to classic creamy sauce pasta makes it into an irresistible burst of flavor with every bite.",
        dosage:
            "",
        sideEffects:
            "",
        price: 450,
  
  countInStock : 50,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://handletheheat.com/wp-content/uploads/2014/08/Focaccia-Bread-SQUARE.jpg",
        title: "Focaccia",
        indication:
            "Artisanal Focaccia is infused with sun-dried bell peppers and dried rosemary for exceptional flavour in every bite.",
        dosage: "",
        sideEffects:
            "",
        price: 298,
  
  countInStock : 50,      category: "Diabetes",
    },
    
    // ------ Diabetes End------- \\
    // ------- Depression ------- \\

    {
        imgsrc: "https://www.shutterstock.com/image-photo/idly-sambar-south-indian-breakfast-568038085",
        title: "idli",
        indication: "Idli is one of the most popular breakfast foods of India.They are normally served with chutney -a spiced ground coconut paste and Sambar (see below) a watery gravy, not too spicy and goes well with idly .",
        dosage: "",
        price: 345,
  
  countInStock : 50,      category: "Depression"
    },

    {
        imgsrc: "https://www.shutterstock.com/image-photo/authentic-plain-south-indian-dosa-1850157568",
        title: "Plain Dosa",
        indication: "Dosa or Sada Dosa are a popular breakfast from the Indian Subcontinent, made using fermented batter of rice and lentils.",
        dosage: "",
        sideEffects: "",
        price: 765,
  
  countInStock : 50,      category: "Depression"
    },

    {
        imgsrc: "https://www.shutterstock.com/image-photo/masala-dosa-south-indian-meal-served-1008673585",
        title: "Masala Dosa",
        indication: "Masala Dosa popular South Indian food made from rice, spicy potatoes, served with Chutney, Sambar. Masala Dosa thin crispy and devour for breakfast, lunch.",
        dosage: "",
        sideEffects: "",
        price: 987,
  
  countInStock : 50,      category: "Depression"
    },

    {
        imgsrc: "https://www.shutterstock.com/image-photo/paneer-butter-dosa-chutney-sambar-1781711519",
        title: "Panner Dosa",
        indication: "Paneer Masala Dosa is a crispy Indian savory crepe with a delicious filling made from paneer (Indian cottage cheese).",
        dosage: "",
        sideEffects: "",
        price: 243,
  
  countInStock : 50,      category: "Depression"
    },

   
    // ------- Depression End ------- \\
    // ------- Dental  ------- \\
    {
        imgsrc: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
        title: "Paneer Butter Masala",
        indication: "Paneer Butter Masala is one of India' s most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time.",
        dosage: "",
        sideEffects: "",
        price: 300,
  
  countInStock : 50,      category: "Dental"
    },

    {
        imgsrc: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg?fit=1840%2C1554&quality=65&strip=all&ssl=1",
        title: "Chana Masala | Punjabi Chole Masala",
        indication: "This Punjabi Chana Masala, also known as Chole Masala, is an authentic North Indian style curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs.",
        dosage: "",
        sideEffects: "",
        price: 620,
  
  countInStock : 50,      category: "Dental"
    },

    {
        imgsrc: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/rajma-recipe-rajma-masala.jpg",
        title: " Rajma Masala",
        indication: "This Rajma recipe is a lightly spiced, creamy and delicious Punjabi curry made with kidney beans, onions, tomatoes and spices.",
        dosage: "",
        sideEffects: "",
        price: 854,
  
  countInStock : 50,      category: "Dental"
    },

   
    // ------- Dental End ------- \\

    // ----- Fracture ------ \\
   
    {
        imgsrc: "https://media.istockphoto.com/photos/strawberry-milkshake-picture-id504639970?k=20&m=504639970&s=612x612&w=0&h=E7ixzZ8vDXlDM4mwKP_IYyisLf3E4OiANrwrOEbBtPc=",
        "title": " Strawberry Shake",
        "indication": "This Rajma recipe is a lightly spiced, creamy and delicious Punjabi curry made with kidney beans, onions, tomatoes and spices.",
        "dosage": "",
        "sideEffects": "",
        "price": 129,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://www.thespruceeats.com/thmb/LlR9HScfODtlFcHNdZWXSNHkXcA=/1500x1000/filters:fill(auto,1)/chocolate-milkshake-4587581-hero-1-22c8a039103c413dafd75f4f4c39ddd4.JPG",
        "title": " Chocolate Thick Shake",
        "indication": "This is thick chocolate shake made with chocolate syrup, milk and ice cream.",
        "dosage": "",
        "sideEffects": "",
        "price": 170,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://c.ndtvimg.com/mango-shake_625x300_1527852574155.jpg",
        "title": " Mango Shake",
        "indication": "A sweet and refreshing mango shake is the perfect drink.",
        "dosage": "",
        "sideEffects": "",
        "price": 120,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wo3thcy9n8abmjsd5ve4",
        "title": "Belgian Dark Chocolate Shake",
        "indication": "Chocolate Shakes with Nut Shakes",
        "dosage": "",
        "sideEffects": "",
        "price": 169,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://i.pinimg.com/736x/8d/78/f2/8d78f2bd3ad7cc9cab20f2887c7acf36--ferrero-rocher.jpg",
        "title": " Ferrero Rocher Shake",
        "indication": "chocolate Ferrero rocher with milk and made into a milk shake.",
        "dosage": "",
        "sideEffects": "",
        "price": 210,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://lapopola.com/wp-content/uploads/2021/03/4.jpg",
        "title": " Alphonso Mango Shake",
        "indication": "mango shake make delicious and creamy shakes.",
        "dosage": "",
        "sideEffects": "",
        "price": 139,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://www.funfoodsyt.com/wp-content/uploads/2018/04/Bubblegum-Milkshake-2.jpg",
        "title": " Bubble Gum Shake",
        "indication": "GREAT Bubblegum Milkshake",
        "dosage": "",
        "sideEffects": "",
        "price": 120,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "http://curlytales.com/wp-content/uploads/2018/10/22519488_316930742116171_7468594052269823798_n.jpg",
        "title": " Chocolate Brownie Shake",
        "indication": "splash of milk and blended it until everything was smooth.",
        "dosage": "",
        "sideEffects": "",
        "price": 230,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://i.ytimg.com/vi/c7gID-bdVE0/maxresdefault.jpg",
        "title": "Chocolate Oreo Shake",
        "indication": "you like your Oreo milkshake chunkier, either blend the Oreos ",
        "dosage": "",
        "sideEffects": "",
        "price": 199,
    
    "countInStock" : 50,      "category": "Fracture"
    },
    {
        "imgsrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUI-I2FC5mP7vvzctCAj6D3hnOBiVsaNiTA&usqp=CAU",
        "title": " Kit Kat Shake",
        "indication": "Yearning for a thick, creamy chocolaty shake,",
        "dosage": "",
        "sideEffects": "",
        "price": 210,
    
    "countInStock" : 50,      "category": "Fracture"
    },



    // ----- Fracture End ----- \\
    // ------- Women Care ----- \\


    
   
];

module.exports = products;
