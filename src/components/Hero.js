//sub components for homepage
export default function Hero(){
    return(
        <section id="hero-section">

         <div className="hero-description">
         <h1>Little lemon</h1>
         <h3>Chicago</h3>
         <p>We are a family owned Mediterranean restaurant ,located on Maldove street in Chicago,Illionis.We focus on traditional recipes served with a modern twist</p>
         <button className="reserve button-primary" aria-label="reservation button"><a href="/booking">Reserve a table</a></button>
         </div>

        <div className="hero-logo">
            <img src="/images/restauranfood.jpg" alt="food" />
            </div>

         </section>
    )
}