//simple layout text that would be displayed upon submitting the form for reserving a table
import React from 'react'

function ConfirmedBooking() {
  return (
    <section className= "confirmation-message">
      <h3>Booking Confirmed</h3>
      <p>Thank you for your reservation. We look forward to welcoming you!</p>
      <button className="btn button-primary">
      <a href="/">Homepage</a>
        </button>
    </section>
  )
}

export default ConfirmedBooking

