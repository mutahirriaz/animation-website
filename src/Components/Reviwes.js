import React, { useEffect } from 'react'
import reviws1 from './Images/reviws1.svg'
import reviews2 from './Images/reviws2.svg'
import reviews3 from './Images/reviews3.svg'
import reviews4 from './Images/reviews4.svg'
import reviews5 from './Images/reviews5.svg'
import reviews6 from './Images/reviews6.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useWebAnimations, { fadeInTopLeft } from "@wellyshen/use-web-animations";
import "aos/dist/aos.css";
import Aos from "aos";

function Reviwes() {


    useEffect(() => {
        Aos.init({
            easing: 'ease-in-out',
            once: true,
            duration: 1000,
        });

    }, [])

    return (
        <div className='reviws_main_div'>
            <div className='forpadding'></div>
            <div className='reviews-heading'>
                <h3>Reviews</h3>
            </div>
            <Container className='reviews__container'>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} >
                        <div className='reviewsbox' data-aos='fade-down-right'>
                            <div className='reviewspic'>
                                <img src={reviws1} alt="" width='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='reviewsbox' data-aos='fade-down-left'>
                            <div className='reviewspic'>
                                <img src={reviews2} alt="" width='200px' height='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='reviewsbox' data-aos='fade-right'>
                            <div className='reviewspic'>
                                <img src={reviews3} alt="" width='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='reviewsbox' data-aos='fade-left'>
                            <div className='reviewspic'>
                                <img src={reviews4} alt="" width='200px' height='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='reviewsbox' data-aos='fade-up-right'>
                            <div className='reviewspic'>
                                <img src={reviews5} alt="" width='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='reviewsbox' data-aos='fade-up-left'>
                            <div className='reviewspic'>
                                <img src={reviews6} alt="" width='200px' height='200px' />
                            </div>
                            <div className='reviewstext'>
                                <div className='reviewsupper-div'>
                                    <h6>Karl Van Lieshout</h6>
                                    <p>Owner & Operator – Ausbeds</p>
                                </div>
                                <div className='reviewslower-div'>
                                    <p>"..innovative"</p>
                                    <p>"..seamless UX"</p>
                                    <p>"..more online sales"</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Reviwes
