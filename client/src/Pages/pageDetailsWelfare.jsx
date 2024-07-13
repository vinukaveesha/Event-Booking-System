import React,{useState} from 'react';
import '../Components/Styles/pageDetailsWelfare.css';

const PageDetailsWelfare = () => {
  const [status, setStatus] = useState('pending'); // Initial status is pending

  const event = {
    formId: '150411a5-76d3-4e26-b266-a0e1086034d8',
    applicantName: 'Will Smith',
    applicantIndex: 'E98183',
    faculty: 'Engineering',
    department: 'Criminal Justice',
    phoneNumber: '4567890052',
    placeName: 'Lecture Hall 3',
    reasonForEvent: 'Legal Ethics Workshop',
    selectedDate: '8/5/2024',
    startTime: '03:00 PM',
    endTime: '06:00 PM',
    applicantEmail: 'johnsnow1@example.com'
  };

  const handleAccept = () => {
    setStatus('accepted');
  };

  const handleReject = () => {
    setStatus('rejected');
  };

  return (
    <div className="event-details-container">
      <h1>Request Details</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Form ID</h2>
          <p>{event.formId}</p>
        </div>
        <div className="card">
          <h2>Applicant's Name</h2>
          <p>{event.applicantName}</p>
        </div>
        <div className="card">
          <h2>Applicant's Index</h2>
          <p>{event.applicantIndex}</p>
        </div>
        <div className="card">
          <h2>Faculty</h2>
          <p>{event.faculty}</p>
        </div>
        <div className="card">
          <h2>Department</h2>
          <p>{event.department}</p>
        </div>
        <div className="card">
          <h2>Phone Number</h2>
          <p>{event.phoneNumber}</p>
        </div>
        <div className="card">
          <h2>Place Name</h2>
          <p>{event.placeName}</p>
        </div>
        <div className="card">
          <h2>Reason for Event</h2>
          <p>{event.reasonForEvent}</p>
        </div>
        <div className="card">
          <h2>Selected Date</h2>
          <p>{event.selectedDate}</p>
        </div>
        <div className="card">
          <h2>Start Time</h2>
          <p>{event.startTime}</p>
        </div>
        <div className="card">
          <h2>End Time</h2>
          <p>{event.endTime}</p>
        </div>
        <div className={`card status-card ${status}`}>
          <h2>Status</h2>
          <p>{status}</p>
        </div>
        {status === 'pending' && (
          <div className="action-buttons">
            <button className="accept-button" onClick={handleAccept}>Accept</button>
            <button className="reject-button" onClick={handleReject}>Reject</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default PageDetailsWelfare;
