import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card, Button } from 'react-bootstrap'
import cardimage1 from './Images/cardimage1.jpg'
import cardimage2 from './Images/cardimage2.jpg'
import cardimage3 from './Images/cardimage3.jpg'


function Cards() {

    

    return (
        <div className='main__card'>
            <div className='padding__card'>
                <div className='card-Heading1'>
                    <h4>Samples</h4>
                </div>
                <div className='card-Heading2'>
                    <h3>Useful UX</h3>
                </div>
                <div className='fh'>
                    <Container  >
                        <Row className='card__container'>
                            <Col lg={4} md={12} sm={12} xs={12}  >
                                <Card className='card' style={{ width: 'auto' }}>
                                    <Card.Img variant="top" src={cardimage1}  />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={12} sm={12} xs={12}>
                                <Card className='card' style={{ width: 'auto' }}>
                                    <Card.Img variant="top" src={cardimage2}  />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={12} sm={12} xs={12}>
                                <Card className='card' style={{ width: 'auto'  } } >
                                    <Card.Img variant="top" src={cardimage3}  />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.card's content.the card's content.
                                    </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Cards
