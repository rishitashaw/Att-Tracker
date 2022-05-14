import '@passageidentity/passage-auth';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <>
            <section class="fixed-top navigation nav-bg">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
                        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
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
                                    <a className="nav-link page-scroll" href="/#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" >
                                        <Link to="/code">QR Code</Link></p>
                                </li>
                            </ul>
                            <p className="btn btn-primary ml-lg-3 primary-shadow">
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </nav>
                </div>
            </section>

            <section class="section-lg service-bg-image position-relative" style={{ backgroundImage: "url(images/backgrounds/service-page.png)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="section-title">User Management</h2>
                            <p class="mb-100">Register if you are new or login</p>
                        </div>
                        <passage-auth app-id="rNZekLj0Q12fg8QrhCeea4uy" ></passage-auth>

                    </div>
                </div>
                <img class="service-bg-1 up-down-animation" src="images/background-shape/feature-bg-2.png" alt="" />
                <img class="service-bg-2 left-right-animation" src="images/background-shape/seo-half-cycle.png" alt="" />
                <img class="service-bg-3 up-down-animation" src="images/background-shape/team-bg-triangle.png" alt="" />
                <img class="service-bg-4 left-right-animation" src="images/background-shape/green-dot.png" alt="" />
                <img class="service-bg-5 up-down-animation" src="images/background-shape/team-bg-triangle.png" alt="" />
            </section>

            <footer class="footer-section footer" style={{ backgroundImage: "url(images/backgrounds/footer-bg.png)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                            <a href="/">
                                <img class="img-fluid" src="images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <nav class="col-lg-8 align-self-center mb-5">
                            <ul class="list-inline text-lg-right text-center footer-menu">
                                <li class="list-inline-item active"><a href="/">Home</a></li>
                                <li class="list-inline-item"><a class="page-scroll" href="#feature">Feature</a></li>
                                <li class="list-inline-item"><a href="about.html">About</a></li>
                                <li class="list-inline-item"><a class="page-scroll" href="#team">Team</a></li>
                                <li class="list-inline-item"><a class="page-scroll" href="/profile">profile</a></li>
                                <li class="list-inline-item"><a href="contact.html">Contact</a></li>
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