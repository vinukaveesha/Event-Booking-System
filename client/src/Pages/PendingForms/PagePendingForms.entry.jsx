import React, {useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Axios from "axios";

import "../../Components/Styles/PagePendingFormsEntry.css";
import TrackImage from "../../Components/Assets/tr2.jpg";

const PendingFormsEntry = () => {
    const navigate = useNavigate();
    const { FormID } = useParams();
    const [formID, setFormID] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await Axios.get(`http://localhost:3000/v1/event/form/${formID}`);
          const eventData = response.data.event;
          if (!eventData) {
              console.log("Event not found");
              return;
          }
          navigate(`/pending-forms/${formID}`);
      } catch (error) {
          if (error.response) {
              // Server responded with a non-2xx status
              console.error("Server Error:", error.response.data);
          } else if (error.request) {
              // No response received
              console.error("No response received:", error.request);
          } else {
              // Something else went wrong
              console.error("Error:", error.message);
          }
      }
  };

  return (
    <div className="pagepending-container">
      <div className="content">
        <div className="image-container">
          <img src={TrackImage} alt="Description of image" className="image" />
        </div>
        <div className="form-container">
          <h1>Form Tracker</h1>
          <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formID}
                    onChange={(e) => setFormID(e.target.value)}
                    placeholder="Enter Form ID"
                />
                <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PendingFormsEntry;
