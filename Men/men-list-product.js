
let womenListProduct=[
    {
        id: 10,
        link:"D:/KieuLoan/project-internship/product/men10.html",
        catogory: "Men's Shoes",
        name:"Nike Air Max 97",
        color:1,
        price:"4,699,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-shoes-EBZrb8.png"
    },

    {
        id: 11,
        link:"D:/KieuLoan/project-internship/product/men11.html",
        catogory: "Men's Clothes",
        name:"Nike ACG",
        color:1,
        price:"919,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37757891-99cb-4d50-825b-8777ea272dbf/acg-short-sleeve-t-shirt-9sHcl3.png"
    },
    
    {
        id: 12,
        link:"D:/KieuLoan/project-internship/product/men12.html",
        catogory: "Men's Shoes",
        name:"Nike Air Force 1 '07 LV8",
        color:1,
        price:"3,519,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
    },
    
    {
        id: 13,
        link:"D:/KieuLoan/project-internship/product/men13.html",
        catogory: "Men's Shoes",
        name:"Nike Dunk Low",
        color:1,
        price:"3,519,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-shoes-sggKLb.png"
    },
   
    {
        id: 14,
        link:"D:/KieuLoan/project-internship/product/men14.html",
        catogory: "Men's Clothes",
        name:"Jordan Dri-FIT Sport",
        color:1,
        price:"969,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6668db7-df64-48aa-be50-e3fa1ea08533/jordan-dri-fit-sport-graphic-t-shirt-Pb126C.png"
    },

    {
        id: 15,
        link:"D:/KieuLoan/project-internship/product/men15.html",
        catogory: "Men's Clothes",
        name:"Nike Sportswear",
        color:3,
        price:"919,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c3435cf-f874-4999-bea5-ae8e9c9bf72e/sportswear-t-shirt-MRt3f0.png"
    },

    {
        id: 16,
        link:"D:/KieuLoan/project-internship/product/men16.html",
        catogory: "Men's Shoes",
        name:"Nike Air Max AP",
        color:1,
        price:"2,929,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df754862-b2a4-4949-ba03-63a5567c6c3d/air-max-ap-shoes-3Rdq04.png"
    },
    
    {
        id: 17,
        link:"D:/KieuLoan/project-internship/product/men17.html",
        catogory: "Men's Clothes",
        name:"Nike Sportswear Air",
        color:1,
        price:"1,574,299₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07d4b840-b060-44e5-aade-825865a1b670/sportswear-air-french-terry-crew-CSbFSR.png"
    },
    
    {
        id: 18,
        link:"D:/KieuLoan/project-internship/product/men18.html",
        catogory: "Men's Shoes",
        name:"Nike Vaporfly 3",
        color:1,
        price:"6,609,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc3980b-c562-4463-9da4-6b7efd2dee59/vaporfly-3-road-racing-shoes-xsDgvM.png"
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