import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';


function OurStoryGrid() {
    return (
        <section id="our-story-section">
            <Container>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}><img src="https://cdn.shopify.com/s/files/1/0070/7032/files/crafting-workshop-sell-handmade-goods-online.jpg?v=1555616932" /></Grid>
                    <Grid item xs={3}>
                        <h3>Why Buy Local ?</h3>
                        <hr />
                        <p>
                            <b>Quality</b> Nothing compares to fresh local produce and locally crafted goods.
                        </p>
                        <p>
                            <b>Price</b> Buy directly from the local seller with NO inflated costs like other services charge.
</p>
                        <p>
                            <b>Impact</b> Every purchase puts money directly in the hands of local sellers and their community. You are supporting the local economy every time you buy!
</p>
                        <p>
                            <b>Selection</b> From your own backyard to half-way across the globe you can find what you want, when you want, and hidden gems you would have missed without the Local Products App.</p>


                        <Button id="read" variant="outlined" href="#">MORE !</Button>
                    </Grid>
                    {/* <Grid item xs={3}><p>السبب الرئيسي خلف فكرة حرفة هو دعم فئة كبيرة في مجتمعنا يميزها الابداع و تخطي التحديات</p></Grid>
                    <Grid item xs={3}><Button variant="outlined" color="primary" href="#">Read More</Button></Grid> */}
                </Grid>
            </Container>
        </section>
    )
}

export default OurStoryGrid;