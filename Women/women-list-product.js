
let womenListProduct=[
    {
        id: 10,
        catogory: "Women's clothing",
        name:"The Nike Polo ",
        color:2,
        price:"1,479,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e80a651-e22c-4998-b156-68cac8a33e35/polo-polo-j38PbP.png"
    },
    

    {
        id: 11,
        link:"",
        catogory: "Women's clothing",
        name:"Naomi Osaka Collection",
        color:1,
        price:"1,299,649₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e11c8cb8-a1bd-461c-be40-5ba14a12d7d7/naomi-osaka-collection-cropped-tennis-top-trPTd2.png"
    },
    
    {
        id: 12,
        catogory: "Women's clothing",
        name:"Nike Dri-FIT ADV AeroSwift",
        color:1,
        price:"1,429,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ae6aa5f-baf7-4e7c-942d-4a6ba3d547d0/dri-fit-adv-aeroswift-racing-crop-top-s0Ctkr.png"
    },
    


    {
        id: 13,
        catogory: "Women's clothing",
        name:"Nike Sportswear Essential",
        color:3,
        price:"659,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53eb91da-8797-4664-b7b0-a42a95f1d4fa/sportswear-essential-t-shirt-9RqXMb.png"
    },
    
    {
        id: 14,
        catogory: "Women's clothing",
        name:"Sustainable Materials Nike Swoosh",
        color:1,
        price:"869,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vl2kixyrcn1aneoc9egs/swoosh-support-1-piece-pad-sports-bra-bhxKdc.png"
    },
    
    {
        id: 15,
        catogory: "Women's Shoe",
        name:"Nike Air Force 1 '07 LX",
        color:1,
        price:"3,519,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f6fa0bc-9f31-4159-b721-d64a0cd747c8/air-force-1-07-lx-shoe-Jpw4wf.png"
    },
    
    {
        id: 16,
        catogory: "Women's Shoes",
        name:"Nike Air Force 1 High SE",
        color:2,
        price:"3,669,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d5f84f54-480d-4186-a0ea-3fea15f59d67/air-force-1-high-se-shoes-6b703K.png"
    },
    

    {
        id: 17,
        catogory: "Women's Shoes",
        name:"Nike Air Force 1 Fontanka",
        color:2,
        price:"3,519,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21a89b8f-7a80-4a44-a876-9ec2666644a8/air-force-1-fontanka-shoes-sJrqz3.png"
    },
    
    
    {
        id: 18,
        catogory: "Women's Shoes",
        name:"Nike Air Max 97",
        color:1,
        price:"4,999,000₫",
        link:"../product/product.html",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d7462828-2c00-4cbf-9c5e-2521010c9ea5/air-max-97-shoes-d09rhX.png"
    }
    
];



function createProduct(list){
    return `
        <div class="products">
                    <div class="product-top">
                        <a href="${list.link}" class="product-thumb">
                             <img src="${list.photo}">
                        </a>
                        <button class="add" id="add">ADD +</button>
                    </div>
                    <div class="product-info">
                        <a href="${list.link}" class="product-cat">${list.catogory}</a>
                        <a href="${list.link}" class="product-name">${list.name}</a>
                        <a href="${list.link}" class="product-color">${list.color} colour</a>
                        <a href="${list.link}" class="product-price">${list.price}</a>
                    </div>
        </div>
    `;
}



// console.log(createProduct(litsProduct));

const wp= document.getElementById("wraper");
// console.log(wp);

function render(list){
    for(let i=0; i< list.length; i++){
        const j= createProduct(list[i]);
         wp.innerHTML += j;
    }

}
render(womenListProduct);


const btnAdd= document.getElementById("add");
btnAdd.addEventListener("click",function(){alert("The product has been added to your cart");});