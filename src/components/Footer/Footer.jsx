import "./Footer.css"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

{/* About */}

<div className="footer-col">

<h3>Jan Kalyan Diagnostics</h3>

<p>
Trusted Diagnostic Center providing ECG, OPG, Blood Sample,
Ultrasound and X-Ray services with accurate and fast reports.
</p>

</div>


{/* Quick Links */}

<div className="footer-col">

<h3>Quick Links</h3>

<ul>
<li><a href="#">Home</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

</div>


{/* Services */}

<div className="footer-col">

<h3>Services</h3>

<ul>
<li>ECG</li>
<li>OPG</li>
<li>Blood Sample</li>
<li>Ultrasound</li>
<li>X-Ray</li>
</ul>

</div>


{/* Contact */}

<div className="footer-col">

<h3>Contact</h3>

<p><FaMapMarkerAlt/> Bhalaswa, Delhi</p>
<p><FaPhoneAlt/> +91 7835931951</p>
<p><FaEnvelope/> info@jankalyandiagnostics.com</p>

<div className="social">

<a href="https://wa.me/917835931951">
<FaWhatsapp/>
</a>

</div>

</div>

</div>

{/* Bottom */}

<div className="footer-bottom">

<p>
© 2025 Jan Kalyan Diagnostics Center. All Rights Reserved.
</p>

</div>

</footer>

)

}

export default Footer