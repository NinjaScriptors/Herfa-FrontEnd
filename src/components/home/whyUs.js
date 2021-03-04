import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Container} from '@material-ui/core';
import { CapslockFill, HandThumbsUpFill, StarFill } from 'react-bootstrap-icons';


function WhyUs(params) {
    return(
        <section id="why-us-section">
        <Container>
            <h3>Why us ?</h3>
            <hr />
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <StarFill color="black" size={60} /> <p></p>
                        <Card.Title>Buy Local Products</Card.Title>
                        {/* <Card.Text>هي المجموعة الأضخم في موقعنا من حيث عدد المنتجات و تضم أنواع مختلفة من الحرف اليدوية كصناعة الفخار و الاكسسوارات و الخزف و غيرها من باقي الحرف اليدوية</Card.Text> */}
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <HandThumbsUpFill color="black" size={60} /> <p></p>
                        <Card.Title >Boost the Local Economy</Card.Title>
                        {/* <Card.Text >تحتوي على أصناف متنوعة من الأطباق المحلية منزلية الصنع</Card.Text> */}
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <CapslockFill color="black" size={60} /> <p></p>
                        <Card.Title >Discover Unique Products</Card.Title>
                        {/* <Card.Text >مجموعة متميزة تحتوي على منتجات متنوعة الصنع و مناسبة لجميع فئات المجتمع</Card.Text> */}
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    </section>
    )
}

export default WhyUs;