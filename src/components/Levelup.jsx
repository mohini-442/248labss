import React from 'react'
import { Container } from 'react-bootstrap'

const Levelup = () => {
    return (
        <>

            <div className='levelup  d-flex justify-content-end align-items-center'>
                <Container className='mx-auto d-flex justify-content-md-end justify-content-center'>
                    <div className='levelupcard mx-2'>
                        <h2 className='ff-roboto fw-bold fs-lg text-white pb-5'>Level up your gaming experience</h2>
                        <span className='ms-0 mt-5 mt-4 mb-2 ff-roboto fs-xs fw-bold text-white btn-1'>Play Unvilled</span>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Levelup