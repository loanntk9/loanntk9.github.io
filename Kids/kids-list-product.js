
let kidsListProduct=[
    {
        id: 19,
        link:"../product/kids19.html",
        catogory: "Kids' Shoes",
        name:"Nike Sunray Adjust 6 ",
        color:2,
        price:"1.019.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b42fa93-219b-4e48-acc0-d288e8ea5f0a/sunray-adjust-6-older-slides-Sp3ff8.png"
    },
    

    {
        id: 20,
        link:"../product/kids20.html",
        catogory: "Kids' Shoes",
        name:"Nike Rift 2",
        color:1,
        price:"2.039.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9247aa2b-38d5-41ad-a903-1f519739a5b6/rift-2-older-younger-shoes-5g2058.png"
    },
    
    {
        id: 21,
        link:"../product/kids21.html",
        catogory: "Kids' Clothes",
        name:"Nike Air",
        color:1,
        price:"659.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6adf5b20-4e13-4fef-9dcf-64232389e68a/air-older-cropped-t-shirt-9Dn01C.png"
    },
    


    {
        id: 22,
        link:"../product/kids22.html",
        catogory: "Kids' Shoes",
        name:"Nike Air Force 1 LE",
        color:1,
        price:"2.419.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9f1d9ee-a848-4a36-aab9-48b241078ebb/air-force-1-le-older-shoe-TDGHCN.png"
    },
    
    {
        id: 23,
        link:"../product/kids23.html",
        catogory: "Kids' Clothes",
        name:"Nike Sportswear",
        color:1,
        price:"1.429.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0bfcd973-92d9-473d-849c-ada5bcae0ff1/sportswear-older-woven-jacket-Twmn9R.png" 
    },

    {
        id: 24,
        link:"../product/kids24.html",
        catogory: "Kids' Clothes",
        name:"Nike Sportswear",
        color:1,
        price:"559.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cbe270c-a0ae-40d0-9a6a-381458986732/sportswear-older-t-shirt-tbCC9v.png"
    },
    
    {
        id: 25,
        link:"../product/kids25.html",
        catogory: "Kids' Shoes",
        name:"Nike Flex Plus 2",
        color:1,
        price:"1.659.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3dfca905-92d9-4ea3-ac4f-1b787559a215/flex-plus-2-older-running-shoes-kWCpNT.png"
    },
    
    {
        id: 26,
        link:"../product/kids26.html",
        catogory: "Kids' Clothes",
        name:"Nike Outdoor Play",
        color:1,
        price:"1.629.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/487380b1-79d0-43a5-a3e0-90e2bf586400/outdoor-play-older-oversized-woven-jacket-2xFNzT.png"
    },
    
    {
        id: 27,
        link:"../product/kids27.html",
        catogory: "Kids' Shoes",
        name:"Nike Air Zoom Pegasus 40",
        color:1,
        price:"2.679.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e784cf2-1216-488d-a56f-45567b660512/air-zoom-pegasus-40-older-road-running-shoes-S0gQ5F.png"
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
    render(kidsListProduct);
    
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