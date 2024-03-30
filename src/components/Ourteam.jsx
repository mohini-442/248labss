import React from 'react'
import { Row } from 'react-bootstrap';
import Slider from "react-slick";
import teamimg1 from '../assets/images/teamimg1.png'
import teamimg2 from '../assets/images/teamimg2.png'
import teamimg3 from '../assets/images/teamimg3.png'
import teamimg4 from '../assets/images/teamimg4.png'
import teamimg5 from '../assets/images/teamimg5.png'
import teamimg6 from '../assets/images/teamimg6.png'
import teamimg7 from '../assets/images/teamimg7.png'
import teamimg8 from '../assets/images/teamimg8.png'

const teamcard = [
    {
        img: teamimg1,
        head: 'James Vuong',
        heading: '(Co-CEO)',
        paragraph: 'James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ',
        para: 'impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.',
    },
    {
        img: teamimg2,
        head: 'Tricia Yong',
        heading: '(Co-CEO)',
        paragraph: 'Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ',
        para: 'products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.',
    },
    {
        img: teamimg3,
        head: 'Kevin Li',
        heading: '(CFO)',
        paragraph: 'Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His',
        para: 'strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.',
    },
    {
        img: teamimg4,
        head: 'Ryan Ang',
        heading: '(Lorem Ipsum)',
        paragraph: 'Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi  ',
        para: 'products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.',
    },
    {
        img: teamimg5,
        head: 'Dylan',
        heading: '(Executive Producer)',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.',
        para: 'Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.',
    },
    {
        img: teamimg6,
        head: 'Ralf',
        heading: '(Lorem Ipsum)',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.',
        para: 'Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.',
    },
    {
        img: teamimg7,
        head: 'Jordan Stratford',
        heading: '(Creative Director)',
        paragraph: 'Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development',
        para: 'for television with the world’s largest streaming producer.',
    },
    {
        img: teamimg8,
        head: 'Jae Sik Choi',
        heading: '(Lorem Ipsum)',
        paragraph: 'Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB',
        para: 'Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.',
    },
];


const Ourteam = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
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
    const cards = teamcard.map((teamcard, i) => (
        <div key={i} className='col-lg-6 d-flex justify-content-center align-items-center mt-4'>
            <div className='teamcard mx-2 position-relative z-2 overflow-hidden' data-aos="zoom-in-up">
                <div className='d-sm-flex'>
                    <img src={teamcard.img} alt="team" className='teamimg' />
                    <div className='ps-sm-3'>
                        <div className='d-flex align-items-center gap-2 pt-3'>
                            <h2 className='fw-semibold ff-roboto text-white fs-20 text-nowrap'>{teamcard.head}</h2>
                            <p className='fw-normal ff-roboto fs-xs color-gradient text-nowrap'>{teamcard.heading}</p>
                        </div>
                        <p className='ff-roboto fs-xs fw-normal text-white op-70 pt-md-2 lh-24'>{teamcard.paragraph}</p>
                    </div>
                </div>
                <p className='ff-roboto text-white op-70 fw-normal fs-xs pt-2'>{teamcard.para}</p>
                <div className='teamcardellipse'></div>
            </div>
        </div>
    ));
    return (
        <div id='team' className='position-relative z-2 overflow-hidden pt-5'>
            <div className='container-lg mx-auto py-md-5 pb-4 pb-sm-0 py-2 mt-md-5'>
                <div className='d-flex justify-content-center' data-aos="zoom-in-up">
                    <li className='fw-normal fs-xs ff-roboto gamebtn color-gradient pbtn'> Our Team</li>
                </div>
                <h2 className='fs-lg ff-roboto fw-bold text-white text-center pt-3' data-aos="zoom-in-up">Behind our expertise</h2>
                <div className='row py-lg-5 py-2 d-none d-xl-block'>
                    <Row {...settings}> {cards}</Row>
                </div>
                <div className='row py-lg-5 py-2 d-block d-xl-none'>
                    <Slider {...settings}> {cards}</Slider>
                </div>
            </div>
            <h2 className='op-6 text-white ff-roboto fs-xxl fw-bold ourteam d-none d-md-block'>Our Team</h2>
            <div className='teamellipse teame1 d-none d-lg-block'></div>
            <div className='teamellipse teame2 d-none d-lg-block'></div>
        </div>
    )
}

export default Ourteam