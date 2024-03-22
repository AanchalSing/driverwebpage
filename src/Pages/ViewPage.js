import React from "react";
import Table from "./Table";
import Tablef from "./Tablef";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
const ViewPage = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-light p-4 mt-3">
                <div className="row"></div>
                <h4 className="title" style={{ color: "blue" }}>
                  Driver Details
                </h4>

                <div className="row">
                  <div className="input-field col-sm-4 col-12">
                    <label>D/L Number</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter D/L Number"
                      min="0"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Date Of Birth</label>
                    <input
                      type="date"
                      className="regPgDate"
                      placeholder="Enter Date Of Birth"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Driver Name</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Driver Name"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Father Name</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Father Name"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      id="txtmobilenumber"
                      placeholder="Your Mobile Number.."
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>House Mobile Number</label>
                    <input
                      type="number"
                      id="txthousemobilenumber"
                      placeholder="Your House Mobile Number.."
                      className="custom-input"
                      min="0"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Licence Issue Date</label>
                    <input
                      type="date"
                      className="regPgDate"
                      placeholder="Enter Licence Issue Date"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>D/L Validity</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter D/L Validity"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Issued By RTO</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Issued By RTO"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>License Type</label>
                    <input
                      type="text"
                      placeholder="Enter License Type"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Village</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Village"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Tahseel</label>
                    <input
                      type="text"
                      placeholder="Enter Tahseel"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Post Office</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Post Office "
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Police Station</label>
                    <input
                      type="text"
                      placeholder="Enter Police Station"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>District</label>
                    <input
                      type="text"
                      placeholder="Enter District"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Neighbour Name</label>
                    <input
                      type="text"
                      placeholder="Enter Neighbour Name"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Neighbour Mobile Number</label>
                    <input
                      type="number"
                      id="txtneighbourmobilenumber"
                      className="custom-input"
                      placeholder="Your Neighbour Mobile Number.."
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Near Railway Station</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Near Railway Station"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Near Bus Stand</label>
                    <input
                      type="text"
                      placeholder="Enter Near Bus Stand"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Earlier Employer Name</label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Earlier Employer Name"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label> Earlier Employer Number</label>
                    <input
                      type="number"
                      id="txtcontactnumber"
                      className="custom-input"
                      placeholder="Earlier Employee Mobile Number.."
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Guarantor Name</label>
                    <input
                      type="text"
                      placeholder="Enter Guarantor Name"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Guarantor Contact Number</label>
                    <input
                      type="number"
                      id="txtguarantorcontactnumber"
                      className="custom-input"
                      placeholder="Your Mobile Number.."
                    />
                  </div>
                  <br />
                  <h5 style={{ color: "blue", marginTop: "15px" }}>
                    Verified Aadhar Card
                  </h5>
                  <div className="input-field col-sm-4">
                    <label>Aadhar Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter Aadhar Card Number"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Name On Aadhar</label>
                    <input
                      type="text"
                      placeholder="Enter Name On Aadhar Card"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Address On Aadhar</label>
                    <input
                      type="text"
                      placeholder="Enter Address On Aadhar card"
                      className="custom-input"
                    />
                  </div>
                </div>
                <br />
                <h5 className="title" style={{ color: "blue" }}>
                  RTGS Details
                </h5>
                <div className="row">
                  <div className="input-field col-sm-4">
                    <label>Account Number</label>
                    <input
                      type="number"
                      placeholder="Enter Account Number"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Account Holder Name</label>
                    <input
                      type="text"
                      placeholder="Enter Account Holder Name"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>IFSC Code</label>
                    <input
                      type="text"
                      placeholder="Enter IFSC Code"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                      className="custom-input"
                    />
                  </div>
                  <div className="input-field col-sm-4">
                    <label>Bank Branch</label>
                    <input
                      type="text"
                      placeholder="Enter Bank Branch"
                      className="custom-input"
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="card bg-light mt-2 p-3">
            <h5 className="title" style={{ color: "blue" }}>
              Uploaded File
            </h5>
            <div className="row">
              <div className="input-field col-sm-4">
                <label>DL Uploaded</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="text" placeholder="Uploaded DL" />
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ marginLeft: "-25px", cursor: "pointer" }}
                    onClick={() => {
                      // Add functionality to view DL
                      alert("View DL");
                    }}
                  />
                </div>
              </div>
              <div className="input-field col-sm-4">
                <label>Driver Current Photo With Aadharcard</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="text" placeholder="Photo with Aadharcard" />
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ marginLeft: "-25px", cursor: "pointer" }}
                    onClick={() => {
                      // Add functionality to view photo with Aadharcard
                      alert("View photo with Aadharcard");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-light mt-2 p-3">
            <h5 style={{ color: "blue" }}>Driver Trip Details</h5>
            <Table />
            <h5 style={{ color: "blue" }}>Driver Pendency Details</h5>
            <Tablef />
            {/* <div className="row">
              <div className="col-md-6 text-md-end">
                <button className="btn-submit btn btn-danger">Reject</button>
              </div>
              <div className="col-md-6 text-md-start mt-2 mt-md-0">
                <button className="btn-submit btn btn-primary">Approve</button>
              </div>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
                padding: "15px",
              }}
            >
              <button className="accept" style={{ margin: "0 5px" }}>
                <span className="icon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Approve
              </button>
              <button className="deny" style={{ margin: "0 5px" }}>
                <span className="icon">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                Reject
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewPage;
