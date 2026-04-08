import "./Contact.css"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"

function Contact(){

return(

<section className="contact" id="contact">

<h2>Contact Us</h2>

<div className="contact-container">

<motion.div 
className="contact-info"

initial={{opacity:0, x:-50}}
whileInView={{opacity:1, x:0}}
transition={{duration:1}}

>

<div className="contact-card">

<FaMapMarkerAlt className="icon"/>

<div>
<h3>Address</h3>
<p>
Shop No. 14, Mata Sham Kaur Road,  
Main Gurudwara, Gurunank Dev Colony,  
Bhalaswa, Delhi-110042
</p>
</div>

</div>

<div className="contact-card">

<FaPhoneAlt className="icon"/>

<div>
<h3>Phone</h3>
<p>+91 7835931951</p>
<p>+91 9810531897</p>
</div>

</div>

<div className="contact-card">

<FaEnvelope className="icon"/>

<div>
<h3>Email</h3>
<p>info@jankalyandiagnostics.com</p>
</div>

</div>

<div className="contact-card">

<FaClock className="icon"/>

<div>
<h3>Working Hours</h3>
<p>Mon - Sat : 8:30 AM - 8:30 PM</p>
</div>

</div>

</motion.div>


<motion.div 
className="contact-map"

initial={{opacity:0, x:50}}
whileInView={{opacity:1, x:0}}
transition={{duration:1}}

>

<iframe
src="https://www.google.com/maps?q=Bhalaswa%20Delhi&output=embed"
width="100%"
height="400"
style={{border:0}}
allowFullScreen=""
loading="lazy"
></iframe>

</motion.div>

</div>

</section>

)

}

export default Contact