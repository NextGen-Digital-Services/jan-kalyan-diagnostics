import "./Appointment.css"
import { motion } from "framer-motion"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

function Appointment(){

return(

<section className="appointment" id="appointment">

<motion.div 
className="appointment-container"

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}

>

<h2>Book Appointment</h2>

<form className="appointment-form">

<input type="text" placeholder="Your Name" required />

<input type="tel" placeholder="Phone Number" required />

<select>
<option>Select Service</option>
<option>ECG</option>
<option>OPG</option>
<option>Blood Sample</option>
<option>Ultrasound</option>
<option>X-Ray</option>
</select>

<textarea placeholder="Message"></textarea>

<button type="submit" className="book-btn">
Book Appointment
</button>

</form>

<div className="appointment-buttons">

<a 
href="tel:7835931951"
className="call-btn"
>
<FaPhoneAlt /> Call Now
</a>

<a 
href="https://wa.me/917835931951"
className="whatsapp-btn"
>
<FaWhatsapp /> WhatsApp
</a>

</div>

</motion.div>

</section>

)

}

export default Appointment