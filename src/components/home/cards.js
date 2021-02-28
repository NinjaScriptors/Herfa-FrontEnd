import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Container, Button} from '@material-ui/core';


function Categories(){
    return(
        <section id="categories-section">
                <Container>
                    <h3>فئات المنتجات</h3>
                    <hr />
                    <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/handicraft-artistic-colorful-bamboo-sikki-kans-grass-items-india-baskets-172653571.jpg" />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title>الحرف اليدوية</Card.Title>
                                <Card.Text>هي المجموعة الأضخم في موقعنا من حيث عدد المنتجات و تضم أنواع مختلفة من الحرف اليدوية كصناعة الفخار و الاكسسوارات و الخزف و غيرها من باقي الحرف اليدوية</Card.Text>
                            </Card.Body>
                            <Button id="show" variant="primary">عرض</Button>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pichlerhof-kiens.it/media/1131/img_4801.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=131110837820000000" />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title >المأكولات المحلية</Card.Title>
                                <Card.Text >تحتوي على أصناف متنوعة من الأطباق المحلية منزلية الصنع</Card.Text>
                            </Card.Body>
                            <Button id="show" variant="primary">عرض</Button>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://c1.wallpaperflare.com/preview/203/448/18/indian-products-tibet-products-fabric-design-indian-handmade.jpg" />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title >الألبسة</Card.Title>
                                <Card.Text >مجموعة متميزة تحتوي على منتجات متنوعة الصنع و مناسبة لجميع فئات المجتمع</Card.Text>
                            </Card.Body>
                            <Button id="show" variant="primary">عرض</Button>
                        </Card>
                    </CardDeck>
                </Container>
            </section>
    )
}

export default Categories;