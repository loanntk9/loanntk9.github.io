
let womenListProduct=[
    {
        id: 1,
        link:"../product/women1.html",
        catogory: "Women's clothes",
        name:"Nike Sportswear Tech Pack",
        color:1,
        price:"1,789,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eb2acd2c-4e62-4c64-97d0-c982027542de/sportswear-tech-pack-dri-fit-adv-bodysuit-4ml3Qd.png"
    },
   
    {
        id: 2,
        link:"../product/women2.html",
        catogory: "Women's Shoes",
        name:"Nike Kiger 9",
        color:1,
        price:"4,109,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80d60071-f0c4-4da5-a551-a8e757275372/kiger-9-trail-running-shoes-dvCd2S.png"
    },
    
    {
        id: 3,
        link:"../product/women3.html",
        catogory: "Women's Shoes",
        name:"Nike In-Season TR 13",
        color:1,
        price:"2,189,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/917a90d3-e0ea-4494-94d4-7c7f3d0f3fac/in-season-tr-13-training-shoes-Z3Khdg.png"
    },
    
    {
        id: 4,
        link:"../product/women4.html",
        catogory: "Women's clothes",
        name:"Nike Forward Shorts",
        color:1,
        price:"2,299,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/821764b5-dcd3-447c-b619-4404d75f3a44/forward-shorts-high-waisted-shorts-2x878F.png"
    },
    
    {
        id: 5,
        link:"../product/women5.html",
        catogory: "Women's Shoes",
        name:"Nike Pegasus 40",
        color:1,
        price:"3,829,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44313b89-d6db-475d-8498-98c3a024d516/pegasus-40-road-running-shoes-4TS8dd.png"
    },
   
    {
        id: 6,
        link:"../product/women6.html",
        catogory: "Women's clothes",
        name:"Nike Dri-FIT One",
        color:1,
        price:"1,019,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a170a0b-8944-4de6-a147-972961055d76/dri-fit-one-high-waisted-18cm-biker-shorts-50GcSG.png"
    },
  
    {
        id: 7,
        link:"../product/women7.html",
        catogory: "Women's Shoes",
        name:"Nike Quest 5 Premium",
        color:1,
        price:"2,349,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fe4d399-52a6-422f-b789-61ca263679cb/quest-5-road-running-shoes-j470CS.png"
    },
   
    {
        id: 8,
        link:"../product/women8.html",
        catogory: "Women's Shoes",
        name:"Nike Air Max 97",
        color:1,
        price:"4,999,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7437e33d-fcc8-46a6-82d4-16ed34370b6f/air-max-97-shoes-B2TV3Z.png"
    },
  
    {
        id: 9,
        link:"../product/women9.html",
        catogory: "Women's clothes",
        name:"Nike Dri-FIT One Luxe",
        color:1,
        price:"1,119,000₫",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a9c4530-2c66-49f4-b19c-022ed548319c/dri-fit-one-luxe-standard-fit-short-sleeve-top-KM5GHX.png"
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
                        <a href="${item.link}" class="product-price">${item.price}</a>
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
render(womenListProduct);

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

