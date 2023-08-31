import { Link } from "react-router-dom";

export default function Navbar(){
    return(
    <nav id="navbar" >
        <div id="logo">
        <img src="/images/little-lemon-logo.png"  alt="logo" />
        </div>
      <ul>
        <li className="item">
          <Link to="/">Home</Link>
         </li>
        <li className="item">
          <a href="#">About</a>
        </li>
        <li className="item">
          <a href="#">Menu</a>
        </li>
        <li className="item">
          <Link to="/booking">Reservations</Link>
        </li>
        <li className="item">
           <a href="#">Order Online</a>
        </li>
        <li className="item">
           <a href="#">Login</a>
        </li>
     </ul>
    </nav>
    )
}