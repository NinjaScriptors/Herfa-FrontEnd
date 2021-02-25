import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, CardDeck } from 'react-bootstrap';
import { Container, Grid, Button, GridList, GridListTile, GridListTileBar, IconButton, } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
import tileData from './products-images';
import useStyles from "./productsBarStyle";
import { CapslockFill, HandThumbsUpFill, StarFill } from 'react-bootstrap-icons';
import './home.scss';
import './statistics.css';
import './statistics.js'
import StarBorderIcon from '@material-ui/icons/StarBorder';





function Home(props) {
    const classes = useStyles();
    return (
        <main>
            <section id="hero-section">
                {/* <Container fixed> */}
                <Container>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                                <h1>
                                    أهلاً بكم في حرفة!
                </h1>
                            </Carousel.Caption>

                            <img
                                src="https://c1.wallpaperflare.com/preview/951/935/790/jar-product-jam-handmade.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>The Place of Homemade Products</h3>
                                <p>Join the big community of creative homemade businesses owners</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                src="https://c0.wallpaperflare.com/preview/645/256/23/assorted-color-vases-on-table.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Beauty of Diversity</h3>
                                <p>Our community is from different backgrounds and cultures</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZG1hZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Your Support Matters!</h3>
                                <p>By taking a look in our website you're supporting this group of our community</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
            <section id="our-story-section">
                <Container>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}><img src="https://cdn.shopify.com/s/files/1/0070/7032/files/crafting-workshop-sell-handmade-goods-online.jpg?v=1555616932" /></Grid>
                        <Grid item xs={3}>
                            <h3>حرفة .. ننهض بالمجتمع</h3>
                            <hr />
                            <p>السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.
                            السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.
                            السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.</p>
                            <p>السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.
                            السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.
                           السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات.</p>

                            <Button id="read" variant="outlined" href="#">اقرأ المزيد</Button>
                        </Grid>
                        {/* <Grid item xs={3}><p>السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات</p></Grid>
                    <Grid item xs={3}><Button variant="outlined" color="primary" href="#">Read More</Button></Grid> */}
                    </Grid>
                </Container>
            </section>

            <section id="statistics">
                <script src="./statistics.js"></script>
                <div className="wrapper">
                    <div className="counter col_fourth">
                        <i className="fa fa-code fa-2x"></i>
                        <h2 className="timer count-title count-number" data-to="300" data-speed="1500"></h2>
                        <p className="count-text ">SomeText GoesHere</p>
                    </div>

                    <div className="counter col_fourth">
                        <i className="fa fa-coffee fa-2x"></i>
                        <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                        <p className="count-text ">SomeText GoesHere</p>
                    </div>

                    <div className="counter col_fourth">
                        <i className="fa fa-lightbulb-o fa-2x"></i>
                        <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                        <p className="count-text ">SomeText GoesHere</p>
                    </div>

                    <div className="counter col_fourth end">
                        <i className="fa fa-bug fa-2x"></i>
                        <h2 className="timer count-title count-number" data-to="157" data-speed="1500"></h2>
                        <p className="count-text ">SomeText GoesHere</p>
                    </div>
                </div>
            </section>

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

            <section id="products-section">
                <Container>
                    <h3>المنتجات الأكثر مبيعاً</h3>
                    <hr />
                    <div className={classes.root}>
                        <GridList cellHeight={300} spacing={15} className={classes.gridList}>
                            {tileData.map((tile) => (
                                <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                                    <img src={tile.img} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        titlePosition="top"
                                        actionIcon={
                                            <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                                <StarBorderIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                        className={classes.titleBar}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </Container>
            </section>

            <section id="why-us-section">
                <Container>
                    <h3>لماذا نحن</h3>
                    <hr />
                    <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{ textAlign: 'center' }}>
                                <StarFill color="black" size={60} /> <p></p>
                                <Card.Title>المنصة الأولى من نوعها</Card.Title>
                                {/* <Card.Text>هي المجموعة الأضخم في موقعنا من حيث عدد المنتجات و تضم أنواع مختلفة من الحرف اليدوية كصناعة الفخار و الاكسسوارات و الخزف و غيرها من باقي الحرف اليدوية</Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{ textAlign: 'center' }}>
                                <HandThumbsUpFill color="black" size={60} /> <p></p>
                                <Card.Title >الجودة أولويتنا</Card.Title>
                                {/* <Card.Text >تحتوي على أصناف متنوعة من الأطباق المحلية منزلية الصنع</Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{ textAlign: 'center' }}>
                                <CapslockFill color="black" size={60} /> <p></p>
                                <Card.Title >النهوض بالمجتمع هدفنا</Card.Title>
                                {/* <Card.Text >مجموعة متميزة تحتوي على منتجات متنوعة الصنع و مناسبة لجميع فئات المجتمع</Card.Text> */}
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </section>

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </main>
    )

}

export default Home;