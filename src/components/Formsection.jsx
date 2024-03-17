import React from 'react'

const Formsection = () => {
    return (
        <div className='formbg  d-flex align-items-center py-5'>
            <div className='container mx-auto px-2'>
                <div className='row flex-column-reverse flex-xl-row'>
                    <div className='col-xl-7 pt-5 pt-xl-0 col-12 d-flex  align-items-center align-items-xl-start flex-column'>
                        <div className='formbox box' data-aos="zoom-in-up">
                            <h2 className='fs-lg fw-bold text-white ff-roboto text-center text-xl-start' data-aos="zoom-in-up">Get updated with us</h2>
                            <form>
                                <div className='d-md-flex align-items-center gap-4 pt-2'>
                                    <div className='d-flex flex-column pt-3'>
                                        <label htmlFor="number" className='ff-roboto fs-xs fe-medium text-white'>Frist Name</label>
                                        <input type="text" placeholder='Park Seijun' className='formm mt-2 fs-xxs ff-roboto fw-normal' />
                                    </div>
                                    <div className='d-flex flex-column pt-3'>
                                        <label htmlFor="number" className='ff-roboto fs-xs fe-medium text-white'>Last Name</label>
                                        <input type="text" placeholder='Sejiun' className='formm mt-2 fs-xxs ff-roboto fw-normal' />
                                    </div>
                                </div>
                                <div className='d-md-flex align-items-center gap-4'>
                                    <div className='d-flex flex-column pt-md-4 pt-2'>
                                        <label htmlFor="number" className='ff-roboto fs-xs fe-medium text-white'>Phone Number</label>
                                        <input type="text" placeholder='+12 5858526478' className='formm mt-2 fs-xxs ff-roboto fw-normal' />
                                    </div>
                                    <div className='d-flex flex-column pt-md-4 pt-2'>
                                        <label htmlFor="number" className='ff-roboto fs-xs fe-medium text-white'>Email</label>
                                        <input type="text" placeholder='Park@458@Gmail.com' className='formm mt-2 fs-xxs ff-roboto fw-normal' />
                                    </div>
                                </div>
                                <div className='d-flex gap-3 pt-4'>
                                    <div className='check box'>
                                        <input type="checkbox" className='checkbox' />
                                    </div>
                                    <p className='ff-roboto fw-normal fs-s text-white max-w-547'>By sending this form I confirm that I have read and accept the Privacy Policy</p>
                                </div>
                                <li className='ms-0 mt-3 mb-3'><a href="" className='ff-roboto fs-xs fw-bold text-white btn-1'>Subscribe</a></li>
                            </form>
                        </div>
                    </div>
                    <div className='col-xl-5 col-12 d-flex justify-content-center align-items-center align-items-xl-start ps-xl-5 flex-column' data-aos="zoom-in-up">
                        <div className='ps-xl-5 text-center text-xl-start'>
                            <h2 className='fw-normal ff-roboto fs-sm text-white pt-4'>Stay updated</h2>
                            <p className='fs-xs fw-normal ff-roboto text-white op-70 pt-1 max-w-373 pt-1'>At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                            <h2 className='fw-normal ff-roboto fs-sm text-white pt-4 text-center text-xl-start'>Address</h2>
                            <p className='fs-xs fw-normal ff-roboto text-white op-70 pt-1'>390 Orchard Road, 03-07, Palais Renaissance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formsection