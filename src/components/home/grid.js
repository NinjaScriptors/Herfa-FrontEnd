import React from 'react';
import { Container, Grid, Button} from '@material-ui/core';


function OurStoryGrid(){
    return(
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
    )
}

export default OurStoryGrid;