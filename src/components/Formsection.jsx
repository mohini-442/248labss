import React, { useRef, useState } from "react";

const FormSection = () => {
    const checkRef = useRef(null);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        number: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        FirstName: "",
        LastName: "",
        number: "",
        email: "",
    });
    const [showPopup, setShowPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const regex = {
            FirstName: /^[a-zA-Z\s]+$/,
            LastName: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            email:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        };
        const errors = {};
        if (!regex.FirstName.test(formData.FirstName)) {
            errors.FirstName = "First Name is invalid.";
        }
        if (!regex.LastName.test(formData.LastName)) {
            errors.LastName = "Last Name is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowPopup(false);
        setFormData({
            FirstName: "",
            LastName: "",
            number: "",
            email: "",
        });
        setFormErrors({
            FirstName: "",
            LastName: "",
            number: "",
            email: "",
        });
    };
    return (
        <div className="formbg d-flex align-items-center justify-content-center  position-relative overflow-hidden " id="our">
            <div className="container mx-auto py-5 my-lg-5 px-3">
                <div className="row align-items-center pt-sm-5 flex-column-reverse flex-lg-row">
                    <div data-aos="fade-right" className="col-lg-7 col-12 px-3 pt-4 pt-lg-0">
                        <div className="form-card w-100">
                            <h2 className='ff-roboto fs-lg fw-bold lh-62 text-white pb-3'>Get updated with us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="d-sm-flex gap-4 pt-3">
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="FirstName"
                                            className="ff-roboto fs-xs fw-medium lh-18 text-white mb-0 pb-3 "
                                        >
                                            First Name
                                        </label>
                                        <div className="inputPlace">
                                            <input
                                                type="text"
                                                id="FirstName"
                                                name="FirstName"
                                                value={formData.FirstName}
                                                onChange={handleChange}
                                                placeholder="Park Seijun"
                                                className="ff-roboto lh-20 fw-normal fs-xxs inputM form-w "
                                            />
                                        </div>
                                        {formErrors.FirstName && (
                                            <p className="error ff-Roboto">{formErrors.FirstName}</p>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="LastName"
                                            className="ff-roboto fs-xs fw-medium lh-18 text-white mb-0 pb-3 "
                                        >
                                            Last Name
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="text"
                                                id="LastName"
                                                name="LastName"
                                                value={formData.LastName}
                                                onChange={handleChange}
                                                placeholder="Sejiun"
                                                className="ff-roboto lh-20 fw-normal fs-xxs  inputM form-w  "
                                            />
                                        </div>
                                        {formErrors.LastName && (
                                            <p className="error ff_Roboto">{formErrors.LastName}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-sm-flex gap-4 pt-4">
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="number"
                                            className="ff-roboto fs-xs fw-medium lh-18 text-white mb-0 pb-3"
                                        >
                                            Phone Number
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="number"
                                                id="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                placeholder="+12 5858526478"
                                                className="ff-roboto lh-20 fw-normal fs-xs off-gray inputM  form-w "
                                            />
                                        </div>
                                        {formErrors.number && (
                                            <p className="error ff_Roboto">{formErrors.number}</p>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="email"
                                            className="ff-roboto fs-xs fw-medium lh-18 text-white mb-0 pb-3"
                                        >
                                            Email
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="mail"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Park@458@Gmail.com"
                                                className="ff-roboto lh-20 fw-normal fs-xxs  inputM form-w  "
                                            />
                                        </div>
                                        {formErrors.email && (
                                            <p className="error ff-roboto lh-20 fw-normal fs-xxs off-gray">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex gap-2 align-items-start pt-4">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        defaultChecked={false}
                                        ref={checkRef} className="input_size"
                                    />
                                    <p className="ff-roboto fs-s fw-normal lh-21 text-white pb-3">
                                        By sending this form I confirm that I have read and accept the Privacy Policy
                                    </p>
                                </div>
                                <button className='ff-roboto mt-4 mb-2 fs-xs fw-bold text-white btn-1 ms-0 position-relative z-2'>Subscribe</button>
                            </form>
                            {showPopup && (
                                <div className="popup">
                                    <p className="ff_Roboto fw-medium fs_xmd mb-0 pb-2 text_Main">
                                        Form submitted successfully!
                                    </p>
                                    <button
                                        onClick={handlePopupClose}
                                        className="Nav_btn paddingClose mt-5"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-lg-5 d-flex align-items-center align-items-lg-start flex-column col-12 pt-4 pt-lg-0 px-3">
                        <h2 className='ff-roboto fs-20 fw-normal lh-28 text-white'>Stay updated</h2>
                        <p className='ff-roboto fs-xs pt-lg-3 lh-24 fw-normal text-white text-center text-lg-start op-70'>At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                        <h2 className='ff-roboto fs-20 fw-normal lh-28 text-white pt-lg-4 pt-2 pb-lg-2'>Address</h2>
                        <a
                            href="https://maps.app.goo.gl/7pka2vLvmguW9CMS6"
                            target="blank"
                            className="ff-roboto fs-xs lh-24 fw-normal text-white op-70 "
                        >
                            390 Orchard Road, 03-07, Palais Renaissance.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;
