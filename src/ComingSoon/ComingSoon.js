import React from "react";

export default function ComingSoonCarasol() {
  return (
    <div>
      <div className="container bg-dark">
        <div>
          <h1 style={{ color: "whitesmoke" }}>Coming Soon</h1>
          <br />
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item ">
              <div className="card-group">
                <div className="card bg-dark" style={{width:"18rem"}}>
                  <img
                    src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark" style={{width:"18rem"}} >
                  <img
                    src="https://assets.mubicdn.net/images/notebook/post_images/31814/images-w1400.jpg?1606176049"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://www.theglobeandmail.com/ece-images/145/arts/film/article22262670.ece/BINARY/w940/image.jpg "
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card-group">
                <div className="card bg-dark">
                  <img
                    src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://assets.mubicdn.net/images/notebook/post_images/31814/images-w1400.jpg?1606176049"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://www.theglobeandmail.com/ece-images/145/arts/film/article22262670.ece/BINARY/w940/image.jpg "
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="card-group">
                <div className="card bg-dark">
                  <img
                    src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://assets.mubicdn.net/images/notebook/post_images/31814/images-w1400.jpg?1606176049"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://www.theglobeandmail.com/ece-images/145/arts/film/article22262670.ece/BINARY/w940/image.jpg "
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  );
}
