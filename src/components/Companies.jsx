import React from 'react'
import "./Companies.css"

export default function Companies(props) {

    let title = { textAlign: "center", color: "white", fontSize: "5em" }
    let headStyle = { fontSize: "1.2em", textAlign: "center", color: props.mode === "light" ? "black" : "#0070ff", padding: "0.5em 0em", fontFamily: 'oswald', backgroundColor: props.mode==="light"?"#15a900ba":"#295ab76b",borderRadius: "0.4em" }
    let paraStyle = { textAlign: "center", fontSize: "0.8em", color: props.mode === "light" ? "black" : "white", padding: "2em 2em", fontFamily: 'oswald', backgroundColor: props.mode==="light"?"#cbff657d":"#659fff7d", borderRadius: "0.4em"}
    let imageMap = { borderRadius: "10em" }
    let cardStyle = { textAlign: "center", fontSize: "1.2em", color: props.mode === "light" ? "black" : "white", padding: "0.5em 0em", fontFamily: 'oswald' }

    return (

        <div>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" >
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

            <div className='container my-5' data-bs-theme={`${props.mode}`} style={{ fontSize: "1.05em" }}>
                <p style={headStyle}>STAT-UPS THAT CREATED THE BUZZ !!</p>
                <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt asperiores dicta quibusdam culpa doloribus labore quae beatae est harum maiores aliquid dolor quia magni iure quidem, aliquam dolorum nostrum hic consectetur. Nihil commodi, ab similique unde molestias porro debitis tempore, soluta magni quos esse ullam tenetur velit! Minima, quod?</p>
                <div className="inline-flex justify-content-center row row-cols-1 row-cols-md-4">
                    <div className="col">
                        <div className="card">
                            <img src="netflix-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Netflix</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="amazon-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Amazon</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="google-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Google</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="tesla-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Tesla</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="meta-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Meta</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="youtube-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Youtube</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="facebook-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Facebook</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="nintendo-logo.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Nintendo</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="microsoft-logo.jpeg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Microsoft</p>
                    </div>
                    <div className="col" >
                        <div className="card">
                            <img src="android-logo.jpeg" className="card-img-top" alt="..." />
                        </div>
                        <p className="card-title" style={cardStyle}>Android</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="accordion container" data-bs-theme={`${props.mode}`} id="accordionFlushExample" >
                    <p style={headStyle}>FREQUENTLY ASKED QUESTIONS</p>
                    <p style={paraStyle}>HTML, CSS, and JavaScript
                        These three languages are essential to anyone who wants to work in front-end development.
                        <br />
                        <br />
                        HTML (hypertext markup language): The basic building block needed to develop websites; a language that allows you to make notes in digital documents that are different from regular text.
                        <br />
                        <br />
                        CSS (cascading style sheets): The language used to create the layout, color, and overall style of the pages you create with HTML.

                        JavaScript: The programming language that determines what the page will do.</p>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is FrontEnd Development ??
                            </span>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">A Front-End Developer is someone who creates websites and web applications.

                                The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works.

                                You can think of Front-End as client-side and Back-End as server-side.

                                The basic languages for Front-End Development are HTML, CSS, and JavaScript.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                What does a FrontEnd Developer Do ??
                            </span>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Front-end developers create user interfaces (UI). UI is the graphical layout of an application that determines what each part of a site or application does and how it will look. "I've always found crafting polished user interactions that surprise and delight users to be the most rewarding and engaging task," says Mari Batilando, a software engineer at Meta. "In order to do this, you need to both have an eye for detail and a rock-solid understanding of the platform."</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Where do front-end developers work ??
                            </span>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">The demand and flexibility of this position translate into many career opportunities across various industries and locations. Whether that means working with a non-profit organization, starting your own freelance business, or being an in-house developer for a company, you’ll likely have the chance to find a role that fits your interests.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <span className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                How to become a front-end developer ??
                            </span>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">A career as a front-end web developer can flex your creativity and problem-solving skills. As a field that is constantly evolving to incorporate new technology, front-end development can reward those who like to learn new things and face challenges. The next few sections outline some of the most prominent skills for front-end developers.</div>
                        </div>
                    </div>
                </div>

                <div className='container my-3'>
                    <p style={headStyle}>MAJOR COMPANIES IN THE IT SECTOR</p>
                    <p style={paraStyle}>In addition to understanding the technology that drives a website, having specific non-technical (or soft) skills can make you a better candidate for becoming a front-end developer. Here are a few you’ll want to keep in mind:

                        <br /><br />1. Creativity

                        <br /><br />2. Problem-solving skills

                        <br /><br />3. Written and verbal communication skills

                        <br /><br />4. Teamwork

                    </p>

                    <div>
                        <div className="row row-cols-4 row-cols-md-6">
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg" alt="paytm.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg" alt="whitehat.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg" alt="ola.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg" alt="bharatpe.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg" alt="swiggy.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg" alt="salesken.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg" alt="salesken.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg" alt="vyapar.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg" alt="capgemini.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg" alt="simplilearn.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg" alt="pagarbook.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg" alt="bharatagri.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg" alt="smallcase.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg" alt="sharechat.svg" style={imageMap} />
                            </div>
                            <div className="col my-5">
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg" alt="leapfinance.svg" style={imageMap} />
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        </div>
    )
}
