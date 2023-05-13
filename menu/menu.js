function menu(){
    return`
    <div class="menu">
            <div class="croll-bar">
                <ul class="main-menu">
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothes</a></li>
                    <li><p></p></li>
                    <li class="mm-txt">Colour
                        <ul class="sub-menu">
                            <li><div><a href="#">Beige</a></div></li>
                            <li><div><a href="#">Black</a></div></li>
                            <li><div><a href="#">White</a></div></li>
                            <li><div><a href="#">Blue</a></div></li>
                            <li><div><a href="#">Brown</a></div></li>
                            <li><div><a href="#">Green</a></div></li>
                            <li><div><a href="#">Grey</a></div></li>
                            <li><div><a href="#">Multi Color</a></div></li>
                            <li><div><a href="#">Orange</a></div></li>
                            <li><div><a href="#">Pink</a></div></li>
                            <li><div><a href="#">Purple</a></div></li>
                            <li><div><a href="#">Red</a></div></li>
                            <li><div><a href="#">White</a></div></li>
                            <li><div><a href="#">Yellow</a></div></li>
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