//the BookingPage component is responsible for managing the booking process, including fetching available times based on selected dates, handling form submissions, and navigating to a confirmation page when a booking is successful. The state management is achieved through local state (useState) and state transitions using the useReducer hook.

import React,{useState , useReducer} from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI , submitAPI } from "../Api";
import { useNavigate } from "react-router-dom";

function BookingPage() {
const [date, setDate] = useState(new Date());

const initializeTimes = (date) =>{
  return (fetchAPI(date))
}

 const updateTimes = (date) =>{
  const dateObj = new Date(date)
  return fetchAPI(dateObj)
}

function timesReducer(state, action) {
  let newState
  switch (action.type) {
    case 'UPDATE_TIMES':
    const newDate = new Date(action.payload);
    newState = updateTimes(newDate)
    break;

    default:
      throw new Error()
  }
  return newState
}

const navigate = useNavigate();

function submitForm(formData) {
 const isSubmitted =  submitAPI(formData);
 if(isSubmitted){
  navigate("/confirmed");
 }
}

const [availableTimes , dispatch] = useReducer(timesReducer, initializeTimes(date))
  return (
    <div>
      <BookingForm  availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  )
}

export default BookingPage
