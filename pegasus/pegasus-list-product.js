
let pegasusListProduct=[
    {
        id: 28,
        link:"../product/pegasus28.html",
        catogory: "Nike Pegasus",
        name:"Nike Pegasus 40 Premium",
        color:1,
        price:"4.109.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/370a6fc5-7c2f-47e3-a5a2-fb29a80d3e65/pegasus-40-road-running-shoes-ztffW8.png"
    },
   
    {
        id: 29,
        link:"../product/pegasus29.html",
        catogory: "Nike Pegasus",
        name:"Nike Pegasus 40 Premium",
        color:1,
        price:"4.109.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/219ffac4-7dcf-420c-933f-a3ed4d25388a/pegasus-40-road-running-shoes-Tp3XzJ.png"
    },
  
    {
        id: 30,
        link:"../product/pegasus30.html",
        catogory: "Nike Pegasus",
        name:"Nike Pegasus 40",
        color:1,
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a487dc8-1548-4e91-8d00-0ebdfd7fe26a/pegasus-40-road-running-shoes-4TS8dd.png"
    },
    
    {
        id: 31,
        link:"../product/pegasus31.html",
        catogory: "Nike Pegasus",
        name:"Nike Air Zoom Pegasus 40",
        color:1,
        price:"2.679.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8d836a3-bf74-499d-96f8-74b70ee5889f/air-zoom-pegasus-40-older-road-running-shoes-S0gQ5F.png"
    },
    
    {
        id: 32,
        link:"../product/pegasus32.html",
        catogory: "Nike Pegasus",
        name:"Nike Pegasus 40",
        color:1,
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44313b89-d6db-475d-8498-98c3a024d516/pegasus-40-road-running-shoes-4TS8dd.png"
    },
   
    {
        id: 33,
        link:"../product/pegasus33.html",
        catogory: "Nike Pegasus",
        name:"Nike React Pegasus Trail 4 SE",
        color:1,
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/740f828b-eba9-4ef1-8e7c-7f8ae4806b4e/react-pegasus-trail-4-se-trail-running-shoes-qQ8LZG.png"
    },
  
    {
        id: 34,
        link:"../product/pegasus34.html",
        catogory: "Nike Pegasus",
        name:"Nike Pegasus FlyEase SE",
        color:1,
        price:"3.519.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3bcc85a-f7ce-42a3-8edd-ee210d121fd0/pegasus-flyease-se-easy-on-off-road-running-shoes-sQlc76.png"
    },
   
    {
        id: 35,
        link:"../product/pegasus35.html",
        catogory: "Nike Pegasus",
        name:"Nike Dri-FIT",
        color:1,
        price:"819.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0795ce2b-a868-4a6c-933f-5a28bdd3cdb4/dri-fit-running-t-shirt-WWz388.png"
    },
   
    {
        id: 36,
        link:"../product/pegasus36.html",
        catogory: "Nike Pegasus",
        name:"Nike Dri-FIT",
        color:1,
        price:"819.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51bc2f4e-958d-4635-8957-42faf6e0a15f/dri-fit-running-t-shirt-WWz388.png"
    }

];



function createProduct(item){
    const item1 = {img: item.photo, name: item.name, price: item.price};
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
    render(pegasusListProduct);
    
    // thêm data lên local khi click vào btn add
    function handleAddButtonClick(event){
        const valueBtn = event.target.value;
        const item= JSON.parse(valueBtn);
        // console.log(item);
        if (localStorage.getItem("cartItem") !== null) {
            // Key tồn tại trong localStorage
            let listItem=JSON.parse(localStorage.getItem("cartItem"));
            listItem.push(item);
            localStorage.setItem("cartItem",JSON.stringify(listItem));
            alert("The product has been added to your cart");
        } else {
            // Key không tồn tại trong localStorage
            let listItem=[];
            listItem.push(item);
            localStorage.setItem("cartItem",JSON.stringify(listItem));
            alert("The product has been added to your cart");
        }
        
    }