import "./ScrollTop.css"
import { useState , useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

function ScrollTop(){

const [show,setShow] = useState(false)

useEffect(()=>{

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){
setShow(true)
}
else{
setShow(false)
}

})

},[])

return(

show && (

<button 
className="scroll-top"
onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
>

<FaArrowUp/>

</button>

)

)

}

export default ScrollTop