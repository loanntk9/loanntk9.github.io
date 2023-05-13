
let pegasusListProduct=[
    {
        id: 28,
        link:"../product/pegasus28.html",
        catogory: "Shoes",
        name:"Nike Pegasus 40 Premium",
        color:"White",
        price:"4.109.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/370a6fc5-7c2f-47e3-a5a2-fb29a80d3e65/pegasus-40-road-running-shoes-ztffW8.png"
    },
   
    {
        id: 29,
        link:"../product/pegasus29.html",
        catogory: "Shoes",
        name:"Nike Pegasus 40 Premium",
        color:"White",
        price:"4.109.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/219ffac4-7dcf-420c-933f-a3ed4d25388a/pegasus-40-road-running-shoes-Tp3XzJ.png"
    },
  
    {
        id: 30,
        link:"../product/pegasus30.html",
        catogory: "Shoes",
        name:"Nike Pegasus 40",
        color:"White",
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a487dc8-1548-4e91-8d00-0ebdfd7fe26a/pegasus-40-road-running-shoes-4TS8dd.png"
    },
    
    {
        id: 31,
        link:"../product/pegasus31.html",
        catogory: "Shoes",
        name:"Nike Air Zoom Pegasus 40",
        color:"Black",
        price:"2.679.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8d836a3-bf74-499d-96f8-74b70ee5889f/air-zoom-pegasus-40-older-road-running-shoes-S0gQ5F.png"
    },
    
    {
        id: 32,
        link:"../product/pegasus32.html",
        catogory: "Shoes",
        name:"Nike Pegasus 40",
        color:"Pink",
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44313b89-d6db-475d-8498-98c3a024d516/pegasus-40-road-running-shoes-4TS8dd.png"
    },
   
    {
        id: 33,
        link:"../product/pegasus33.html",
        catogory: "Shoes",
        name:"Nike React Pegasus Trail 4 SE",
        color:"Multi Color",
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/740f828b-eba9-4ef1-8e7c-7f8ae4806b4e/react-pegasus-trail-4-se-trail-running-shoes-qQ8LZG.png"
    },
  
    {
        id: 34,
        link:"../product/pegasus34.html",
        catogory: "Shoes",
        name:"Nike Pegasus FlyEase SE",
        color:"Black",
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3bcc85a-f7ce-42a3-8edd-ee210d121fd0/pegasus-flyease-se-easy-on-off-road-running-shoes-sQlc76.png"
    },
   
    {
        id: 35,
        link:"../product/pegasus35.html",
        catogory: "Clothes",
        name:"Nike Dri-FIT",
        color:"white",
        price:"819.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0795ce2b-a868-4a6c-933f-5a28bdd3cdb4/dri-fit-running-t-shirt-WWz388.png"
    },
   
    {
        id: 36,
        link:"../product/pegasus36.html",
        catogory: "Clothes",
        name:"Nike Dri-FIT",
        color:"Black",
        price:"819.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51bc2f4e-958d-4635-8957-42faf6e0a15f/dri-fit-running-t-shirt-WWz388.png"
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
                            <a href="${item.link}" class="product -cat">Nike Pegasus ${item.catogory}</a>
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
    render(pegasusListProduct);
    function allItem(){
        wp.innerHTML='';
        render(pegasusListProduct);
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
        const proFilter = pegasusListProduct.filter(function(pro) {
            return pro.catogory == filerValue;
          });
        console.log(proFilter);
        wp.innerHTML='';
        render(proFilter);
    }
    function filterColor(event){
        const filerValue=event.target.innerHTML;
        console.log(filerValue);
        const proFilter = pegasusListProduct.filter(function(pro) {
            return pro.color == filerValue;
          });
        console.log(proFilter);
        wp.innerHTML='';
        render(proFilter);
    }