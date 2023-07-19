import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="hero">
                    <nav className="navbar navbar-expand-lg navbar-light mx-5 text-white mt-2">
                        {/* Container wrapper */}
                        <div className="container-fluid">
                            {/* Collapsible wrapper */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* Navbar brand */}
                                <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
                                    <img
                                        src="/images/newpic.png"
                                        height={40}
                                        width={80}
                                        alt="MDB Logo"
                                        loading="lazy"
                                    />
                                </NavLink>
                            </div>
                            <div className="d-flex align-items-center">
                                <div
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                >
                                    <i className="fas fa-globe w-50 mx-2"></i>
                                    <select name="" id="" className="dropdown-toggle d-flex align-items-center hidden-arrow">
                                        <option value="" className='text-dark'>English</option>
                                        <option value="" className='text-dark'>Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Content */}
                    <div class="card text-center w-100 h-80 ">
                        <div class="card-body ">
                            <p className='heading'>A fruits make you strong</p>
                            <p style={{ color: "#000" }}>Love is like a fruit. It may look good, but you shouldn’t bite in it until it’s ripe.</p>
                            <button type='button' className='btn mt-5 btn-dark btn-rounded'>
                                <span>Get Fruits Now <i className="fas fa-arrow-right-long" />
                                </span>
                            </button>
                            <p style={{ color: "#000", fontWeight:'500', fontSize:'20px' }} className="mt-5">Love is like a fruit. It may look good, but you shouldn’t bite in it until it’s ripe.</p>
                        </div>
                    </div>
                </div>
                {/* Card of servise */}
                <div className="card mb-3 w-100 h-50 card1">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src='/images/lichi.jpg'
                                alt="service image"
                                className="img-fluid w-50"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body content-body">
                                <h5 className="card-title">Lychee is a tropical fruit that offers</h5>
                                <p className="card-text mb-4">
                                    Lychees are a good source of vitamin C,
                                    which is an antioxidant that helps boost the immune system and supports
                                    healthy skin. They also contain potassium, copper, and various B vitamins.
                                </p>
                                <button type='button' className='btn btn-primary btn-rounded'>
                                    <span>Buy Fruits Now <i className="fas fa-arrow-right-long" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card of servise */}
                <div className="card mb-3 w-100 h-50 card2">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body content-body">
                                <h5 className="card-title">potential benefits of consuming mangoes</h5>
                                <p className="card-text mb-4">
                                    Mangoes are packed with essential nutrients. They are an excellent source of vitamin C, which boosts the immune system and supports healthy skin.
                                    Mangoes also contain vitamin A, vitamin E, vitamin K, potassium, and fiber.</p>
                                <button type='button' className='btn btn-primary btn-rounded'>
                                    <span>Buy Fruits Now <i className="fas fa-arrow-right-long" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 mt-0">
                            <img
                                src='/images/mango.jpg'
                                alt="service image"
                                className="img-fluid w-50"
                            />
                        </div>
                    </div>
                </div>


                <div className="card mb-3 w-100 h-50 card1">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src='/images/jackfruits.jpg'
                                alt="service image"
                                className="img-fluid w-50"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body content-body">
                                <h5 className="card-title">Jackfruit unique taste and numerous health benefits</h5>
                                <p className="card-text mb-4">
                                    Rich in nutrients: Jackfruit is a good source of vitamins, minerals, and 
                                    fiber. It contains vitamin C, vitamin A, potassium, magnesium, and fiber, 
                                    which are all important for overall health and wellbeing.
                                </p>
                                <button type='button' className='btn btn-primary btn-rounded'>
                                    <span>Buy Fruits Now <i className="fas fa-arrow-right-long" />
                                    </span>
                                </button>
                                <div className="icon">
                                    <i className="fas  fa-basket-shopping mx-3 fas1"></i>
                                    <i class="fas fa-cart-shopping mx-3 fas1"></i>
                                    <i class="fas fa-shop mx-3 fas1"></i>
                                    <i class="fas fa-cart-flatbed mt-1 mx-3 fas1"></i>
                                </div>
                                <a href="www.google.com">see all apps ></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="text-center container py-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb-4 w-25">
                            <div className="card ">
                                <div
                                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="/images/fruits2.jpg"
                                        className="w-100 image"
                                    />
                                    <a href="#!">
                                        <div className="mask">
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                                            />
                                        </div>
                                    </a>
                                    <div className="card-text px-3 mt-4">
                                        <h1>Rich in Essential Nutrients</h1>
                                        <p >Fruits are packed with essential vitamins, minerals, and antioxidants that are vital for various bodily functions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 w-25">
                            <div className="card ">
                                <div
                                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="/images/fruits3.jpg"
                                        className="w-100 image"
                                    />
                                    <a href="#!">
                                        <div className="mask">
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                            />
                                        </div>
                                    </a>
                                    <div className="card-text px-3 mt-4">
                                        <h1>Improved Mood and Mental Health</h1>
                                        <p >Some fruits, like bananas, are rich in tryptophan, a precursor to serotonin, a neurotransmitter that contributes to feelings of well-being and happiness</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 w-25">
                            <div className="card ">
                                <div
                                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src="/images/fruits4.jpg"
                                        className="w-100 image"
                                    />
                                    <a href="#!">
                                        <div className="mask">
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                            />
                                        </div>
                                    </a>
                                    <div className="card-text px-3 mt-4">
                                        <h1>Reduces the Risk of Chronic Diseases</h1>
                                        <p >Regular consumption of fruits has been associated with a reduced risk of chronic diseases, such as type 2 diabetes, certain cancers, and heart disease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <span className='underline'><a href="www.google.com">see more advantage > </a></span>
                </div>

                {/* map card */}

                <div className="card bg-dark text-white">
                    <div className='text'>
                        <h1 className=" text-center text-dark mt-0 fw-bold">Best Selling Cities</h1>
                    </div>
                    <img
                        src="/images/map.jpg"
                        className="card-img"
                        alt="Stony Beach"
                    />
                    <div className="card-img-overlay">
                        <div className="side">
                            <div className='mb-5'>
                                <h1 className='mb-0 pb-0'>250</h1>
                                <p className='mt-0'>Banluru</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='mb-0 pb-0'>200</h1>
                                <p className='mt-0'>Mumbai</p>
                            </div>
                            <div className='mb-5'>
                                <h1 className='mb-0 pb-0'>150</h1>
                                <p className='mt-0'>Lucknow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >


    )
}

export default Home