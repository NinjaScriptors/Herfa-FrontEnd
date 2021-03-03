import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Container, Button } from '@material-ui/core';
// import { map } from 'jquery';
import { connect } from 'react-redux';


function Categories(props) {
    console.log(props.state)
    return (
        <section id="categories-section">
            <Container>
                <h3>Categories</h3>
                <hr />
                <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/handicraft-artistic-colorful-bamboo-sikki-kans-grass-items-india-baskets-172653571.jpg" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title>Handicraft </Card.Title>
                            <Card.Text>Handicrafts are amazing. They are not only beautiful, made with love, handmade with expert skills but also has a great ancient history and interesting facts.</Card.Text>
                        </Card.Body>
                        <Button id="show" variant="primary">View</Button>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.pichlerhof-kiens.it/media/1131/img_4801.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=131110837820000000" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title >Local Food</Card.Title>
                            <Card.Text >Eating local helps to keep small farmers alive and provides more options to the consumer.</Card.Text>
                        </Card.Body>
                        <Button id="show" variant="primary">View</Button>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/203/448/18/indian-products-tibet-products-fabric-design-indian-handmade.jpg" />
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Title >Clothes</Card.Title>
                            <Card.Text >local fashion manufacturers are suffering. For a brand to meet the requirements of this value, 80% of its products must be sewn in the country its business is based. </Card.Text>
                        </Card.Body>
                        <Button id="show" variant="primary">View</Button>
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
