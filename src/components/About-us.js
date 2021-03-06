import React from 'react';
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import about3 from "../assets/about3.jpg"
import Skeleton from 'react-loading-skeleton';

import '../style/about-us.scss'


class AboutUs extends React.Component {
    render() {
        return (
            <>
                <section className="main-banner">
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>About Us</h1>
                        </div>
                    </div>
                </section>
               <main className= "main-about">
                <section className="about-us">
                    <div className="about-card">
                        <div className="about-img">
                            <img src={about1} alt="about1" style={{ width: "415px", Height: "220" }} />
                        </div>
                        <div className="about-desc">
                            <div className="about-title">
                                <h3>{"Are we building a better tomorrow?" || <Skeleton/>}</h3>
                            </div>
                            <hr className="about-hr" />
                            <div className="about-info">
                                <p>
                                    {"Every generation carries the legacy of those come before, as well as the hope that we can improve upon the past. Those hopes greatly depend on our willingness (or ability) to recognize issues in our local and global communities, and then on our individual decision to take action." || <Skeleton count={8}/>  }
                        </p>
                            </div>
                        </div>
                    </div>
                </section>
               
                    <section className="about-us">
                        <div className="about-card">
                            <div className="about-desc">
                                <div className="about-title">
                                    <h3>{"“Buy Locally, Think Globally”" || <Skeleton/>}</h3>
                                </div>
                                <hr className="about-hr" />
                                <div className="about-info">
                                    <p>
                                        {"Local Products has been created in response to a visible need for solutions to boost local economies, foster sustainable initiatives, encourage healthier living, and simply strengthen communities from the inside out. Local Products enables users to find quality locally crafted goods no matter where they might be tucked away!" || <Skeleton count={8}/> }
                         </p>
                                </div>

                            </div>
                            <div className="about-img">
                                <img src={about2} alt="about2" style={{ width: "415px", Height: "220"}} />
                            </div>
                        </div>

                    </section>

               
                <section className="about-us">
                    <div className="about-card">
                        <div className="about-img">
                            <img src={about3} alt="about3" style={{ width: "415px", Height: "220" }} />
                        </div>
                        <div className="about-desc">
                            <div className="about-title">
                                <h3>{"“Think Global. Buy Local.”" || <Skeleton/>}</h3>
                            </div>
                            <hr className="about-hr" />
                            <div className="about-info">
                                <p>
                                    {"When you buy local you are ensuring that your favorite shops, artisans, farmers and more can continue to do what they do best while helping to shore up their local economies as well. No matter where you live, or what you are looking for, Local Products empowers buyers and sellers to take charge of the purchase process." || <Skeleton count={8}/>}
           </p>
                            </div>
                        </div>
                    </div>
                </section>
                </main>


            </>
        )
    }

}


export default AboutUs;