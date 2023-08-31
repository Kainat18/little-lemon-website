//sub components for homepage
import React from 'react';

const specials = [
  {
    image: "/images/greek salad.jpg",
    title:"Greek Salad",
    price: "$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    button: "Add to Cart"


  },

  {
    image: "/images/bruchetta.jpg",
    title:"Bruchetta",
    price: "$5.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner. ",
    button: "Add to Cart"
  },
  {
    image: "/images/lemon dessert.jpg",
    title:"Lemon Dessert",
    price: "$5.00",
    description:"This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    button: "Add to Cart"
  }
];
function Menu() {
  return (
    <section id="menu-section">
      <div className="menu-description">
      <h1>This week specials</h1>
      <button className="button-primary">Online Menu</button>
      </div>
   <div className="menu-list"> 
     {specials.map((menu,index) =>( 
      <div key={index} className="special"> 
      <img src={menu.image} alt="menu-images"/>
      <div className="special-body">
      <h2>{menu.title}</h2>
      <h5>{menu.price}</h5>
      <p>{menu.description}</p>
      <button className="button-primary">{menu.button}</button>
    </div>
    </div>
  ))}
   </div>
    </section>
  )
}

export default Menu
