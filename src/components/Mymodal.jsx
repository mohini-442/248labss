import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import videoplay from '../assets/images/videoplay.png'

function Mymodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img src={videoplay} alt="videoplay" className='videoplay' onClick={handleShow} />
            <div className='mx-auto container'>
                <Modal show={show} onHide={handleClose}>

                    {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}

                    <iframe className='w-100' width="560" height="315" src="https://www.youtube.com/embed/tGx-EMuruq8?si=m_qsmy7a_Eox2h-l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <Modal.Footer>
                        <Button variant="secondary" className='closebtn' onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Mymodal;