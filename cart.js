
const cartItem= JSON.parse(localStorage.getItem('cartItem'));

function createCartItem(item){
    return`
    <div  class="item-frame" >
        <img class="cart-img" src="${item.img}"/>
        <div class="cart-txt">
            <p class="cart-name-pro">${item.name}</p>
            <p class="cart-price-pro">${item.price}đ</p>
        </div>
        <button class="cart-del-pro">x</button>
    </div>
    `;
}
const ci= document.getElementById("items-frame-id")
function render(list){
    for(let i=0; i< list.length; i++){
        const j= createCartItem(list[i]);
         ci.innerHTML += j;
    }
}
render(cartItem);

function createTotal(){
    return `
    <div class="cart-txt-total1">
        <span>Total:</span>
        <span class="cart-txt-total2">${total(cartItem)}.000đ</span>
    </div>
    `;
}
function total(list){
    let total=0.0
    for(let i=0; i<list.length;i++){
        total += parseFloat(list[i].price);
    }
    return total;
}
const tt=document.getElementById("cart-txt-total1-id");
tt.innerHTML=createTotal();
function delAllItem(){
    localStorage.removeItem('cartItem');

}
function delItemInCart(event){
    const nameDel=event.target.valueDel;
    console.log(nameDel);
    let listDelItem= localStorage.getItem('cartItem');
    let listDelItem1= listDelItem.filter(function(itemDel) {
        return  itemDel.name!== nameDel;
    });
    localStorage.setItem("cartItem",JSON.stringify(listDelItem1));

 }
