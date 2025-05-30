import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6">
          <img src="media\largestBroker.svg" style={{ width: "90%" }} />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Trademate Clients contribute to over 15% of all volumes
            in India daily by trading and investing in :
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stock & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
