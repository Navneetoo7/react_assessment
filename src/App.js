import React, { useState } from 'react';
import Calendar from "./components/Calendar"

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to the current date

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);}
  return (
    <div className="App">
         <h1>Reusable Calendar Component Example</h1>
      
      {/* Input Box for Date Selection */}
      <label htmlFor="dateInput">Select a date: </label>
      <input
        type="date"
        id="dateInput"
        value={selectedDate.toISOString().substr(0, 10)} // Convert date to ISO format for input value
        onChange={handleDateChange}
      />
    <Calendar data={selectedDate}/>
    </div>
  );
}

export default App;
