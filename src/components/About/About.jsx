import "./About.css"
import { motion } from "framer-motion"

function About(){

return(

<section className="about" id="about">

<div className="about-container">

<motion.div 
className="about-content"

initial={{opacity:0, x:-50}}
whileInView={{opacity:1, x:0}}
transition={{duration:1}}

>

<h2>About Jan Kalyan Diagnostics Center</h2>

<p>
Jan Kalyan Diagnostics Center is a trusted and reliable diagnostic center 
located in Gurunanak Dev Colony, Bhalaswa, Delhi. We are committed to 
providing accurate diagnostic services with modern equipment and experienced staff.
</p>

<p>
Our center offers a wide range of diagnostic services including ECG, OPG, 
Blood Sample Collection, Ultrasound, and Digital X-Ray. We focus on delivering 
fast and accurate reports to help patients and doctors make better decisions 
for treatment.
</p>

<p>
At Jan Kalyan Diagnostics Center, we believe in providing quality healthcare 
services at affordable prices. Our trained professionals ensure that every 
patient receives proper care and attention.
</p>

<p>
We also provide quick reporting, clean environment, and modern machines to 
ensure the best experience for our patients. Customer satisfaction and 
accuracy are our top priorities.
</p>

<div className="about-info">

<div>
<h4>📍 Address</h4>
<p>Shop No. 14, Mata Sham Kaur Road, Main Gurudwara,  
Gurunank Dev Colony, Bhalaswa, Delhi-110042</p>
</div>

<div>
<h4>📞 Phone</h4>
<p>+91 7835931951 , 9810531897</p>
</div>

<div>
<h4>✉ Email</h4>
<p>info@jankalyandiagnostics.com</p>
</div>

<div>
<h4>⏰ Timing</h4>
<p>Mon - Sat: 8:30 AM - 8:30 PM</p>
</div>

</div>

</motion.div>

</div>

</section>

)

}

export default About