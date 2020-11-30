import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useWebAnimations from "@wellyshen/use-web-animations";
import image from './Images/image1.svg'
import imagee from './Images/image2.svg'
import "aos/dist/aos.css";
import Aos from "aos";


function Body2() {
    const animateTiming = {
        iterations:Infinity,
        duration:2000,
        easing: "ease-in-out",
        direction:"alternate"
    }

const Move = useWebAnimations({
        keyframes:{
            transform:["translate(0,20px)"]
        },
       timing :animateTiming
        
    })

    const Move2 = useWebAnimations({
        keyframes:{
            transform:["translate(0,20px)"]
        },
       timing :animateTiming
        
    })


    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
            easing:"ease-in-out",
        });
    }, [])

    return (
        <div className='body2'>
            <Container fluid>
                <div className='section'>
                    <Row>
                        <Col lg={1} md={12} sm={12}></Col>
                        <Col lg={5} sm={12} md={12} xs={12} >
                            <div className='section1' data-aos='fade-right'>
                                <img ref={Move.ref} src={image} alt="" width='100%' />
                            </div>
                        </Col>
                        <Col lg={5} sm={12} md={12} xs={12}>
                            <div className='section2' data-aos='fade-left'>
                                <div >
                                    <h1 className='uswriting'>UX Writing</h1>
                                </div>
                                <div >
                                    <p>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                                </div>
                                <div className='keys'>
                                    <span> Headlines&taglines </span>
                                    <span> :ContentStrategy </span>
                                    <span> :Blogs&Articles </span>
                                    <span> eDMs&Newsletters </span>
                                    <span> :SocialMediaContent </span>
                                    <span> :VideoScripts </span>
                                    <span> Whitepapers</span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1} md={12} sm={12}></Col>
                    </Row>
                    <Row>
                        <Col lg={1} md={12} sm={12}></Col>

                        <Col lg={5} md={12} sm={12} xs={12}>
                            <div className='section3' data-aos='fade-right'>
                                <div >
                                    <h1 className='uswriting'>Website Copywriting</h1>
                                </div>
                                <div >
                                    <p>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                                </div>
                                <div className='keys'>
                                    <span> InformationArchitecture </span>
                                    <span> :Wireframes </span>
                                    <span> :CompetitorAnalysis </span>
                                    <span> pageSEO </span>
                                    <span> :OffpageSEO </span>
                                    <span> :USP/UVP </span>
                                    <span> LandingPage</span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12} sm={12} xs={12}>
                            <div className='section4' data-aos='fade-left'>
                                <img ref={Move2.ref} src={imagee} alt="" width='100%' />
                            </div>
                        </Col>

                        <Col lg={1} md={12} sm={12}></Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default Body2
