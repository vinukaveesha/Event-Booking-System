import React, { useState } from 'react';
import { Button, Input, Page } from '@mobiscroll/react-lite';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import '../Components/Styles/PageEventForm.css';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [name, setName] = useState('');
  const [index, setIndex] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [reasonOfEvent, setReasonOfEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('8:00');
  const [endTime, setEndTime] = useState('11:00');

    const navigate = useNavigate();

    const navigateToAfterSubmitPage = () => {
      if (!name || !index || !faculty || !department || !email || !mobileNumber || !placeName || !reasonOfEvent) {
        alert('Please fill out all required fields.');
        return;
        }

      navigate("/after-submit", { state: { email } });
    }

  return (
    <Page className="page_container">
      <div className="form_container">
        <div className="form_header">
          <h3>Event Form</h3>
          <hr />
          <h5>Please complete insure information.</h5>
        </div>
        <div className="form_section">
          <div className="section_header">
            <p>Applicant Information</p>
          </div>
          <div className="mbsc-grid mbsc-grid-fixed">
            <div className="mbsc-row">
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input 
                  type="text" 
                  label="Name" 
                  placeholder="Name" 
                  inputStyle="box" 
                  labelStyle="floating" 
                  theme="ios" 
                  themeVariant="light"
                  value = {name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input
                  type="text"
                  label="Index"
                  placeholder="Index"
                  inputStyle="box"
                  labelStyle="floating"
                  theme="ios"
                  themeVariant="light"
                  value = {index}
                  onChange={(e)=>setIndex(e.target.value)}
                />
              </div>
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input
                  type="text"
                  label="Faculty"
                  placeholder="Faculty"
                  inputStyle="box"
                  labelStyle="floating"
                  theme="ios"
                  themeVariant="light"
                  value={faculty}
                  onChange={(e)=>setFaculty(e.target.value)}
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input
                  type="text"
                  label="Department"
                  placeholder="Department"
                  inputStyle="box"
                  labelStyle="floating"
                  theme="ios"
                  themeVariant="light"
                  value = {department}
                  onChange={(e)=>setDepartment(e.target.value)}
                />
              </div>
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input
                  type="text"
                  label="Email address"
                  placeholder="Email address"
                  inputStyle="box"
                  labelStyle="floating"
                  theme="ios"
                  themeVariant="light"
                  value = {email}
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mbsc-col-md-4 mbsc-col-12">
                <Input
                  type="text"
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  inputStyle="box"
                  labelStyle="floating"
                  theme="ios"
                  themeVariant="light"
                  value={mobileNumber}
                  onChange={(e)=>setMobileNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form_section">
          <div className="section_header">
            <p>Venue Information</p>
          </div>
          <div className="mbsc-grid mbsc-grid-fixed">
            <div className="mbsc-row">
              <div className="mbsc-col-12">
                <Input 
                  type="text" 
                  label="Place Name" 
                  placeholder="Place Name" 
                  inputStyle="box" 
                  labelStyle="floating" 
                  theme="ios" 
                  themeVariant="light"
                  value={placeName}
                  onChange={(e)=>setPlaceName(e.target.value)}
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12">
                <Input 
                  type="text" 
                  label="Reason of Event" 
                  placeholder="Reason of Event" 
                  inputStyle="box" 
                  labelStyle="floating" 
                  theme="ios" 
                  themeVariant="light"
                  textarea={true}
                  value={reasonOfEvent}
                  onChange={(e)=>setReasonOfEvent(e.target.value)}
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-md-6 mbsc-col-12">
                <div className="datepicker-container">
                  <label>Date</label>
                  <hr />
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="datepicker-input"
                  />
                </div>
              </div>
              <div className="mbsc-col-md-3 mbsc-col-12">
                <div className="timepicker-container">
                  <label>Start Time</label>
                  <hr />
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    className="timepicker-input"
                  />
                </div>
              </div>
              <div className="mbsc-col-md-3 mbsc-col-12">
                <div className="timepicker-container">
                  <label>End Time</label>
                  <hr />
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    className="timepicker-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submit_button_container">
        <Button theme="ios" themeVariant="light" style={{ backgroundColor: '#156B91', color: '#000',borderRadius: '15px' }} onClick={navigateToAfterSubmitPage}>Submit</Button>
        </div>
      </div>
    </Page>
  );
}

export default EventForm;