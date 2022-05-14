import { Link } from "react-router-dom"
export default function Home() {
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

            <section className="hero-section hero" data-background="" style={{ backgroundImage: "url(images/hero-area/banner-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center zindex-1">
                            <h1 className="mb-3">Take Control of your<br />
                                Class and Attendance</h1>
                            <p className="mb-4">Quick Response (QR) code as a future attendance management system, to track and record<br /> student attendance in lectures and exercises for all relevant courses</p>
                            <p className="btn btn-secondary btn-lg">
                                <Link to="/login">Login Now</Link></p>
                            <img className="img-fluid w-100 banner-image" src="images/hero-area/banner-img.png" alt="banner-img" />
                        </div>
                    </div>
                </div>
                <div id="scene">
                    <img className="img-fluid hero-bg-1 up-down-animation" src="images/background-shape/feature-bg-2.png" alt="" />
                    <img className="img-fluid hero-bg-2 left-right-animation" src="images/background-shape/seo-ball-1.png" alt="" />
                    <img className="img-fluid hero-bg-3 left-right-animation" src="images/background-shape/seo-half-cycle.png" alt="" />
                    <img className="img-fluid hero-bg-4 up-down-animation" src="images/background-shape/green-dot.png" alt="" />
                    <img className="img-fluid hero-bg-5 left-right-animation" src="images/background-shape/blue-half-cycle.png" alt="" />
                    <img className="img-fluid hero-bg-6 up-down-animation" src="images/background-shape/seo-ball-1.png" alt="" />
                    <img className="img-fluid hero-bg-7 left-right-animation" src="images/background-shape/yellow-triangle.png" alt="" />
                    <img className="img-fluid hero-bg-8 up-down-animation" src="images/background-shape/service-half-cycle.png" alt="" />
                    <img className="img-fluid hero-bg-9 up-down-animation" src="images/background-shape/team-bg-triangle.png" alt="" />
                </div>
            </section>
            <br /><br />
            <section className="section feature mb-0" id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center ">
                            <h2 className="section-title">Awesome Features</h2>
                            <p className="mb-100">Some of our best features are mentioned here</p>
                        </div>
                        <div className="col-md-6 mb-80">
                            <div className="d-flex feature-item">
                                <div>
                                    <i className="ti-ruler-pencil feature-icon mr-4 "></i>
                                </div>
                                <div>
                                    <h4>Awesome Design</h4>
                                    <p>Simple UI design means that anyone can have access to very sophisticated applications</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-80">
                            <div className="d-flex feature-item">
                                <div>
                                    <i className="ti-layout-cta-left feature-icon mr-4"></i>
                                </div>
                                <div>
                                    <h4>High Security</h4>
                                    <p>Highly secure because we're using biometric authentication</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-80">
                            <div className="d-flex feature-item">
                                <div >
                                    <i className="ti-split-v-alt feature-icon mr-4"></i>
                                </div>
                                <div >
                                    <h4>Seamless Tracking</h4>
                                    <p>
                                        All attendance record against an user is easily viewable from the portal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-80">
                            <div className="d-flex feature-item">
                                <div>
                                    <i className="ti-layers-alt feature-icon mr-4"></i>
                                </div>
                                <div>
                                    <h4>Organized Layouts</h4>
                                    <p>Minimal layout and best features and super fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="feature-bg-1 up-down-animation" src="images/background-shape/feature-bg-1.png" alt="bg-shape" />
                <img className="feature-bg-2 left-right-animation" src="images/background-shape/feature-bg-2.png" alt="bg-shape" />
            </section>

            <section className="section-lg seo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-image">
                                <img className="img-fluid" src="images/marketing/marketing.png" alt="form-img" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 className="section-title">A Complete Range Of Attendance Tracking Services!</h2>
                            <p>In higher education institutions, student participation in the classroom is directly related to their academic performance. However, the majority of student attendance registration is still conventionally done, which is tedious and time-consuming, especially for those courses that involve large numbers of students. Over the years, attendance management has been conducted manually at most of the universities. To overcome the manual attendance issues, we proposed and implemented a smart attendance system with the aim to encourage the potential use of the Quick Response (QR) code as a future attendance management system, to track and record student attendance in lectures and exercises for all relevant courses
                            </p>
                        </div>
                    </div>
                </div>
                <img className="img-fluid seo-bg" src="images/backgrounds/seo-bg.png" alt="seo-bg" />
                <img className="seo-bg-shape-1 left-right-animation" src="images/background-shape/seo-ball-1.png" alt="bg-shape" />
                <img className="seo-bg-shape-2 up-down-animation" src="images/background-shape/seo-half-cycle.png" alt="bg-shape" />
                <img className="seo-bg-shape-3 left-right-animation" src="images/background-shape/seo-ball-2.png" alt="bg-shape" />
            </section>

            {/* <section className="section-lg service">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5 order-2 order-md-1">
                            <h2 className="section-title">Powerful Layout From Top To Bottom</h2>
                            <p className="mb-4">Far far away, behind the word mountains,
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they
                                live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.</p>
                            <ul className="pl-0 service-list">
                                <li><i className="ti-layout-tab-window text-purple"></i>Responsive on any device</li>
                                <li><i className="ti-layout-placeholder text-purple"></i>Very easy to customize</li>
                                <li><i className="ti-support text-purple"></i>Effective support</li>
                            </ul>
                        </div>
                        <div className="col-md-7 order-1 order-md-2">
                            <img className="img-fluid layer-3" src="images/service/service.png" alt="service" />
                        </div>
                    </div>
                </div>
                <img className="img-fluid service-bg" src="images/backgrounds/service-bg.png" alt="service-bg" />
                <img className="service-bg-shape-1 up-down-animation" src="images/background-shape/service-half-cycle.png" alt="background-shape" />
                <img className="service-bg-shape-2 left-right-animation" src="images/background-shape/feature-bg-2.png" alt="background-shape" />
            </section> */}

            <section className="section-lg team" id="team">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Our Team</h2>
                            <p className="mb-100">Our hard working teammates</p>
                        </div>
                    </div>
                    <div className="col-10 mx-auto">
                        <div className="team-slider row justify-content-center">
                            <div className="team-member card col-sm-3 mb-2">
                                <div className="d-flex mb-4">
                                    <div className="mr-3">
                                        <img className="rounded-circle img-fluid" src="images/team/team-3.jpg" alt="team-member" width="70" />
                                    </div>
                                    <div className="align-self-center">
                                        <h4>Dikshita Majumdar</h4>
                                        <h6 className="text-color">Programmer</h6>
                                    </div>
                                </div>
                                <p>2022 APAC Generation Google Scholar, CSE Sophomore at NIT Durgapur, Junior Coordinator at RECursion</p>
                            </div>
                            <div className="team-member card col-sm-3 mb-2">
                                <div className="d-flex mb-4">
                                    <div className="mr-3">
                                        <img className="rounded-circle img-fluid" src="images/team/team-1.jpg" alt="team-member" width="70" />
                                    </div>
                                    <div className="align-self-center">
                                        <h4>Rishita Shaw</h4>
                                        <h6 className="text-color">Programmer</h6>
                                    </div>
                                </div>
                                <p>Imagine Cup 2022 India Runner Up | Azure certified | NIT DGP'24 EE | Fullstack Web developer | Cloud Computing enthusiast | Golang learner </p>
                            </div>
                            <div className="team-member card col-sm-3 mb-2">
                                <div className="d-flex mb-4">
                                    <div className="mr-3">
                                        <img className="rounded-circle img-fluid" src="images/team/team-2.jpg" alt="team-member" width="70" />
                                    </div>
                                    <div className="align-self-center">
                                        <h4>Purvi Binani</h4>
                                        <h6 className="text-color">Programmer</h6>
                                    </div>
                                </div>
                                <p>Student at National Institute of Technology Durgapur | CSE 2024 | EDC, NIT Durgapur | Debating Society, NIT Durgapur</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="images/backgrounds/team-bg.png" alt="team-bg" className="img-fluid team-bg" />
                <img className="team-bg-shape-1 up-down-animation" src="images/background-shape/seo-ball-1.png" alt="background-shape" />
                <img className="team-bg-shape-2 left-right-animation" src="images/background-shape/seo-ball-1.png" alt="background-shape" />
                <img className="team-bg-shape-3 left-right-animation" src="images/background-shape/team-bg-triangle.png" alt="background-shape" />
                <img className="team-bg-shape-4 up-down-animation img-fluid" src="images/background-shape/team-bg-dots.png" alt="background-shape" />
            </section>

            <section className="section-lg pb-0 pricing" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Our Features</h2>
                            <p className="mb-50">Noteable Features</p>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                    <div className="rounded text-center pricing-table table-1">
                                        <h3>Seamless</h3>
                                        <h1><span>No.</span>1</h1>
                                        <p>
                                            Its extremely seamless to use.
                                        </p>
                                        <p className="btn pricing-btn px-2">Get Started</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                    <div className="rounded text-center pricing-table table-2">
                                        <h3>Easy to Use</h3>
                                        <h1><span>No.</span>2</h1>
                                        <p>Anyone with little knowledge of technology can use it
                                        </p>
                                        <p className="btn pricing-btn px-2">Login Now</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                    <div className="rounded text-center pricing-table table-3">
                                        <h3>Highly Secure</h3>
                                        <h1><span>No.</span>3</h1>
                                        <p>Fingerprint authentication makes  it extremely secure
                                        </p>
                                        <p className="btn pricing-btn px-2">Login Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="pricing-bg-shape-1 up-down-animation" src="images/background-shape/seo-ball-1.png" alt="background-shape" />
                <img className="pricing-bg-shape-2 up-down-animation" src="images/background-shape/seo-half-cycle.png" alt="background-shape" />
                <img className="pricing-bg-shape-3 left-right-animation" src="images/background-shape/team-bg-triangle.png" alt="background-shape" />
            </section>


            <br />
            <br />
            <section className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Subscribe to our newsletter</h2>
                            <p className="mb-5">Receive updates, news and deals</p>
                        </div>
                        <div className="col-lg-8 col-sm-10 col-12 mx-auto">
                            <form action="#">
                                <div className="input-wrapper position-relative">
                                    <input type="email" className="newsletter-form" id="newsletter" placeholder="Enter your email" />
                                    <button type="submit" value="send" className="btn newsletter-btn">subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img className="newsletter-bg-shape left-right-animation" src="images/background-shape/seo-ball-2.png" alt="background-shape" />
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