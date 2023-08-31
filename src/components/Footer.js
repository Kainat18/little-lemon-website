export default function Footer(){
    return(
        <div className="footer-content">
        <div className="footer-logo">
         <img src="/images/little-lemon-logo(2).png" alt="logo-2" />
        </div>
        <div className="footer-links">
          <ul>
          <h2 className="headings">Navigation</h2>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
         </ul>
        </div>
        <div className="footer-contact ">
        <ul>
          <h2 className="headings">Contact</h2>
            <li><a href="#">Email</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Phone</a></li>
            </ul>
        </div>
        <div className="footer-social">
        <ul>
          <h2 className="headings">Social Media</h2>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebbok </a></li>
            </ul>
        </div>
        </div>
         
    )
}