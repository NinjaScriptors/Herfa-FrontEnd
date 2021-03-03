import React from 'react';
import { Carousel} from 'react-bootstrap';
import { Container} from '@material-ui/core';

function SliderHome(){
    return(
        <section id="hero-section">
                {/* <Container fixed> */}
                
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                                <h1>
                                    H E R F A 
                </h1>
                            </Carousel.Caption>

                            <img
                                src="https://encyclocraftsapr.com/wp-content/uploads/2017/09/c-users-admin-desktop-wcc_apr-photos-sad_2237-cop.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{marginBottom :"95px"}}>
            
                                <h3>The Place of Homemade Products</h3>
                                <p>Join the big community of creative homemade businesses owners</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                        <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                                <h1>
                                    H E R F A 
                </h1>
                            </Carousel.Caption>
                            <img
                                src="https://images.unsplash.com/photo-1485546784815-e380f3297414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Second slide"
                            />
                            <Carousel.Caption style={{marginBottom :"95px"}} >
                                <h3>Beauty of Diversity</h3>
                                <p>Our community is from different backgrounds and cultures</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                        <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                                <h1>
                                    H E R F A 
                </h1>
                            </Carousel.Caption>
                            <img
                                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZG1hZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{marginBottom :"95px"}}>
                                <h3>Your Support Matters!</h3>
                                <p>By taking a look in our website you're supporting this group of our community</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
              
            </section>
    )
}

export default SliderHome;