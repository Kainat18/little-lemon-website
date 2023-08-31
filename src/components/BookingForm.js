 //contains a form that would be displayed upon clicking the reservation link
import React , {useState} from 'react';

function BookingForm({availableTimes , dispatch , submitForm}) {
  const [formData , setFormData] = useState({
    name:'',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleDateChange = async(event) =>{
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
   dispatch({ type: 'UPDATE_TIMES', payload: value })
  }
  


  const handleChange= (event)=>{
  const {name , value} = event.target;
  setFormData({
    ...formData,
    [name] :value,
  });
  };

  const isFormValid = ()=>{
    return(
      formData.name &&
      formData.date &&
      formData.time &&
      formData.guests &&
      formData.occasion 
    )
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    submitForm(formData)
  }

  const currentDate = new Date().toISOString().split("T")[0]
  return (
    <>
    <div className="booking-form">
      <form onSubmit={handleSubmit} className="Form">
      <h2>Reservation Form</h2>
        <div className="form-item">
          <label htmlFor="name"> Name:</label>
          <input id="name" type="name" name="name" value={formData.name} onChange={handleChange}  required minlength="3"/>
        </div>
        <div className="form-item">
          <label htmlFor="res-date"> Date:</label>
          <input id="res-date" type="date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate} />
        </div>
        <div className="form-item">
          <label htmlFor="res-time">Time:</label>
          <select id="res-time"  type="time" name="time" value={formData.time} onChange={handleChange}>
          {availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option> ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="guests">Number of Guests:</label>
          <input id="guests" type="number" name="guests" value={formData.guests} onChange={handleChange} required min="1"/>
        </div>
        <div className="form-item">
          <label htmlFor="occasion">Occasion:</label>
          <select id="occasion" value={formData.occasion} name="occasion" onChange={handleChange} required>
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <div className="form-item">
          <button type="submit" disabled={!isFormValid()} aria-label="submit button">Submit Reservation</button>
        </div>
      </form>
    </div>
</>

  )
}

export default BookingForm;


/* update update times function , cuz the time isnt updating on the bases of selected date*/



