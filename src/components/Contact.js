import React from 'react'

export default function Contact(props) {

    let formStyle = { textAlign: "justify", fontSize: "0.99em", textAlignLast: "center", color: props.mode === "light" ? "#ff0000" : "white" }
    let imagePara = { color: "white", fontSize: "1em", fontFamily: 'oswald' }
    let image = { backgroundImage: props.mode === "dark" ? "url(contact-dark.png)" : "url(contact-light.png)", height: "20em", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }
    let title = { textAlign: "center", color: "white", fontSize: "5em" }
    let headStyle = { fontSize: "1.2em", textAlign: "center", color: props.mode === "light" ? "black" : "#0070ff", padding: "0.5em 0em", fontFamily: 'oswald', backgroundColor: props.mode==="light"?"#15a900ba":"#295ab76b",borderRadius: "0.4em" }
    let paraStyle = { textAlign: "center", fontSize: "0.8em", color: props.mode === "light" ? "black" : "white", padding: "2em 2em", fontFamily: 'oswald', backgroundColor: props.mode==="light"?"#cbff657d":"#659fff7d", borderRadius: "0.4em"}


    return (
        <>
            <div>

                <div id="carouselExampleCaptions" className="carousel slide" >

                    <div className="carousel-inner">

                        <div className="carousel-item active" id='picture1' style={image}>

                            <div className="carousel-caption d-md-block">

                                <h5 className='headerCaption container' style={title}>Contact Us</h5>

                                <p className='caption container' style={imagePara}>"Get in touch with {props.title}"</p>

                            </div>

                        </div>

                    </div>

                </div >

                <div className='container'>
                    <p style={headStyle}>CONTACT FORUM</p>
                    <p style={paraStyle}>Enter your basic details and your valid credentials, feel free to contact us in case you need some guidances.</p>
                    <label for="basic-url" className="form-label" style={formStyle}>Full Name</label>
                    <div className="input-group mb-4">
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" style={{ borderRadius: "8px" }} />
                    </div>
                    <label for="basic-url" className="form-label" style={formStyle}>Your Mail Address</label>
                    <div className="input-group mb-4">
                        <input type="text" className="form-control" placeholder="XYZ@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ borderRadius: "8px" }} />
                    </div>
                    <label for="basic-url" className="form-label" style={formStyle}>Website</label>
                    <div className="mb-4">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                    </div>

                    <label for="basic-url" className="form-label" style={formStyle}>Upload Your Resume</label>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>

                    <form className="was-validated">

                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                            <label className="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                        </div>
                        <div className="form-check mb-3">
                            <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                            <label className="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                            <div className="invalid-feedback">More example invalid feedback text</div>
                        </div>

                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>Your vanity URL</label>
                            <select className="form-select" required aria-label="select example">
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>

                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>Your vanity URL</label>
                            <input type="file" className="form-control" aria-label="file example" required />
                            <div className="invalid-feedback">Example invalid form file feedback</div>
                        </div>

                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>Your vanity URL</label>
                            <input type="text" className="form-control" id="validationDefault01" required />
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>
                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>Your vanity URL</label>
                            {/* <label for="validationDefault02" className="form-label">Last name</label> */}
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>

                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>USERNAME</label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                <div className="invalid-feedback">Example invalid select feedback</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>USERNAME</label>
                            {/* <label for="validationDefault03" className="form-label">City</label> */}
                            <input type="text" className="form-control" id="validationDefault03" required />
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>
                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>USERNAME</label>
                            {/* <label for="validationDefault04" className="form-label">State</label> */}
                            <select className="form-select" id="validationDefault04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>
                        <div className="mb-3">
                            <label for="basic-url" className="form-label" style={formStyle}>USERNAME</label>
                            {/* <label for="validationDefault05" className="form-label">Zip</label> */}
                            <input type="text" className="form-control" id="validationDefault05" required />
                            <div className="invalid-feedback">Example invalid select feedback</div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success mx-1" type="submit">Submit form</button>
                            <button className="btn btn-primary mx-1" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
