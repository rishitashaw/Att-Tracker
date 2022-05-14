import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Qrcode() {
    const [code, setCode] = useState("")
    const [displayCode, setDisplayCode] = useState(false)
    const [endtime, setEndtime] = useState("")
    const [qrCode, setQrcode] = useState("")
    const [error, setError] = useState("")

    const baseURL = "http://127.0.0.1:8000/api/"

    const handleCode = (event) => {
        setCode(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var minutesToAdd = 10;
        var currentDate = new Date();
        var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
        setEndtime(futureDate.toISOString())


        axios.post(`${ baseURL }saveCode`, { code: code, end_time: endtime })
            .then(res => {
                setDisplayCode(true);
                setCode(res.data.code)
                setEndtime(res.data.end_time)
                setQrcode(`http://localhost:3000/markAttendance/${ res.data.code }/${ res.data.end_time }`)
                console.log(qrCode)
            }).catch(error => {
                setError(error.message);
            });
    }

    return (
        <>
            <section className="fixed-top navigation nav-bg">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <a className="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/#feature">Feature</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/#team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/profile">profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        <Link to="/code">QR Code</Link></a>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-primary ml-lg-3 primary-shadow">
                                <Link to="/login">Login</Link>
                            </a>
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

                                            onChange={handleCode} placeholder="Enter Subject Code" />

                                        <button type="submit" value="submit" className="btn btn-secondary">SUBMIT</button>
                                    </form>

                                </div>
                                <div className="col-lg-5">
                                    {displayCode ? <>

                                        <div className="alert alert-success">
                                            <QRCode value={qrCode} size={300} />
                                        </div>
                                    </> : null}
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
                        <nav className="col-12">
                            <ul className="list-inline text-lg-right text-center social-icon">
                                <li className="list-inline-item">
                                    <p className="facebook" ><i className="ti-facebook"></i></p>
                                </li>
                                <li className="list-inline-item">
                                    <p className="twitter" ><i className="ti-twitter-alt"></i></p>
                                </li>
                                <li className="list-inline-item">
                                    <p className="linkedin" ><i className="ti-linkedin"></i></p>
                                </li>
                                <li className="list-inline-item">
                                    <p className="black" ><i className="ti-github"></i></p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>

        </>

    )

}