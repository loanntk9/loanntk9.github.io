function header() {
    return ` <div class="index-header-info-df">
    <div class="index-header-info-logo">
        <a href="./index.html"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png" alt=""></a>
    </div>
    <div class="index-header-info">
        <a href="https://www.nike.com/vn/retail">
            <div class="index-header-info-if">Find a Store</div>
        </a>
        <span>|</span>
        <a href="https://www.nike.com/vn/help">
            <div class="index-header-info-if">Help</div>
        </a>
        <span>|</span>
        <a href="/index/joinus/joinus.htm">
            <div class="index-header-info-if">Join Us</div>
        </a>
        <span>|</span>
        <a href="#">
            <div class="index-header-info-if">Sign In</div>
        </a>
    </div>
  </div>
  <div class="index-banner-df">
    <div class="index-banner-logo">
        <a href="/index.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt=""></a>
    </div>
    <div class="index-banner-select">
        <ul>
            <li><a href="../Men/men-list-product.html">Men</a></li>
            <li><a href="../Women/women-list-product.html">Women</a></li>
            <li><a href="../Kids/kids-list-product.html">Kids</a></li>
        </ul>
    </div>
    <div class="index-banner-df-blockicons">
        <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
            </span>
            <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..." type="text" name="search" />
        </label>
    </div>
    <div class="index-banner-df-icons">
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <a href="../cart.html"><i class="fa-regular fa-credit-card"></i></a>
    </div>
  </div>
  
  </div>`;
  }
  let header1 = document.getElementById("header-index");
  header1.innerHTML = header();


//   function redirectToMen(){
//     window.location.href = "../Men/men-list-product.html";
//   }
//   function redirectToWomen(){
//     window.location.href = "../Women/women-list-product.html";
//   }
//   function redirectToKids(){
//     window.location.href = "../Kids/kids-list-product.html";
//   }