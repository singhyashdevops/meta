import React from 'react'
import "./Footer.css"

export default function Footer(props) {

    let headStyle = { textAlign: "center", fontSize: "50px", fontWeight: "bolder"}

    let linkStyle = { color: props.mode === "light" ? "black" : "white", fontSize: "18px", textDecoration:"none"}

    let linkStyle2 = {    fontSize: "25px", color: props.mode === "light" ? "#ff0000" : "#0070ff",textDecoration:"none"
}

    return (
        <div>
            {/* style={{ backgroundColor: props.mode === "light" ? "white" : "black"}} */}
            <div className="bd-footer py-4 py-md-4 mt-1">
                <div className="container py-4 py-md-5 px-md-3">
                    <div className="row">
                        <div className="col-lg-3 mb-5 my-3">
                            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                                <span className='footerHead' style={headStyle}>{props.title}</span>
                            </a>
                            <p className="footer-description">Designed and built with web technolies including <span href="" className='footer-light'>Javascript</span> and <span className='footer-light'>React.</span> Poudly made by<span href="" className='footer-light'> Yash Singh.</span> Code Repository is available at <span href="" className='footer-light'>Github </span>(@singhyashdev).</p>
                            <div>
                                <a href="https://www.instagram.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" style={{ height: "30px" }}>
                                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#fd5"></stop>
                                            <stop offset=".328" stop-color="#ff543f"></stop>
                                            <stop offset=".348" stop-color="#fc5245"></stop>
                                            <stop offset=".504" stop-color="#e64771"></stop>
                                            <stop offset=".643" stop-color="#d53e91"></stop>
                                            <stop offset=".761" stop-color="#cc39a4"></stop>
                                            <stop offset=".841" stop-color="#c837ab"></stop>
                                        </radialGradient>
                                        <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                        <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#4168c9"></stop>
                                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                                        </radialGradient>
                                        <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                        <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                        <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" style={{ height: "30px" }}>
                                        <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop>
                                        </linearGradient>
                                        <path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32 c1.105,0,2,0.895,2,2V40z"></path>
                                        <path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path>
                                        <path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path>
                                        <path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" style={{ height: "30px" }}>
                                        <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" style={{ height: "30px" }}>
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" fill="#0256d1"></path><path d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z" fill="#ffffff"></path></g></g>
                                    </svg>
                                </a>
                                <a href="https://youtube.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" style={{ height: "30px" }}>
                                        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-5 col-lg-2 offset-lg-1 mb-5 links">
                            <p className="footer-light">Languages</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 footer-link-c1"><a href="https://www.java.com/">JAVA</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.python.org/">PYTHON</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.javascript.info/">JAVASCRIPT</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.react.dev/">REACT.JS</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.expressjs.com/">EXPRESS.JS</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.angularjs.org/">ANGULAR.JS</a></li>
                                <li className="mb-2 footer-link-c1"><a href="https://www.rubyonrails.org/">RUBY ON RAILS</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-1">
                            <p className="footer-light">REFERENCES</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 footer-link-c2"><a href="https://www.frontendpractice.com/">FRONTEND PRACTICE</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://developer.mozilla.org/">DEVELOPER MOZILLA</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.w3school.com/" >W3SCHOOLS</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.freecodecamp.com/" >FREE CODE CAMP</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.coursera.org/" >COURSERA</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.frontendmasters.com/" >FRONTEND MASTERS</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.sitecrafting.com/" >SITE CRAFTING</a></li>
                                <li className="mb-2 footer-link-c2"><a href="https://www.knowledgehut.com/">KNOWLEDGEHUT</a></li>
                            </ul>
                        </div>
                        <div className="col-5 col-lg-2 mb-1">
                            <p className="footer-light">Projects</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 footer-link-c3"><a href="https://www.youtube.com/watch?v=nGhKIC_7Mkk">AMAZON CLONE</a></li>
                                <li className="mb-2 footer-link-c3"><a href="https://www.youtube.com/watch?v=TXCj39dGLlY">CALCULATOR</a></li>
                                <li className="mb-2 footer-link-c3"><a href="https://www.youtube.com/watch?v=4ul3q-cEhvU">ANALOG CLOCK</a></li>
                                <li className="mb-2 footer-link-c3"><a href="https://www.youtube.com/watch?v=Tgat3-prVv4">NETFLIX CLONE</a></li>
                            </ul>
                        </div>
                        <div className="col-5 col-lg-2 mb-1">
                            <p className="footer-light">Community</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 footer-link-c4 "><a href="https://www.youtube.com/@ApnaCollegeOfficial">APNA COLLEGE</a></li>
                                <li className="mb-2 footer-link-c4 "><a href="https://www.youtube.com/@CodeWithHarry">CODING WITH HARRY</a></li>
                                <li className="mb-2 footer-link-c4 "><a href="https://www.youtube.com/@TechGun">TECH GUN</a></li>
                                <li className="mb-2 footer-link-c4 "><a href="https://www.youtube.com/@chaiaurcode">CHAI AUR CODE</a></li>
                                <li className="mb-2 footer-link-c4 "><a href="https://www.youtube.com/@thesheryianscodingschool">SHERIAN CODING SCHOOL</a></li>
                            </ul>
                        </div>
                        {/* <ul className="about" style={{ display: "flex", listStyle: "none", justifyContent: "space-between", flexWrap: "wrap", gap: "2px", fontSize: "25px"}}>
                            <li className=" first">
                                <a className=""  style={linkStyle} href="https://in.mashable.com/about/477/about"><span>About Mashable India</span></a>
                            </li>
                            <li>
                                <a className=""  style={linkStyle} target="_blank" href="mailto:partners@forkmedia.in"><span>Contact</span></a>
                            </li>
                            <li>
                                <a className="" style={linkStyle}  href="https://in.mashable.com/advertise/479/advertise"><span>Advertise</span></a>
                            </li>
                            <li>
                                <a className=""  style={linkStyle} href="https://in.mashable.com/user-agreement/478/user-agreement"><span>User Agreement</span></a>
                            </li>
                            <li>
                                <a className="" style={linkStyle}  href="https://in.mashable.com/privacy-policy/480/privacy-policy"><span>Privacy Policy</span></a>
                            </li>
                            <li>
                                <a className=""  style={linkStyle} href="https://in.mashable.com/cookie-policy/481/cookie-policy"><span>Cookie Policy</span></a>
                            </li>
                        </ul> */}
                    </div>
                </div >
            </div >
        </div >
    )
}
