import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import BookingPage from './Pages/BookingPage';
import { Routes , Route } from 'react-router-dom';
import ConfirmedBooking from './Pages/ConfirmedBooking';

//RE WRITE OPEN GRAPH PROTOCOL TAGS PROPERLY, commit code to github , add unit tests for initialize , update times component
function App() {
  return (
       <> 
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}> </Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
       </Routes>
       <Footer />
        </>
  );
}

export default App;

/*<Route path="/booking" element={<BookingForm />}> </Route> */
