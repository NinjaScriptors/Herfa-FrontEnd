import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Container, Button } from '@material-ui/core';
import { connect } from 'react-redux';



function Categories(props) {
    console.log(props.state)
    return (
        <section id="categories-section">
            <Container>
                <h3 style={{ fontWeight: "400", fontSize: "34px" }}>CATEGORIES</h3>
                <hr />
                <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/56/71/be/5671be5c32b676026463dc8e9ca94be8.jpg" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>Handicraft </Card.Title>
                            <Card.Text>Handicrafts are amazing. They are not only beautiful, made with love, handmade with expert skills but also has a great ancient history and interesting facts.</Card.Text>
                        </Card.Body>
                        <Button id="show"  href='/categories'>View</Button>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://universes.art/fileadmin/_processed_/b/c/csm_01-IMG_9395-B_2a27121332.jpg" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title >Clothes</Card.Title>
                            <Card.Text >local fashion manufacturers are suffering. For a brand to meet the requirements of this value, 80% of its products must be sewn in the country its business is based. </Card.Text>
                        </Card.Body>
                        <Button id="show" href='/categories' >View</Button>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.manusmenu.com/wp-content/uploads/2012/06/1-Labneh-1-1-of-1.jpg" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title >Local Food</Card.Title>
                            <Card.Text >Eating local helps to keep small farmers alive and provides more options to the consumer.</Card.Text>
                        </Card.Body>
                        <Button id="show" href='/categories' >View</Button>
                    </Card>
                </CardDeck>
            </Container>
        </section>
    )
}

const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps)(Categories);
