import React from 'react';
import { Carousel} from 'react-bootstrap';
import { Container} from '@material-ui/core';

function SliderHome(){
    return(
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
    )
}

export default SliderHome;