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
                                src="https://cdn.shopify.com/s/files/1/0070/7032/files/Heart_Spoons_In_Process_HEADER.jpg?v=1582820311"
                                alt="Third slide"
                            />
                            <Carousel.Caption style={{marginBottom :"85px"}}>
                                <h3>Your Support Matters!</h3>
                                <p>By taking a look in our website you're supporting this group of our community</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        
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
                            <Carousel.Caption style={{marginBottom :"85px"}}>
            
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
                            style = {{overflow : "hidden"}}
                                src="https://cdn.pixabay.com/photo/2018/03/18/10/20/nizwa-3236202_1280.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption style={{marginBottom :"85px"}} >
                                <h3>Beauty of Diversity</h3>
                                <p>Our community is from different backgrounds and cultures</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                    </Carousel>
              
            </section>
    )
}

export default SliderHome;