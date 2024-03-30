import React from 'react'
import india from '../assets/images/india.svg'
import flag2 from '../assets/images/flag2.svg'
import flag3 from '../assets/images/flag3.svg'
import roadmapline from '../assets/images/roadmapline.png'
import road from '../assets/images/road.png'
import line from '../assets/images/liner.png'

const Myroadmap = () => {
    return (
        <div className='position-relative z-2 overflow-hidden roadmapbg py-md-5' id='roadmap'>
            <div className='container-lg mx-auto py-lg-5 my-5'>
                <div className='d-flex justify-content-center pt-md-5'>
                    <li className='fw-normal fs-xs ff-roboto gamebtn color-gradient pbtn mx-auto ' data-aos="zoom-in-up">ROADMAP</li>
                </div>
                <h2 className='ff-roboto text-white fw-bold fs-lg text-center pt-2' data-aos="zoom-in-up">Milestones and markers</h2>
                <div className='position-relative'>
                    <div className='row py-lg-5 mt-5'>
                        <div className='col-lg-6 '>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' data-aos="zoom-in-up">
                            <div className='roadmapcard d-flex align-items-center justify-content-center flex-column position-relative z-2 overflow-hidden box'>
                                <h2 className='fs-sm ff-roboto fw-normal color-gradient'>Oct 2014</h2>
                                <p className='text-center text-white fs-sm ff-roboto pt-2 op-70'>Hired our first employee</p>
                                <div className='roadmapcardellipse'></div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center pt-lg-5 mt-lg-5 ' data-aos="zoom-in-up">
                            <div className='roadmapcard d-flex align-items-center justify-content-center flex-column position-relative z-2 overflow-hidden box'>
                                <h2 className='fs-sm ff-roboto fw-normal color-gradient'>Nov 2014</h2>
                                <p className='text-center text-white fs-sm ff-roboto pt-2 op-70'>Launched Bitcoin wallet</p>
                                <div className='roadmapcardellipse'></div>
                            </div>
                        </div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center pt-lg-5 mt-lg-5' data-aos="zoom-in-up">
                            <div className='roadmapcard d-flex align-items-center justify-content-center flex-column  position-relative z-2 overflow-hidden box'>
                                <h2 className='fs-sm ff-roboto fw-normal color-gradient'>Oct 2015</h2>
                                <p className='text-center text-white fs-sm ff-roboto pt-2 op-70'>1st prize by Bit angels at Coin Agenda, Las Vegas</p>
                                <div className='roadmapcardellipse'></div>
                            </div>
                        </div>
                        <div className='col-lg-6 pt-lg-5 mt-lg-5 d-flex align-items-center justify-content-center' data-aos="zoom-in-up">
                            <div className='roadmapcard d-flex align-items-center justify-content-center flex-column position-relative z-2 overflow-hidden box'>
                                <h2 className='fs-sm ff-roboto fw-normal color-gradient'>Jan 2020</h2>
                                <div className='d-flex align-items-center gap-2'>
                                    <p className='text-center text-white fs-sm ff-roboto pt-2 op-70'>Launch On</p>
                                    <div className='d-flex align-items-center gap-2 pt-2'>
                                        <img src={india} alt="india cursor-pointer" />
                                        <img src={flag2} alt="flag2 cursor-pointer" />
                                        <img src={flag3} alt="flag3 cursor-pointer" />
                                    </div>
                                </div>
                                <div className='roadmapcardellipse'></div>
                            </div>
                        </div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-6 pt-lg-5 mt-lg-5 d-flex align-items-center justify-content-center' data-aos="zoom-in-up">
                            <div className='roadmapcard d-flex align-items-center justify-content-center flex-column position-relative z-2 overflow-hidden box'>
                                <h2 className='fs-sm ff-roboto fw-normal color-gradient'>Jan 2022</h2>
                                <p className='text-center text-white fs-sm ff-roboto pt-2 op-70'>Trusted by 10 Millions+ Users</p>
                                <div className='d-flex align-items-center gap-1 pt-2 cursor-pointer'>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2257 1.88981C10.7265 0.348555 12.907 0.348559 13.4078 1.88982L14.9154 6.52969C15.1393 7.21896 15.7816 7.68563 16.5064 7.68563H21.385C23.0056 7.68563 23.6794 9.75938 22.3683 10.7119L18.4214 13.5795C17.8351 14.0055 17.5897 14.7606 17.8137 15.4499L19.3213 20.0898C19.8221 21.631 18.058 22.9127 16.747 21.9601L12.8001 19.0925C12.2137 18.6665 11.4198 18.6665 10.8334 19.0925L6.88653 21.9601C5.57546 22.9127 3.81143 21.631 4.31221 20.0898L5.8198 15.4499C6.04376 14.7606 5.79841 14.0055 5.21209 13.5795L1.26517 10.7119C-0.0459013 9.75938 0.627903 7.68563 2.24848 7.68563H7.12713C7.85187 7.68563 8.49419 7.21896 8.71815 6.52969L10.2257 1.88981Z" fill="#FFC839" />
                                    </svg>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2257 1.88981C10.7265 0.348555 12.907 0.348559 13.4078 1.88982L14.9154 6.52969C15.1393 7.21896 15.7816 7.68563 16.5064 7.68563H21.385C23.0056 7.68563 23.6794 9.75938 22.3683 10.7119L18.4214 13.5795C17.8351 14.0055 17.5897 14.7606 17.8137 15.4499L19.3213 20.0898C19.8221 21.631 18.058 22.9127 16.747 21.9601L12.8001 19.0925C12.2137 18.6665 11.4198 18.6665 10.8334 19.0925L6.88653 21.9601C5.57546 22.9127 3.81143 21.631 4.31221 20.0898L5.8198 15.4499C6.04376 14.7606 5.79841 14.0055 5.21209 13.5795L1.26517 10.7119C-0.0459013 9.75938 0.627903 7.68563 2.24848 7.68563H7.12713C7.85187 7.68563 8.49419 7.21896 8.71815 6.52969L10.2257 1.88981Z" fill="#FFC839" />
                                    </svg>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2257 1.88981C10.7265 0.348555 12.907 0.348559 13.4078 1.88982L14.9154 6.52969C15.1393 7.21896 15.7816 7.68563 16.5064 7.68563H21.385C23.0056 7.68563 23.6794 9.75938 22.3683 10.7119L18.4214 13.5795C17.8351 14.0055 17.5897 14.7606 17.8137 15.4499L19.3213 20.0898C19.8221 21.631 18.058 22.9127 16.747 21.9601L12.8001 19.0925C12.2137 18.6665 11.4198 18.6665 10.8334 19.0925L6.88653 21.9601C5.57546 22.9127 3.81143 21.631 4.31221 20.0898L5.8198 15.4499C6.04376 14.7606 5.79841 14.0055 5.21209 13.5795L1.26517 10.7119C-0.0459013 9.75938 0.627903 7.68563 2.24848 7.68563H7.12713C7.85187 7.68563 8.49419 7.21896 8.71815 6.52969L10.2257 1.88981Z" fill="#FFC839" />
                                    </svg>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2257 1.88981C10.7265 0.348555 12.907 0.348559 13.4078 1.88982L14.9154 6.52969C15.1393 7.21896 15.7816 7.68563 16.5064 7.68563H21.385C23.0056 7.68563 23.6794 9.75938 22.3683 10.7119L18.4214 13.5795C17.8351 14.0055 17.5897 14.7606 17.8137 15.4499L19.3213 20.0898C19.8221 21.631 18.058 22.9127 16.747 21.9601L12.8001 19.0925C12.2137 18.6665 11.4198 18.6665 10.8334 19.0925L6.88653 21.9601C5.57546 22.9127 3.81143 21.631 4.31221 20.0898L5.8198 15.4499C6.04376 14.7606 5.79841 14.0055 5.21209 13.5795L1.26517 10.7119C-0.0459013 9.75938 0.627903 7.68563 2.24848 7.68563H7.12713C7.85187 7.68563 8.49419 7.21896 8.71815 6.52969L10.2257 1.88981Z" fill="#FFC839" />
                                    </svg>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2257 1.88981C10.7265 0.348555 12.907 0.348559 13.4078 1.88982L14.9154 6.52969C15.1393 7.21896 15.7816 7.68563 16.5064 7.68563H21.385C23.0056 7.68563 23.6794 9.75938 22.3683 10.7119L18.4214 13.5795C17.8351 14.0055 17.5897 14.7606 17.8137 15.4499L19.3213 20.0898C19.8221 21.631 18.058 22.9127 16.747 21.9601L12.8001 19.0925C12.2137 18.6665 11.4198 18.6665 10.8334 19.0925L6.88653 21.9601C5.57546 22.9127 3.81143 21.631 4.31221 20.0898L5.8198 15.4499C6.04376 14.7606 5.79841 14.0055 5.21209 13.5795L1.26517 10.7119C-0.0459013 9.75938 0.627903 7.68563 2.24848 7.68563H7.12713C7.85187 7.68563 8.49419 7.21896 8.71815 6.52969L10.2257 1.88981Z" fill="#FFC839" />
                                    </svg>
                                </div>
                                <div className='roadmapcardellipse'></div>
                            </div>
                        </div>
                    </div>
                    <div className='roadmapline d-block d-lg-none d-xl-block'>
                        <div className='d-flex flex-column align-items-center position-relative '>
                            <img src={road} alt="road" className='road' />
                            <img src={line} alt="line" className='line ' />
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='op-6 text-white ff-roboto fs-xxl fw-bold roadmapt d-none d-md-block'>Roadmap</h2>
            <div className='gameellipse top-r d-none d-lg-block'></div>
        </div>
    )
}

export default Myroadmap