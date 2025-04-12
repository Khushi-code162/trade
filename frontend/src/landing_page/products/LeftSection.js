import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container-fluid px-0 mt-5">
      <div className="row no-gutters">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="media/kite.png"
            alt="product"
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          />
        </div>
        <div className="col-md-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="mt-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
