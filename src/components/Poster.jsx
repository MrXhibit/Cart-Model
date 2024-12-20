import React from "react";

function Poster() {
  return (
    <>
      <div class="container-fluid posterDiv p-0">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators mb-0">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img
                src="/Images/poster20.jpg"
                class="d-block w-100"
                alt="Poster-Img"
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src="/Images/poster19.jpg"
                class="d-block w-100"
                alt="Poster-Img"
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src="/Images/poster21.jpg"
                class="d-block w-100"
                alt="Poster-Img"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Poster;
