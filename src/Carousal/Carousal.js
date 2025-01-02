import React from 'react'

export default function Cararasol() {
    return (
        <div className='bg-dark pt-3 container-fluid'>
            <div style={{ paddingTop: 50, paddingBottom: 50}}>
                <h1 style={{ color: 'whitesmoke' }}></h1>
                <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://th.bing.com/th/id/R.b9545dd2adcdb004000ef683b79479eb?rik=W0TZUak5h4p5rw&riu=http%3a%2f%2fwww.impawards.com%2f2021%2fposters%2fspiderman_no_way_home_ver5_xxlg.jpg&ehk=UwnL1OA3BuTWnrvoMWYJGNadjrgHIexx%2bwit6rpyP30%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." height={550} />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://filmcombatsyndicate.com/wp-content/uploads/2023/05/jawan-shah-rukh-khan-makes-a-fie.jpg" className="d-block w-100" alt="..." height={550} />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-india-movie-poster-design-bollywood-padmaavat.jpg" className="d-block w-100" alt="..."  height={550} />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>


        </div>
    )
}
