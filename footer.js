function footer() {
    return `    <div class="footer-all">
    <div class="footer-row1">
        <div class="footer-row1-info1">
            <div class="footer-row1-info1-title">
                <div><a href="https://www.nike.com/vn/retail"> FIND A STORE</a></div>
                <div><a href="#"> BECOME A MEMBER</a></div>
                <div><a href="#"> SIGN UP FOR EMAIL</a></div>
                <div><a href="#"> SEND US FEEDBACK</a></div>
            </div>
            <div>
                <div class="footer-row1-info1-title"><a href="https://www.nike.com/vn/help"> GET HELP</a></div>
                <div class="footer-all-content">
                    <div><a href="#"> Order Status</a></div>
                    <div><a href="https://www.nike.com/vn/help/a/shipping-delivery-gs"> Delivery</a></div>
                    <div><a href="https://www.nike.com/vn/help/a/returns-policy-gs"> Returns</a></div>
                    <div><a href="https://www.nike.com/vn/help/a/payment-options-gs"> Payment Options</a></div>
                    <div><a href="https://www.nike.com/vn/help/#contact"> Contact</a></div>
                </div>
            </div>
            <div>
                <div class="footer-row1-info1-title"><a href="https://about.nike.com/en">ABOUT NIKE</a> </div>
                <div class="footer-all-content">
                    <a href="https://about.nike.com/en/newsroom"> News</a>
                    <div><a href="https://jobs.nike.com/"> Careers</a></div>
                    <div><a href="https://investors.nike.com/Home/default.aspx"> Investors</a></div>
                    <div><a href="https://www.nike.com/vn/sustainability"> Sustainability</a></div>
                </div>
            </div>
        </div>
        <div class="footer-row1-info2">
            <div class="footer-row1-info2-icons">
                <a href="https://www.facebook.com/nike" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/Nike" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/user/nike" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/nike/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-row2">
        <div class="footer-row2-info1-1">
            <div> <a href="#">
                    <i class="fa-solid fa-location-dot"></i>
                    VietNam</a>
            </div>
            <div class="footer-row2-info1-2">
                © 2022 Nike, Inc. All Rights Reserved
            </div>
        </div>
        <div class="footer-row2-info2">
            <ul>
                <a href="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/">
                    <li>Terms of Sale</li>
                </a>
                <a href="https://agreementservice.svs.nike.com/vn/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=VN&language=en&requestType=redirect">
                    <li>Terms of Use</li>
                </a>
                <a href="https://agreementservice.svs.nike.com/vn/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=VN&language=en&requestType=redirect">
                    <li>Nike Privacy Policy</li>
                </a>
            </ul>
        </div>
    </div>
</div>`
;
}
let footer1 = document.getElementById("footer-index");
footer1.innerHTML = footer();