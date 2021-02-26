import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/home/home.scss';
import '../../style/home/statistics.css';
import './statistics.js'
import Categories from './cards';
import OurStoryGrid from './grid';
import SliderHome from './slider';
import Products from './products';
import StatComp from './statisticsComp';
import WhyUs from './whyUs';
import { connect } from 'react-redux';




function Home(props) {
    console.log(props.state)
    console.log(JSON.parse(localStorage.getItem("userId")))
    return (
        <main>

            <SliderHome />
            <OurStoryGrid />
            <StatComp />
            <Categories />
            <Products />
            <WhyUs />

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </main>
    )

}


const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps)(Home);