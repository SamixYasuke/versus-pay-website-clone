import React from "react";

function Footer(){
    return(
        <div className="footer">
            <h1>Download Our App On The App Store Or Play Store</h1>
            <div className="footer-img">
                <a href="https://play.google.com/store/apps/details?id=com.softdroom.versuspay&hl=en&gl=US"><img src="/Images/google-play.svg" alt="google-play-img" /></a>
                <a href="https://apps.apple.com/ng/app/versuspay/id1602067247"><img src="/Images/apple-app.svg" alt="apple-store" /></a>
            </div>
            <div className="footer-links">
                <ul>
                    <li>Products</li>
                    <li>Scan to Pay</li>
                    <li>Virtual Card</li>
                    <li>Budget</li>
                    <li>Bill Payment</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>FAQs</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Legal</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Security</li>
                </ul>
                <ul>
                    <li>Platforms</li>
                    <li>Andriod</li>
                    <li>iOS</li>
                    <li>Web</li>
                </ul>
                <p> Address
                    Versuspay Inc.
                    447 Broadway, 2nd Floor Suite #1343, New York, New York 10013, United States</p>
            </div>
            <img className="" src="/Images/dark-logo.svg" alt="versus-pay-logo" />
        </div>
    )
}

export default Footer;