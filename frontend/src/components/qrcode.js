import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom'

export default function Qrcode() {
    let [code, setCode] = useState("")
    const [displayCode, setDisplayCode] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayCode(true);
        alert(`The name you entered was: ${ code }`)
    }

    return (
        <>
            <section className="fixed-top navigation nav-bg">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div classNameName="collapse navbar-collapse text-center" id="navbar">
                            <ul classNameName="navbar-nav ml-auto">
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link" href="/">Home</a>
                                </li>
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link page-scroll" href="/#feature">Feature</a>
                                </li>
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link" href="/">About</a>
                                </li>
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link" href="/">Service</a>
                                </li>
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link page-scroll" href="/#team">Team</a>
                                </li>
                                <li classNameName="nav-item">
                                    <a classNameName="nav-link page-scroll" href="/#pricing">Pricing</a>
                                </li>
                                <li classNameName="nav-item">
                                    <p classNameName="nav-link" >
                                        <Link to="/code">QR Code</Link></p>
                                </li>
                            </ul>
                            <p classNameName="btn btn-primary ml-lg-3 primary-shadow">
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </nav>
                </div>
            </section>

            <section className="section-lg service-bg-image position-relative" style={{ backgroundImage: "url(images/backgrounds/service-page.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title">QR Code Generator</h2>
                            <p className="mb-100">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />Excepteur sint occaecat cupidatat non proident</p>
                        </div>
                        <>
                            <div className="row contact-bg p-5 rounded mb-5">
                                <div className="col-lg-7 mb-4 mb-lg-0">
                                    <form action="#" onSubmit={handleSubmit}>
                                        <input type="text" className="form-control mb-3" id="name" name="name"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)} placeholder="Enter Subject Code" />

                                        <button type="submit" value="submit" className="btn btn-secondary">SUBMIT</button>
                                    </form>

                                </div>
                                <div className="col-lg-5">
                                    {displayCode ? <QRCode value={code} size={300} /> : null}
                                </div>
                            </div>

                        </>

                    </div>
                </div>
                <img className="service-bg-1 up-down-animation" src="images/background-shape/feature-bg-2.png" alt="" />
                <img className="service-bg-2 left-right-animation" src="images/background-shape/seo-half-cycle.png" alt="" />
                <img className="service-bg-3 up-down-animation" src="images/background-shape/team-bg-triangle.png" alt="" />
                <img className="service-bg-4 left-right-animation" src="images/background-shape/green-dot.png" alt="" />
                <img className="service-bg-5 up-down-animation" src="images/background-shape/team-bg-triangle.png" alt="" />
            </section>

            <footer className="footer-section footer" style={{ backgroundImage: "url(images/backgrounds/footer-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                            <a href="/">
                                <img className="img-fluid" src="images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <nav className="col-lg-8 align-self-center mb-5">
                            <ul className="list-inline text-lg-right text-center footer-menu">
                                <li className="list-inline-item active"><a href="/">Home</a></li>
                                <li className="list-inline-item"><a className="page-scroll" href="#feature">Feature</a></li>
                                <li className="list-inline-item"><a href="about.html">About</a></li>
                                <li className="list-inline-item"><a className="page-scroll" href="#team">Team</a></li>
                                <li className="list-inline-item"><a className="page-scroll" href="#pricing">Pricing</a></li>
                                <li className="list-inline-item"><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        <nav classNameName="col-12">
                            <ul classNameName="list-inline text-lg-right text-center social-icon">
                                <li classNameName="list-inline-item">
                                    <p classNameName="facebook" ><i classNameName="ti-facebook"></i></p>
                                </li>
                                <li classNameName="list-inline-item">
                                    <p classNameName="twitter" ><i classNameName="ti-twitter-alt"></i></p>
                                </li>
                                <li classNameName="list-inline-item">
                                    <p classNameName="linkedin" ><i classNameName="ti-linkedin"></i></p>
                                </li>
                                <li classNameName="list-inline-item">
                                    <p classNameName="black" ><i classNameName="ti-github"></i></p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>

        </>

    )

}