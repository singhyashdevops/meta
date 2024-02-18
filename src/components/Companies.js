import React, { useState } from 'react'

export default function Companies(props) {

    let style = { textAlign: "center", fontSize: "20px", letterSpacing: "2px" }

    let carousel = { letterSpacing: "2px" }

    let title = { textAlign: "center", letterSpacing: "2px", color: "white", fontSize: "40px" }

    let headStyle = { textAlign: "center", fontSize: "35px", letterSpacing: "2px", color: props.mode === "light" ? "black" : "#0070ff" }

    let paraStyle = { textAlign: "justify", fontSize: "25px", letterSpacing: "2px", textAlignLast: "center", color: props.mode === "light" ? "#ff0000" : "white" }


    return (

        <div>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" style={carousel}>

                    <div className="carousel-inner">

                        <div className="carousel-item active" id='picture1' style={{ backgroundImage: props.mode === "dark" ? "url(career-dark.jpeg)" : "url(career-light.jpeg)", height: "400px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>

                            <div className="carousel-caption d-md-block">

                                <h5 className='headerCaption container' style={title}>CAREER OPTIONS</h5>

                                <p className='caption container' >Get to know about these top-notch companies</p>

                            </div>

                        </div>

                    </div>

                </div >


            </div >

            <div className='container my-5' data-bs-theme={`${props.mode}`} style={{ fontSize: "20px" }}>
                <p style={headStyle} className='my-5'>STAT-UPS THAT CREATED THE BUZZ !!</p>
                <p style={paraStyle} className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt asperiores dicta quibusdam culpa doloribus labore quae beatae est harum maiores aliquid dolor quia magni iure quidem, aliquam dolorum nostrum hic consectetur. Nihil commodi, ab similique unde molestias porro debitis tempore, soluta magni quos esse ullam tenetur velit! Minima, quod?</p>
                <div className="inline-flex justify-content-center row row-cols-1 row-cols-md-4">
                    <div className="col">
                        <div className="card">
                            <img src="netflix-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Netflix</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="amazon-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Amazon</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="apple-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Apple</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="google-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="tesla-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Tesla</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="meta-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="youtube-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="facebook-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="nintendo-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="microsoft-logo.jpeg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="android-logo.jpeg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title my-2" style={paraStyle}>Google</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="accordion container my-5" data-bs-theme={`${props.mode}`} id="accordionFlushExample">
                    <p style={headStyle} className='my-5'>Select your Plan</p>
                    <p style={paraStyle} className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempora, dicta totam voluptas numquam commodi harum eum repudiandae laudantium iure aspernatur sit rerum iusto! Voluptates natus necessitatibus nemo dolorem quo corrupti vitae quidem a ipsum deleniti totam nesciunt voluptatem deserunt ipsam, alias suscipit mollitia quod repudiandae eius quam fuga sit.</p>
                    <div className="accordion-item my-5" >
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </span>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item my-5">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </span>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item my-5">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </span>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    <div className="accordion-item my-5">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Accordion Item #4
                            </span>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>

                <div className='container my-5'>
                    <p className='my-5' style={headStyle}>MAJOR COMPANIES IN THE IT SECTOR</p>
                    <p style={paraStyle} className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt asperiores dicta quibusdam culpa doloribus labore quae beatae est harum maiores aliquid dolor quia magni iure quidem, aliquam dolorum nostrum hic consectetur. Nihil commodi, ab similique unde molestias porro debitis tempore, soluta magni quos esse ullam tenetur velit! Minima, quod?</p>

                    <div>
                        <div className="row row-cols-2 row-cols-md-6">
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg" alt="paytm.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg" alt="whitehat.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg" alt="ola.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg" alt="bharatpe.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg" alt="swiggy.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg" alt="salesken.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg" alt="salesken.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg" alt="vyapar.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg" alt="capgemini.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg" alt="simplilearn.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg" alt="pagarbook.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg" alt="bharatagri.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg" alt="smallcase.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg" alt="sharechat.svg" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg" alt="leapfinance.svg" style={{ borderRadius: "5px" }} />
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        </div>
    )
}
