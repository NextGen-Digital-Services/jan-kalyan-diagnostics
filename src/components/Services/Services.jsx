import "./Services.css"
import { motion } from "framer-motion"

import ecg from "../../assets/images/ecgimg.jpg"
import blood from "../../assets/images/bloodimg.jpg"
import ultrasound from "../../assets/images/ultrasoimg.jpg"
import xray from "../../assets/images/xrayimg.jpg"

function Services(){

return(

<section className="services" id="services">

<h2>Our Services</h2>

<div className="services-container">

<motion.div 
className="service-card"
whileHover={{scale:1.05}}
>

<img src={ecg} alt="ECG"/>

<h3>ECG</h3>

<p>
Accurate ECG test with fast reporting and expert analysis.
</p>

</motion.div>


<motion.div 
className="service-card"
whileHover={{scale:1.05}}
>

<img src={blood} alt="Blood"/>

<h3>Blood Sample</h3>

<p>
Reliable blood testing with fast and accurate reports.
</p>

</motion.div>


<motion.div 
className="service-card"
whileHover={{scale:1.05}}
>

<img src={ultrasound} alt="Ultrasound"/>

<h3>Ultrasound</h3>

<p>
Advanced ultrasound imaging with modern equipment.
</p>

</motion.div>


<motion.div 
className="service-card"
whileHover={{scale:1.05}}
>

<img src={xray} alt="Xray"/>

<h3>X-Ray</h3>

<p>
Digital X-ray service with quick and precise results.
</p>

</motion.div>


</div>

</section>

)

}

export default Services