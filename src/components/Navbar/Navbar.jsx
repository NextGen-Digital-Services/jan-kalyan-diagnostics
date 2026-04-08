import "./Navbar.css"
import { useState } from "react"

function Navbar() {

const [menu, setMenu] = useState(false)

return (

<header className="navbar">

<div className="logo">
Jan Kalyan Diagnostics
</div>

<nav className={menu ? "nav-links active" : "nav-links"}>

<a href="#">Home</a>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>

<button className="book-btn">
Book Appointment
</button>

</nav>

<div className="menu" onClick={() => setMenu(!menu)}>
☰
</div>

</header>

)

}

export default Navbar