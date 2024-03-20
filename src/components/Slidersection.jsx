import React from 'react'
import Slider from "react-slick";
import img1 from '../assets/images/sliderimg1.png'
import img2 from '../assets/images/sliderimg2.png'
import img3 from '../assets/images/sliderimg3.png'
import img4 from '../assets/images/sliderimg4.png'
import img5 from '../assets/images/sliderimg5.png'
import { Container } from 'react-bootstrap';

const Slidersection = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-black py-md-5'>
            <Container className='mx-auto position-relative z-2 py-5 mt-5'>
                <div className=''>
                    <Slider className='brands pb-lg-5 cursor-pointer' {...settings}>
                        <div>
                            <img src={img1} alt="img1" className='img1w mx-4 op-50 pt-4 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img2} alt="img2" className='img2w mx-4 op-50 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img3} alt="img3" className='img3w mx-4 op-50 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img4} alt="img4" className='img3w mx-4 op-50 pt-4 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img5} alt="img5" className='img2w mx-4 op-50 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img1} alt="img1" className='img1w mx-4 op-50 pt-4 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img2} alt="img2" className='img2w mx-4 op-50 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img3} alt="img3" className='img3w mx-4 op-50 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img4} alt="img4" className='img3w mx-4 op-50 pt-4 cursor-pointer' />
                        </div>
                        <div>
                            <img src={img5} alt="img5" className='img2w mx-4 op-50 cursor-pointer' />
                        </div>
                    </Slider>
                </div>
                <div className='layer'></div>
            </Container>
        </div>
    )
}

export default Slidersection