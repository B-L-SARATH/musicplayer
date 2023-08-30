import React from "react";
import "./spotify.css";
function Hero() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="d-flex flex-column align-items-center  g-5 ">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.bGE2gLiQbhDsNgItxxDRmAHaHa&pid=Api&P=0"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="150"
            height="100"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 d-flex justify-content-center align-items-center flex-column">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            spotify
          </h1>
          <p class="lead">
            listen the songs .enjoy the moment .enjoy the vibe
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              class="btn getstarted btn-primary btn-lg px-4 me-md-2"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
