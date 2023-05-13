
let womenListProduct=[
    {
        id: 1,
        link:"../product/women1.html",
        catogory: "Clothes",
        name:"Nike Sportswear Tech Pack",
        color:"Blue",
        price:"1.789.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eb2acd2c-4e62-4c64-97d0-c982027542de/sportswear-tech-pack-dri-fit-adv-bodysuit-4ml3Qd.png"
    },
   
    {
        id: 2,
        link:"../product/women2.html",
        catogory: "Shoes",
        name:"Nike Kiger 9",
        color:"Orange",
        price:"4.109.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80d60071-f0c4-4da5-a551-a8e757275372/kiger-9-trail-running-shoes-dvCd2S.png"
    },
    
    {
        id: 3,
        link:"../product/women3.html",
        catogory: "Shoes",
        name:"Nike In-Season TR 13",
        color:"Pink",
        price:"2.189.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/917a90d3-e0ea-4494-94d4-7c7f3d0f3fac/in-season-tr-13-training-shoes-Z3Khdg.png"
    },
    
    {
        id: 4,
        link:"../product/women4.html",
        catogory: "Clothes",
        name:"Nike Forward Shorts",
        color:"Grey",
        price:"2.299.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/821764b5-dcd3-447c-b619-4404d75f3a44/forward-shorts-high-waisted-shorts-2x878F.png"
    },
    
    {
        id: 5,
        link:"../product/women5.html",
        catogory: "Shoes",
        name:"Nike Pegasus 40",
        color:"Pink",
        price:"3.829.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44313b89-d6db-475d-8498-98c3a024d516/pegasus-40-road-running-shoes-4TS8dd.png"
    },
   
    {
        id: 6,
        link:"../product/women6.html",
        catogory: "Clothes",
        name:"Nike Dri-FIT One",
        color:"Blue",
        price:"1.019.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3a170a0b-8944-4de6-a147-972961055d76/dri-fit-one-high-waisted-18cm-biker-shorts-50GcSG.png"
    },
  
    {
        id: 7,
        link:"../product/women7.html",
        catogory: "Shoes",
        name:"Nike Quest 5 Premium",
        color:"Grey",
        price:"2.349.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fe4d399-52a6-422f-b789-61ca263679cb/quest-5-road-running-shoes-j470CS.png"
    },
   
    {
        id: 8,
        link:"../product/women8.html",
        catogory: "Shoes",
        name:"Nike Air Max 97",
        color:"White",
        price:"4.999.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7437e33d-fcc8-46a6-82d4-16ed34370b6f/air-max-97-shoes-B2TV3Z.png"
    },
  
    {
        id: 9,
        link:"../product/women9.html",
        catogory: "Clothes",
        name:"Nike Dri-FIT One Luxe",
        color:"Black",
        price:"1.119.000",
        photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a9c4530-2c66-49f4-b19c-022ed548319c/dri-fit-one-luxe-standard-fit-short-sleeve-top-KM5GHX.png"
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
                            <a href="${item.link}" class="product -cat">Women's ${item.catogory}</a>
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
render(womenListProduct);
function allItem(){
    wp.innerHTML='';
    render(womenListProduct);

}
// thêm data lên local khi click vào btn add
function handleAddButtonClick(){
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
    const proFilter = womenListProduct.filter(function(pro) {
        return pro.catogory == filerValue;
      });
    console.log(proFilter);
    wp.innerHTML='';
    render(proFilter);
}
function filterColor(event){
    const filerValue=event.target.innerHTML;
    console.log(filerValue);
    const proFilter = womenListProduct.filter(function(pro) {
        return pro.color == filerValue;
      });
    console.log(proFilter);
    wp.innerHTML='';
    render(proFilter);
}