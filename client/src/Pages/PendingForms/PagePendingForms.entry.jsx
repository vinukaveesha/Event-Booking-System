import React from "react";
import "../../Components/Styles/PagePendingFormsEntry.css";
import TrackImage from "../../Components/Assets/tr2.jpg";

const PendingFormsEntry = () => {
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
