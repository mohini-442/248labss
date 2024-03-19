import React from 'react'
import { Container } from 'react-bootstrap'
import domain from '../assets/images/domain.png'

const Domain = () => {
    return (
        <div className='py-lg-5 position-relative z-2'>
            <Container className='mx-auto py-5 px-3'>
                <div className='d-flex align-items-center justify-content-center py-md-5 py-4'>
                    <img src={domain} alt="" className='w-100 domainimg' />
                </div>
                <div className='row'>
                    <div className='col-lg-4 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start gap-2 mb-3 mb-lg-0 flex-lg-column' data-aos="zoom-in-up">
                        <li className='pb-2'><a href="" className='ff-roboto fs-xs fw-bold text-white domainbtn '>name@domain.com</a></li>
                        <li className='pt-sm-2 pt-lg-4 pt-2 pb-4 pb-lg-0'><a href="" className='ff-roboto  fs-xs fw-bold text-white  domainbtn2'>Make Your Move</a></li>
                    </div>
                    <div className='col-lg-8 pt-2 pt-md-0 text-center text-lg-start' data-aos="zoom-in-up">
                        <p className='ff-roboto  fw-normal color-offwhite fs-xs '>Unveiled is a unique <span className='fw-semibold text-white'>Collectible Card Game</span>  in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence.
                        </p>
                        <p className='ff-roboto  fw-normal color-offwhite pt-2 fs-xs'>You play <span className='fw-semibold text-white'> A Rogue Merchant Trader </span>allied to a noble house, alongside your <span className='fw-semibold text-white'> Cryptid-humanoid Companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.
                        </p>
                        <p className='ff-roboto fw-semibold text-white fs-xs pt-2 '>What’s your next move?</p>
                    </div>
                </div>
            </Container>
            <div className='purpleellipse'></div>
        </div>
    )
}

export default Domain