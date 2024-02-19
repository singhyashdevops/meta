/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'

export default function CardMenu(props) {


    let $imageStyle = { textAlign: "justify", textAlignLast: "center", color: "white", fontSize: "20px" }

    let newStyle = { display: "flex", flexDirection: "column", flexWrap: "nowrap", alignContent: "flex-end", justifyContent: "space-around", alignItems: "center", overflow: "auto" }

    let imageStyle = { backgroundColor: props.mode === "light" ? "#cbffad" : "#004555", height: "auto" }

    let btnStyle = { fontSize: "0.8em", width: "6em", height: "4em", margin: "2em 0.6em", backgroundColor: props.mode === "light" ? "#3f51b5" : "#ffbe30", color: props.mode === "light" ? "white" : "black" }
    let image = { backgroundImage: props.mode === "dark" ? "url(cardmenu-dark.jpg)" : "url(cardmenu-light.jpg)", height: "20em", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }
    let buttons = { fontSize: "1em", backgroundColor: props.mode === "light" ? "black" : "white", color: props.mode === "light" ? "white" : "black", border: "none", width: "50em", overFlow: "hidden" }
    let style = { textAlign: "center", fontSize: "1em" }
    let title = { textAlign: "center", color: "white", fontSize: "5em" }
    let imagePara = { color: "white", fontSize: "1em", fontFamily: 'oswald' }
    let semiStyle = { textAlign: "justify", fontSize: "1.5em", color: props.mode === "light" ? "black" : "white", padding: "0.50em 0em", fontFamily: 'oswald' }
    let factTile = { backgroundColor: props.mode === "light" ? "#00277e" : "#0070ff", overflow: "auto", padding: "2em 2em" }
    let factHead = { fontSize: "1.50em", color: props.mode === "light" ? "white" : "black", padding: "0.50em 0em" }
    let factPara = { fontSize: "1em", color: props.mode === "light" ? "#85c1ff" : "white", fontFamily: 'oswald', padding: "0.50em 0em" }
    let headStyle = { fontSize: "1.2em", textAlign: "center", color: props.mode === "light" ? "black" : "#0070ff", padding: "0.5em 0em", fontFamily: 'oswald' , backgroundColor:"#295ab76b", border:"1px solid white", borderRadius:"0.4em"}
    let paraStyle = { textAlign: "justify", fontSize: "0.8em", color: props.mode === "light" ? "black" : "white", padding: "0.5em 0em", fontFamily: 'oswald' }




    return (
        <>
            <div>

                <div id="carouselExampleCaptions" className="carousel slide">

                    <div className="carousel-inner">

                        <div className="carousel-item active" id='picture1' style={image}>

                            <div className="carousel-caption d-md-block">

                                <h5 className='headerCaption' style={title}>TUTORIAL</h5>

                                <p className='caption' style={imagePara}>"Learn about Front End Development from A to Z."</p>

                            </div>

                        </div>

                    </div>

                </div >

            </div >

            <div className="container my-5 ">
                <p style={headStyle}>LEARN MORE ABOUT FRONT END DEVELOPMENT</p>
                <p style={semiStyle}>Welcome to our front-end web developer learning pathway!</p>
                <p style={paraStyle}>Here we provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.</p>
                <p style={semiStyle}>Subjects covered</p>
                <p style={paraStyle}>The subjects covered are:
                    <br />
                    <br />
                    Basic setup and learning how to learn
                    <br />
                    <br />
                    <li>Web standards and best practices (such as accessibility and cross-browser compatibility)</li>
                    <br />
                    <li>HTML, the language that gives web content structure and meaning</li>
                    <br />
                    <li>CSS, the language used to style web pages</li>
                    <br />
                    <li>JavaScript, the scripting language used to create dynamic functionality on the web</li>
                    <br />
                    <li>Tooling that is used to facilitate modern client-side web development.</li>
                    <br />
                    You can work through sections in order, but each one is also self-contained. For example, if you already know HTML, you can skip ahead to the CSS section.</p>
                <div className="row row-cols-2 row-cols-md-5 g-2">
                    <div className="col">
                        <a href="https://www.w3schools.com/js/?ref=catdadcode.ghost.io/" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>JAVASCRIPT</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/html/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>HTML</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/css/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>CSS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" height={"50em"} /> 
                                    <p className="card-title" style={paraStyle}>BOOTSRAP</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/react/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>REACT.JS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/angular/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>ANGULAR.JS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/nodejs/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>NODE.JS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>AWS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>APPLE</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>SQL</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>C++</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>DART</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" height={"50em"} />
                                    <p className="card-title" style={paraStyle}>ELECTRON</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pyscript/pyscript-original-wordmark.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.npmjs.com/" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height={"50em"} />
                                    <h5 className="card-title" style={{ color: "#d85000", fontSize: "30px" }}>NPM</h5>
                                </div>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    )
}
