import React from 'react'
import { Container, Row } from 'react-bootstrap'




const cards = [{
    head: 'World Building',
    paragraph: 'Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision',
},
{
    head: 'Game Design',
    paragraph: 'Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players senses and ignite their imagination.'
},
{
    head: 'Art and Sound',
    paragraph: 'In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.'
}];

const Gamesfirst = () => {
    const gamecards = cards.map((cards, i) => (
        <div key={i} className="col-xl-4 col-md-6 col-12 pt-2 pb-lg-5 pb-2 " data-aos="zoom-in-up">
            <div className='gamescard mx-3 position-relative z-2 overflow-hidden box'>
                <h2 className='ff-roboto text-white fw-bold fs-md'> {cards.head}</h2>
                <p className='ff-roboto text-white fs-xs fw-normal pt-3 op-70'>{cards.paragraph}</p>
                <div className='gamescardellipse'></div>
            </div>
        </div>
    ));

    return (
        <div className='position-relative z-2 overflow-hidden' id='aboutus'>
            <Container className='mx-auto px-2 py-lg-5 mb-4 py-3'>
                <Row className='py-md-5 '>
                    <div className='col-lg-7 col-12 d-flex align-items-center align-items-lg-start flex-column '>
                        <div>
                            <a href="" className='fw-normal fs-xs ff-roboto gamebtn color-gradient' data-aos="zoom-in-up">DOERS OVER TALKERS</a>
                        </div>
                        <h2 className='fs-lg text-white ff-roboto fw-bold max-w-310 pt-3 text-center text-lg-start' data-aos="zoom-in-up">Game First.Always.</h2>
                    </div>
                    <div className='col-lg-5' data-aos="zoom-in-up">
                        <p className='ff-roboto fs-sfw-medium text-white pt-lg-5 pt-md-3  text-center text-lg-start' >This is difficult</p>
                        <p className='ff-roboto fw-normal text-white op-70 fs-xs pt-md-2 text-center text-lg-start'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with world-class storytelling, world-building, game design, art and sound. And fun.</p>
                    </div>
                </Row>
                <Row className='pt-lg-5 pb-5 pb-lg-0 mt-4 mb-lg-5 justify-content-center'>
                    {gamecards}
                </Row>
            </Container>
            <h2 className='ff-roboto fs-xxl fw-bold text-white op-6 aboutus d-none d-md-block'>About Us</h2>
            <div className='gameellipse d-none d-lg-block'></div>
        </div>
    )
}

export default Gamesfirst