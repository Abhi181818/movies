import React from "react";
import NavBar from "../NavBar/NavBar";

export default function TopRated() {
  return (
    <div className="bg-dark" style={{paddingTop:"100px"}}>
      <NavBar />
      <div className="container bg-dark">
        <div>
          <h1 style={{ color: "whitesmoke" }}>Top Rated </h1>
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
            <div className="carousel-item active ">
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
            <div className="carousel-item">
              <div className="card-group">
                <div className="card bg-dark">
                  <img
                    src="https://th.bing.com/th/id/R.ec2a8edd6cb558e3c0be79be400958ed?rik=%2b9T52Q%2fDoOOZsw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_BvFFUsPQpFU%2fTSPpX4mB0yI%2fAAAAAAAAArI%2fLoYuFZiA13c%2fs1600%2finception-poster.jpg&ehk=iTOuyW1xqcWf3zkIDd3K%2b0uIOcr66h6kgW0Ox7ie4zE%3d&risl=&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://inspirationfeed.com/wp-content/uploads/2011/05/dabang.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://th.bing.com/th/id/OIP.9kfQYmbZ88MwIsm5bS8RfQHaKr?rs=1&pid=ImgDetMain"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group">
                <div className="card bg-dark">
                  <img
                    src="https://th.bing.com/th/id/R.388722125d2f273ec37a709495486e07?rik=%2bIVajWJ%2fy0VLSg&riu=http%3a%2f%2fdrop.ndtv.com%2falbums%2fENTERTAINMENT%2fbollywood-posters-2011%2fdesi-boyz.jpg&ehk=qhzV%2bdEXCHaLOMRqvhkilx%2fc1K%2bQAmyQEy2I79Mr%2b%2f4%3d&risl=&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://th.bing.com/th/id/R.b2b9dfe43ba222e76fedebacf73ddc31?rik=hNI3%2brgn5vCcfg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Ye2cKFrs1sU%2fVaIDAitrToI%2fAAAAAAAAAc0%2fvvfwpI404_Y%2fs1600%2fchennai-express-bollywood-movie-posters-stills-4.jpg&ehk=Ghdh28i5J4e%2bAV39uRnz5%2bwylJyWwzyCem5C0f6lSDw%3d&risl=&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div className="card-body">
                                        
                                        
                                    </div> */}
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://th.bing.com/th/id/R.ac1e885b62d74603d98d79529547075f?rik=SG7zVQv%2fTjyGcw&riu=http%3a%2f%2fimages.desimartini.com%2fmedia%2fuploads%2flagaan_xlg.jpg&ehk=3FEupL2tlE5Ygb488tYxyuip8MKX6FhiCMH9ResMnvI%3d&risl=&pid=ImgRaw&r=0"
                    className="card-img-top"
                    alt="..."
                  />
                  {/* <div className="card-body"> */}

                  {/* </div> */}
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
