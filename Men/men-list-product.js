
let menListProduct=[
    {
        id: 10,
        link:"../product/men10.html",
        catogory: "Shoes",
        name:"Nike Air Max 97",
        color:"White",
        price:"4.699.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-shoes-EBZrb8.png"
    },

    {
        id: 11,
        link:"../product/men11.html",
        catogory: "Clothes",
        name:"Nike ACG",
        color:"Orange",
        price:"919.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37757891-99cb-4d50-825b-8777ea272dbf/acg-short-sleeve-t-shirt-9sHcl3.png"
    },
    
    {
        id: 12,
        link:"../product/men12.html",
        catogory: "Shoes",
        name:"Nike Air Force 1 07 LV8",
        color:"Orange",
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
    },
    
    {
        id: 13,
        link:"../product/men13.html",
        catogory: "Shoes",
        name:"Nike Dunk Low",
        color:"Green",
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-shoes-sggKLb.png"
    },
   
    {
        id: 14,
        link:"../product/men14.html",
        catogory: "Clothes",
        name:"Jordan Dri-FIT Sport",
        color:"White",
        price:"969.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6668db7-df64-48aa-be50-e3fa1ea08533/jordan-dri-fit-sport-graphic-t-shirt-Pb126C.png"
    },

    {
        id: 15,
        link:"../product/men15.html",
        catogory: "Clothes",
        name:"Nike Sportswear",
        color:"White",
        price:"919.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c3435cf-f874-4999-bea5-ae8e9c9bf72e/sportswear-t-shirt-MRt3f0.png"
    },

    {
        id: 16,
        link:"../product/men16.html",
        catogory: "Shoes",
        name:"Nike Air Max AP",
        color:"Purple",
        price:"2.929.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df754862-b2a4-4949-ba03-63a5567c6c3d/air-max-ap-shoes-3Rdq04.png"
    },
    
    {
        id: 17,
        link:"../product/men17.html",
        catogory: "Clothes",
        name:"Nike Sportswear Air",
        color:"Beige",
        price:"1.574.299",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07d4b840-b060-44e5-aade-825865a1b670/sportswear-air-french-terry-crew-CSbFSR.png"
    },
    
    {
        id: 18,
        link:"../product/men18.html",
        catogory: "Shoes",
        name:"Nike Vaporfly 3",
        color:"Multi Color",
        price:"6.609.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc3980b-c562-4463-9da4-6b7efd2dee59/vaporfly-3-road-racing-shoes-xsDgvM.png"
    }
    
];

function menu(){
    return`
    <div class="menu">
            <div class="croll-bar">
                <ul class="main-menu">
                    <li><a href="#" onClick="allItem()">All Item</a></li>
                    <li><a href="#" onClick="filterCategory(event)">Shoes</a></li>
                    <li><a href="#" onClick="filterCategory(event)">Clothes</a></li>
                    <li><p></p></li>
                    <li class="mm-txt">Colour
                        <ul class="sub-menu">
                            <li><div><a href="#" onClick="filterColor(event)">Beige</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Black</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">White</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Blue</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Brown</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Green</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Grey</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Multi Color</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Orange</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Pink</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Purple</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Red</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">White</a></div></li>
                            <li><div><a href="#" onClick="filterColor(event)">Yellow</a></div></li>
                        </ul>
                    </li>
                    <li><p></p></li>
                    <li id="saleBy" class="mm-txt">Shop By Price
                        <ul class="sub-menu">
                            <li><div><a href="#">Under 1,000,000đ</a></div></li>
                            <li><div><a href="#">1,001,000đ - 3,999,000đ</a></div></li>
                            <li><div><a href="#">Over 4,000,000đ</a></div></li>
                        </ul> 
                    </li>
                </ul>
            </div>
        
    </div> `;
}
let menu1 = document.getElementById("menu-bar");
menu1.innerHTML = menu();

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
                            <a href="${item.link}" class="product -cat">Men's ${item.catogory}</a>
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
    function allItem(){
        wp.innerHTML='';
        render(menListProduct);

    }
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

    function filterCategory(event){
        const filerValue=event.target.innerHTML;
        console.log(filerValue);
        const proFilter = menListProduct.filter(function(pro) {
            return pro.catogory == filerValue;
          });
        console.log(proFilter);
        wp.innerHTML='';
        render(proFilter);
    }
    function filterColor(event){
        const filerValue=event.target.innerHTML;
        console.log(filerValue);
        const proFilter = menListProduct.filter(function(pro) {
            return pro.color == filerValue;
          });
        console.log(proFilter);
        wp.innerHTML='';
        render(proFilter);
    }