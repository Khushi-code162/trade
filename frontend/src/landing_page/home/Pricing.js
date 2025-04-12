import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 ">
      <div className="row mb-5">
        <div className="col-4 mt-5 mb-5">
          <h1 className="mt-5 fs-1">Unbetable pricing</h1>
          <p className="fs-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2 mt-4 mb-5"></div>
        <div className="col-6 mt-4 mb-5">
          <div className="row text-center mt-4 mb-5">
            <div className="col  p-4 border mt-4">
              <h1 className="mt-4">0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col  p-4 border mt-4">
              <h1 className="mt-4">20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
