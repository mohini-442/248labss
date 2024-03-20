import React from 'react'
import arich from '../assets/images/arich.png'
import videoplay from '../assets/images/videoplay.png'

const Arich = () => {
    return (
        <div className='position-relative z-2 overflow-hidden pb-lg-5'>
            <div className='container px-2 py-md-5 py-2 mx-auto mb-lg-5'>
                <h2 className='text-white ff-roboto fw-bold fs-lg text-center pb-lg-5 pb-3' data-aos="zoom-in-up">A rich, inhabited, and licensable world.</h2>
                <div className='position-relative '>
                    <img src={arich} alt="arich" className='w-100' />
                    <img src={videoplay} alt="videoplay" className='videoplay' />
                </div>
                <p className='fw-normal text-white ff-roboto op-70 fs-xs max-w-793 text-center mx-auto pt-4' data-aos="zoom-in-up"> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.</p>
            </div>
            <div className='arichellipse d-none d-xl-block'></div>
        </div>
    )
}

export default Arich