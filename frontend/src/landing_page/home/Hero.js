import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#1e3a8a", padding: "4rem 0", marginTop: "0", marginBottom:"4rem"}}>
      <div className="container text-center">
        <img
          src="media/homeHero.png"
          alt="HeroImage"
          className="mb-4"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <h1 className="mb-3" style={{ color: "white" }}>
          Invest in everything
        </h1>
        <p style={{ color: "white" }}>
          Online platform to invest in stocks, derivatives, mutual funds
        </p>
        <button
          className="p-3 btn btn-primary fn-8"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
