import React, { useState } from "react";

const Backtotop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            setVisible(true);
        } else if (scrolled <= 1000) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button
                className=" position-fixed bounce border-0  backbtn justify-content-center align-items-center "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <span class=" d-flex pt-1 justify-content-center align-items-center">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_7179)">
                            <path d="M20.5103 19V31.0833H17.4894V19H6.9165L18.9998 6.91663L31.0832 19H20.5103Z" fill="white" />
                        </g>
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Backtotop;