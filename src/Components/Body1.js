import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useWebAnimations,{bounce} from "@wellyshen/use-web-animations";

function Body1() {
    const animateTiming={
        duration:2000,
        iterations:Infinity,
        easing: 'ease-in-out',
        direction:'alternate'
    }

    const brain = useWebAnimations({
        keyframes:{
            transform:["translate(0,40px)"]
        },
        timing:animateTiming
    })

    const button = useWebAnimations({...bounce})

    return (
        <div className='main-div'>
            <Container  className='height'>
                <Row>
                        
                    <Col  lg={5} md={12} sm={12} xs={12}>
                        <div className='main-heading-div'>
                            <h1 className='cortexheading'>CORTEX</h1>
                            <h2 className='copywriterheading'>COPYWRITER</h2>
                            <div className='bodypara'>
                                <p>Enhance your communications with psychology
                                -based copywriting and UX writing and WebDevelopment</p>
                            </div>
                            <div className='bodybutton'>
                                <button className='bodybuttonn' ref={button.ref}>
                                    Send a message
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} xs={12}>
                        <div className='bodyimage'>
                            <img className='transformimage' src="http://salman-project4b.surge.sh/images/Intro_Featured_Image_Empty.svg?fbclid=IwAR1Y5hswrINQYRg71oEe7f5sBHok8uTD2N0NEdZzOqgXbU44ozpSJGIhZIE" alt="" />
                            <img className='brain-abs' ref={brain.ref} src="http://salman-project4b.surge.sh/images/Intro_Brain.svg?fbclid=IwAR0s8O5k4Q1ceXFF40vZeXy9LvpROikQZLLLqnz3P3ajss64iJgMZ4MEUHE" alt="" />
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Body1
