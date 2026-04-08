import "./Hero.css"
import { motion } from "framer-motion"
import heroImg from "../../assets/images/heroimg.jpg"

function Hero(){

return(

<section 
className="hero"
style={{backgroundImage:`url(${heroImg})`}}
>

<motion.div 
className="hero-card"

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

>

<h1>Your Health, Our Priority</h1>

<p>
Providing accurate, Reliable and timely Diagnostic services 
to help you and your doctor make informed health decisions.
</p>

<div className="hero-buttons">

<button className="primary-btn">
Book Appointment
</button>

<button className="secondary-btn">
Call Now
</button>

</div>

</motion.div>

</section>

)

}

export default Hero