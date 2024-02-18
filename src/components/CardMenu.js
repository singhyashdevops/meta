import React from 'react'

export default function CardMenu(props) {

    let carousel = { letterSpacing: "2px" }

    let title = { textAlign: "center", letterSpacing: "2px", color: "white", fontSize: "40px" }

    let $imageStyle = { textAlign: "justify", textAlignLast: "center", letterSpacing: "2px", color: "white", fontSize: "20px" }

    let newStyle = { display: "flex", flexDirection: "column", flexWrap: "nowrap", alignContent: "flex-end", justifyContent: "space-around", alignItems: "center", overflow: "auto" }

    let imageStyle = { backgroundColor: props.mode === "light" ? "#9e0000" : "#004555", height: "auto" }

    let headStyle = { textAlign: "center", fontSize: "35px", letterSpacing: "2px", color: props.mode === "light" ? "black" : "#0070ff" }

    let paraStyle = { textAlign: "justify", fontSize: "20px", letterSpacing: "2px", textAlignLast: "center", color: props.mode === "light" ? "#ff0000" : "white" }


    return (
        <>
            <div>

                <div id="carouselExampleCaptions" className="carousel slide" style={carousel}>

                    <div className="carousel-inner">

                        <div className="carousel-item active" id='picture1' style={{ backgroundImage: props.mode === "dark" ? "url(cardmenu-dark.jpg)" : "url(cardmenu-light.jpg)", height: "400px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>

                            <div className="carousel-caption d-md-block">

                                <h5 className='headerCaption' style={title}>TUTORIAL</h5>

                                <p className='caption' style={$imageStyle}>Learn about Front End Development from A to Z.</p>

                            </div>

                        </div>

                    </div>

                </div >

            </div >

            <div className="container my-5">
                <p style={headStyle} className='my-5'>LEARN MORE ABOUT FRONT END DEVELOPMENT</p>
                <p style={paraStyle} className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi reprehenderit ea facilis quos, sint voluptatum corrupti accusamus tenetur facere culpa tempore autem deleniti illo ut perspiciatis nulla libero rem soluta. Omnis amet dolores blanditiis cupiditate consectetur non pariatur fugit a quod, tenetur consequuntur soluta impedit quos libero dolorum accusamus maiores?</p>
                <div className="row row-cols-2 row-cols-md-4 g-1">
                    <div className="col">
                        <a href="https://www.w3schools.com/js/?ref=catdadcode.ghost.io/" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#ffc107", fontSize: "30px" }}>JAVASCRIPT</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/html/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#ff0047", fontSize: "30px" }}>HTML</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/css/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#ffe668", fontSize: "30px" }}>CSS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#ffffff", fontSize: "30px" }}>BOOTSTRAP</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/react/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#6b84ff", fontSize: "30px" }}>REACT.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/angular/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "pink", fontSize: "30px" }}>ANGULAR.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.w3schools.com/nodejs/default.asp" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pyscript/pyscript-original-wordmark.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#20c997", fontSize: "30px" }}>NODE.JS</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.npmjs.com/" style={{ textDecoration: "none" }}>
                            <div className="card" style={imageStyle}>
                                <div className="card-body codewall" style={newStyle}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height={"100px"} />
                                    <h5 className="card-title" style={{ color: "#d85000", fontSize: "30px" }}>NPM</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
