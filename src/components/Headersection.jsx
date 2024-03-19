import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Container } from 'react-bootstrap'

const Headersection = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }
    return (
        <>
            <div className='headerbg min-vh-100 d-flex flex-column' id='home'>
                <Container className='px-3 mx-auto '>
                    <div className="d-flex align-items-center justify-content-between pt-4">
                        <div>
                            <img src={logo} alt="logo" className='logo-w cursor-pointer' />
                        </div>
                        <ul className={`${show ? "left_100" : "left_0"} nav_bar d-flex`}>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className="text-white op-70 ff-roboto fs-xs navhover fw-normal nav_line position-relative"
                                    href="#aboutus"
                                >
                                    About Us
                                </a>
                            </li>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className="text-white op-70 ff-roboto fs-xs navhover fw-normal nav_line position-relative"
                                    href="#team"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className="text-white op-70 ff-roboto fs-xs navhover fw-normal nav_line position-relative"
                                    href="#roadmap"
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li><a href="" className='ff-roboto ms-4 fs-xs fw-bold text-white btn-1'>Contact Us</a></li>
                        </ul>
                        <div
                            onClick={() => setshow(!show)}
                            className={`${show ? "" : "cross"} navline`}
                        >
                            <span className="crl-1"></span>
                            <span className="crl-2"></span>
                            <span className="crl-3"></span>
                        </div>
                    </div>
                </Container>
                <div className='container px-2 mx-auto d-flex align-items-center justify-content-center flex-column flex-grow-1'>
                    <h1 className='fs-xl ff-roboto text-white fw-bold text-center max-w-873'>Changing the way games are made</h1>
                    <p className='fs-sm ff-roboto fw-normal text-white pt-2'>Redefining the future of play</p>
                </div>
            </div>

        </>
    )
}

export default Headersection