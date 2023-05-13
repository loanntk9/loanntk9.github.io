const cartItem= JSON.parse(localStorage.getItem('cartItem'));

function load() {
    //function const =
    console.log("Load");
    render(cartItem);
}

function createCartItem(item){
    return`
    <div  class="item-frame" >
        <img class="cart-img" src="${item.img}"/>
        <div class="cart-txt">
            <p class="cart-name-pro">${item.name}</p>
            <p class="cart-price-pro">${item.price}đ</p>
        </div>
        <button class="cart-del-pro" value="${item.id}" onClick="delItemCart(${item.id})">x</button>
    </div>
    `;
}
const ci= document.getElementById("items-frame-id")

function render(list){
    // for(let i=0; i< list.length; i++){
    //     const j= createCartItem(list[i]);
    //      ci.innerHTML += j;
    // }

    // console.log("list:", list.entries());
    for (let key in list) {
        const j = createCartItem(list[key]);
         ci.innerHTML += j;
    }
}


function createTotal(){
    return `
    <div class="cart-txt-total1">
        <span>Total:</span>
        <span class="cart-txt-total2">${total(cartItem)}.000đ</span>
    </div>
    `;
}
function createTotal1(){
    return `
    <div class="cart-txt-total1">
        <span>Total:</span>
        <span class="cart-txt-total2">0đ</span>
    </div>
    `;
}

function total(list){
    let total=0.0
    // for(let i=0; i<list.length;i++){
    //     total += parseFloat(list[i].price);
    // }

    for(let key in list){
        total += parseFloat(list[key].price);
    }
    return total.toFixed(3);
}

const tt=document.getElementById("cart-txt-total1-id");
tt.innerHTML=createTotal();
function delAllItem(){
    localStorage.removeItem('cartItem');
    ci.innerHTML = '';
    render(mapCartItem);
    // tt.innerHTML='';
    // tt.innerHTML=createTotal(mapCartItem);
}

function delItemCart(idDel){
    console.log("idDel: ", idDel);
    let mapCartItem= JSON.parse(localStorage.getItem('cartItem'));
    delete mapCartItem[idDel];
    localStorage.setItem("cartItem", JSON.stringify(mapCartItem));
    ci.innerHTML = '';
    render(mapCartItem);
}