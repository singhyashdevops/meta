import React from 'react'

export default function LogForm(props) {

    let formStyle = { textAlign: "justify", fontSize: "0.99em", textAlignLast: "center", color: props.mode === "light" ? "#ff0000" : "white" }
    let image = { backgroundImage: props.mode === "dark" ? "url(login-dark.jpeg)" : "url(login-light.jpeg)", height: "20em", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }
    let title = { textAlign: "center", color: "white", fontSize: "5em" }
    let imagePara = { color: "white", fontSize: "1em", fontFamily: 'oswald' }
    let headStyle = { fontSize: "2em", textAlign: "center", color: props.mode === "light" ? "black" : "#0070ff", padding: "0.5em 0em", fontFamily: 'oswald' }
    let paraStyle = { textAlign: "justify", fontSize: "1em", color: props.mode === "light" ? "black" : "white", padding: "0.5em 0em", fontFamily: 'oswald' }

    return (
        <>

            <div>

                <div id="carouselExampleCaptions" className="carousel slide" >

                    <div className="carousel-inner">

                        <div className="carousel-item active" id='picture1' style={image}>

                            <div className="carousel-caption d-md-block">

                                <h5 className='headerCaption container' style={title}>LOGIN FORM</h5>

                                <p className='caption container'style={imagePara}>"Register yourself at {props.title}"</p>
                                
                            </div>

                        </div>

                    </div>

                </div >

                <div className='container'>
                    <p style={headStyle}>LOGIN/SIGNUP</p>
                    <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt asperiores dicta quibusdam culpa doloribus labore quae beatae est harum maiores aliquid dolor quia magni iure quidem, aliquam dolorum nostrum hic consectetur. Nihil commodi, ab similique unde molestias porro debitis tempore, soluta magni quos esse ullam tenetur velit! Minima, quod?</p>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label" style={formStyle}>Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label" style={formStyle}>Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label" style={formStyle}>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label" style={formStyle}>Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label" style={formStyle}>City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label" style={formStyle}>State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label" style={formStyle}>Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check" >
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck" style={formStyle}>
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success">Log in</button>
                            <button type="submit" className="btn btn-danger mx-3">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
