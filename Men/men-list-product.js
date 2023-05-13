
let menListProduct=[
    {
        id: 10,
        link:"../product/men10.html",
        catogory: "Men's Shoes",
        name:"Nike Air Max 97",
        color:1,
        price:"4.699.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-shoes-EBZrb8.png"
    },

    {
        id: 11,
        link:"../product/men11.html",
        catogory: "Men's Clothes",
        name:"Nike ACG",
        color:1,
        price:"919.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37757891-99cb-4d50-825b-8777ea272dbf/acg-short-sleeve-t-shirt-9sHcl3.png"
    },
    
    {
        id: 12,
        link:"../product/men12.html",
        catogory: "Men's Shoes",
        name:"Nike Air Force 1 '07 LV8",
        color:1,
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
    },
    
    {
        id: 13,
        link:"../product/men13.html",
        catogory: "Men's Shoes",
        name:"Nike Dunk Low",
        color:1,
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-shoes-sggKLb.png"
    },
   
    {
        id: 14,
        link:"../product/men14.html",
        catogory: "Men's Clothes",
        name:"Jordan Dri-FIT Sport",
        color:1,
        price:"969.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6668db7-df64-48aa-be50-e3fa1ea08533/jordan-dri-fit-sport-graphic-t-shirt-Pb126C.png"
    },

    {
        id: 15,
        link:"../product/men15.html",
        catogory: "Men's Clothes",
        name:"Nike Sportswear",
        color:3,
        price:"919.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c3435cf-f874-4999-bea5-ae8e9c9bf72e/sportswear-t-shirt-MRt3f0.png"
    },

    {
        id: 16,
        link:"../product/men16.html",
        catogory: "Men's Shoes",
        name:"Nike Air Max AP",
        color:1,
        price:"2.929.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df754862-b2a4-4949-ba03-63a5567c6c3d/air-max-ap-shoes-3Rdq04.png"
    },
    
    {
        id: 17,
        link:"../product/men17.html",
        catogory: "Men's Clothes",
        name:"Nike Sportswear Air",
        color:1,
        price:"1.574.299",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07d4b840-b060-44e5-aade-825865a1b670/sportswear-air-french-terry-crew-CSbFSR.png"
    },
    
    {
        id: 18,
        link:"../product/men18.html",
        catogory: "Men's Shoes",
        name:"Nike Vaporfly 3",
        color:1,
        price:"6.609.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc3980b-c562-4463-9da4-6b7efd2dee59/vaporfly-3-road-racing-shoes-xsDgvM.png"
    }
    
];



function createProduct(item){
    const item1 = {id:item.id, img: item.photo, name: item.name, price: item.price};
    const item2= JSON.stringify(item1);
    
        return `
            <div class="products">
                        <div class="product-top">
                            <a href="${item.link}" class="product-thumb">
                                 <img src="${item.photo}">
                            </a>
                            <button class="add" id="${item.id}" value='${item2}' onClick="handleAddButtonClick(event)" >ADD +</button>
                        </div>
                        <div class="product-info">
                            <a href="${item.link}" class="product -cat">${item.catogory}</a>
                            <a href="${item.link}" class="product-name">${item.name}</a>
                            <a href="${item.link}" class="product-color">${item.color} colour</a>
                            <a href="${item.link}" class="product-price">price:${item.price}đ</a>
                        </div>
            </div>
        `;
    }
    
    const wp= document.getElementById("wraper");
    // console.log(wp);
    
    function render(list){
        for(let i=0; i< list.length; i++){
            const j= createProduct(list[i]);
             wp.innerHTML += j;
        }
    }
    render(menListProduct);
    
    // thêm data lên local khi click vào btn add
    function handleAddButtonClick(event){
        const valueBtn = event.target.value;
        const item= JSON.parse(valueBtn);
        // console.log(item);
        if (localStorage.getItem("cartItem") !== null) {
            // Key tồn tại trong localStorage
            // let listItem=JSON.parse(localStorage.getItem("cartItem"));
            // listItem.push(item);
            // localStorage.setItem("cartItem",JSON.stringify(listItem));
            // alert("The product has been added to your cart");
    
            let mapItems = JSON.parse(localStorage.getItem("cartItem"));
            
            let itemJSON = JSON.stringify(item);
            console.log("itemJSON:", itemJSON);
            
            mapItems[item.id] = item;
    
            localStorage.setItem("cartItem",JSON.stringify(mapItems));
            alert("The product has been added to your cart");
    
        } else {
            // Key không tồn tại trong localStorage
            // let listItem=[];
            // listItem.push(item);
            // localStorage.setItem("cartItem",JSON.stringify(listItem));
            // alert("The product has been added to your cart");
    
           
            let itemJSON = JSON.stringify(item);
            console.log("itemJSON:", itemJSON);
    
            let mapItems = {
                [item.id] : item
            };
    
            localStorage.setItem("cartItem",JSON.stringify(mapItems));
            alert("The product has been added to your cart");
        }
        
    }