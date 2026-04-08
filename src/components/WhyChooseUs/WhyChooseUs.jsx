import "./WhyChooseUs.css"
import { motion } from "framer-motion"
import { FaUserMd, FaClock, FaCheckCircle, FaHospital, FaMicroscope, FaHeartbeat } from "react-icons/fa"

function WhyChooseUs(){

return(

<section className="why" id="why">

<h2>Why Choose Jan Kalyan Diagnostics</h2>

<div className="why-container">

<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaUserMd className="icon"/>

<h3>Experienced Staff</h3>

<p>
Our trained and experienced medical professionals ensure 
accurate testing and proper patient care.
</p>

</motion.div>


<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaClock className="icon"/>

<h3>Fast Reports</h3>

<p>
We provide quick and reliable reports to help doctors 
start treatment without delay.
</p>

</motion.div>


<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaCheckCircle className="icon"/>

<h3>Accurate Results</h3>

<p>
Advanced machines and modern technology ensure precise 
and dependable diagnostic results.
</p>

</motion.div>


<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaHospital className="icon"/>

<h3>Modern Equipment</h3>

<p>
We use the latest diagnostic equipment for better 
accuracy and improved patient experience.
</p>

</motion.div>


<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaMicroscope className="icon"/>

<h3>Complete Diagnostics</h3>

<p>
All major diagnostic services under one roof including 
ECG, OPG, Ultrasound, X-Ray and Blood Tests.
</p>

</motion.div>


<motion.div 
className="why-card"
whileHover={{scale:1.05}}
>

<FaHeartbeat className="icon"/>

<h3>Patient Care</h3>

<p>
We focus on patient comfort, hygiene and quality service 
to ensure best experience.
</p>

</motion.div>

</div>

</section>

)

}

export default WhyChooseUs