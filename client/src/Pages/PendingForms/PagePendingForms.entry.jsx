import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../Components/Styles/PagePendingFormsEntry.css";
import TrackImage from "../../Components/Assets/tr2.jpg";

// If you need the useNavigation import, uncomment and move it to the top
// import { useNavigation } from "react-router-dom";

const PendingFormsEntry = () => {
    // const navigate = useNavigation();
    // const [formID, setFormID] = useState("");
    // const handleSubmit = () => {
    //     ///e.preventDefault();
    //     navigate("/pending-forms");
    // }

  return (
    <div className="pagepending-container">
      <div className="content">
        <div className="image-container">
          <img src={TrackImage} alt="Description of image" className="image" />
        </div>
        <div className="form-container">
          <h1>Form Tracker</h1>
          <form>
            <div className="form-group">
              <label htmlFor="formID">Form ID</label>
              <input type="text" id="formID" placeholder="Enter Form ID" className="form-control" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PendingFormsEntry;
