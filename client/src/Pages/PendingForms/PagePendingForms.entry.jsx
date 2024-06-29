import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../Components/Styles/PagePendingFormsEntry.css";
import TrackImage from "../../Components/Assets/tr2.jpg";

const PendingFormsEntry = () => {
    const navigate = useNavigate();

    const [formID, setFormID] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        navigate("/pending-forms");
    }

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
            <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PendingFormsEntry;
