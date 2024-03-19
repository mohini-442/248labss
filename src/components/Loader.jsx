import React from "react";
import logo from '../assets/images/logo.png'

const Loader = () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("d-none");
        document.getElementById("preloader").classList.add("pointer_event_none")
        document.body.classList.remove("overflow-hidden")
    }
        , 3000);
    return (
        <div class="overflow-x-clip overflow_hidden">
            <div id="preloader"
                class="bg-black overflow_hidden w-100 min-vh-100 position-fixed d-flex justify-content-center flex-column align-items-center z_7 duration-100 cursor-pointer">
                <img src={logo} alt="logo" className="animation logo-w" />
            </div>
        </div>
    );
};

export default Loader;