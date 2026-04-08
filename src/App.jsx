import Home from "./pages/Home"
import Loading from "./components/Loading/Loading"
import { useState , useEffect } from "react"

function App(){

const [loading,setLoading] = useState(true)

useEffect(()=>{

setTimeout(()=>{
setLoading(false)
},2000)

},[])

return(

<>
{loading ? <Loading/> : <Home/>}
</>

)

}

export default App