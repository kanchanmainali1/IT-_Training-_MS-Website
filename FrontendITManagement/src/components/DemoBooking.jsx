import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DemoBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  
  const unavailableDates = ['2025-05-04', '2025-05-05'];
  const timeSlots = ['10:00 AM', '02:00 PM', '04:00 PM'];

  useEffect(() => {
    if (selectedDate) {
      setAvailableTimes(timeSlots);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const isDateDisabled = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const isPastDate = date < today;
    
    const dateString = date.toISOString().split('T')[0];
    const isUnavailable = unavailableDates.includes(dateString);
    
    return isPastDate || isUnavailable;
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString();
      alert(`Demo booked on ${formattedDate} at ${selectedTime}`);
    } else {
      alert('Please select both a date and time.');
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Schedule a Demo Session</h2>
      
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Select Date:</label>
        <div className="bg-white p-2 rounded-lg shadow">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileDisabled={isDateDisabled}
            minDetail="month"
            className="border-0"
          />
        </div>
      </div>

      {selectedDate && (
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Available Time Slots:</label>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-blue-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleBooking}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Book Demo
      </button>
    </div>
  );
};

export default DemoBooking;