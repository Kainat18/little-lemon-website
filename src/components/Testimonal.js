//sub components for homepage
import React from 'react';
const testimonialsData =[
  {
    id: 1,
    name: "Matt",
    image: "/images/five-star.jpg",
    reviewersImg: "/images/Matt.jpeg",
    review: "I had a wonderful experience at Little Lemon. The food was delicious and the service was excellent.",
},
{
    id: 2,
    name: "Bob",
    image: "/images/five-star.jpg",
    reviewersImg: "/images/Bobjpeg.jpeg",
    review: "Little Lemon exceeded my expectations! The flavors were amazing.",
},
{
  id: 3,
  name: "Anna",
  image: "/images/five-star.jpg",
  reviewersImg: "/images/Anna.jpeg",
  review: "Greek Salad was excellent",
},
{
  id: 4,
  name: "Georgia",
  image: "/images/five-star.jpg",
  reviewersImg: "/images/georgia.jpeg",
  review: "The ambiance was really good , delicious food ,100% recommended",
},
]

function Testimonal() {
  return (
    <section id="testimonials-section">
      <h1>Testimonals</h1>

      <div className="testimonials-list">
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="testimonial">
                    <img src={testimonial.image} className="rating-img" alt="rating"/>
                    <img src={testimonial.reviewersImg} className="reviewers-img" alt="reviews"/>
                    <h2 className="customer-name"> {testimonial.name}</h2>
                    <p>{testimonial.review}</p>
                   </div>
                ))}
            </div>
    </section>
  )
}

export default Testimonal
