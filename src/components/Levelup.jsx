import React from 'react'
import { Container } from 'react-bootstrap'

const Levelup = () => {
    return (
        <>

            <div className='levelup  d-flex justify-content-end align-items-center'>
                <Container className='mx-auto d-flex justify-content-end'>
                    <div className='levelupcard' data-aos="zoom-in-up">
                        <h2 className='ff-roboto fw-bold fs-lg text-white'>Level up your gaming experience</h2>
                        <li className='ms-0 mt-sm-5 mt-4 mb-2'><a href="" className='ff-roboto fs-xs fw-bold text-white btn-1'>Play Unvilled</a></li>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Levelup