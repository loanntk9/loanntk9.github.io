
function load() {
    //function const =
    console.log("Load");
    const cartItem= JSON.parse(localStorage.getItem('cartItem'));
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
        <button class="cart-del-pro" onClick="delItemCart(${item.id})">x</button>
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
    const tt=document.getElementById("cart-txt-total1-id");
    if(list != null) {
        ci.innerHTML = '';
        for (let key in list) {
            const j = createCartItem(list[key]);
             ci.innerHTML += j;
        }
        tt.innerHTML = createTotal(list);
    } else {
        ci.innerHTML = '';
        tt.innerHTML = '';
        tt.innerHTML = createTotal(null);
    }
    
}


function createTotal(cartItem){
    let totalPrice = 0;
    if(cartItem != null) {
        totalPrice = total(cartItem);
    }
    return `
    <div class="cart-txt-total1">
        <span>Total:</span>
        <span class="cart-txt-total2">${totalPrice}đ</span>
    </div>
    `;
}


function total(list){
    let total= 0.0;
    // for(let i=0; i<list.length;i++){
    //     total += parseFloat(list[i].price);
    // }

    for(let key in list){
        let str=(list[key].price);
        
        total += parseInt(str.replace(/\./g, ""));
    }

    return total.toLocaleString('vi-VN');
}


function delAllItem(){
    localStorage.removeItem('cartItem');
    ci.innerHTML = '';

    render(null);
}

function delItemCart(idDel){
    console.log("idDel: ", idDel);
    let mapCartItem= JSON.parse(localStorage.getItem('cartItem'));
    delete mapCartItem[idDel];
    localStorage.setItem("cartItem", JSON.stringify(mapCartItem));
    ci.innerHTML = '';
    render(mapCartItem);
}