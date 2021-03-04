import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailedObj } from "../../store/userStore/userSlicer";
import { NavLink } from 'react-router-dom';
import {
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    Button,
} from "@material-ui/core";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';









const UserDetails = props => {


    // const { id } = props.match.params;
    // console.log('param', props.match.params)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(JSON.parse(localStorage.getItem("userInfo"))._id));
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <header>
                {/* <section className="main-banner" style={{
                    backgroundImage: "../../assets/home-banner2.jpg",
                    height: "100%",
                    backgroundSize: "cover",
                    position: "relative",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    fontFamily: 'Handlee',
                    fontWeight: "100",
                    alignItems: "center"
                }}>
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>User Details</h1>
                        </div>
                    </div>
                </section> */}
                <section className="main-banner" style={{
                    backgroundImage: "../../assets/home-banner2.jpg",

                    height: "100%",
                    backgroundSize: "cover",
                    position: "relative",
                    backgroundAttachment: "fixed",
                    fontFamily: "Roboto",
                    backgroundPosition: "center",
                    fontWeight: "100",
                    alignItems: "center", flexDirection: "column"
                }}>
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>User Details</h1>
                        </div>
                    </div>
                </section>
            </header>



            <main>
                <Container style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                    <MDBCard style={{ maxWidth: '750px', margin: "auto" }}>
                        <MDBRow className='g-0' style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "-42px", height: "350px" }}>
                            <MDBCol style={{ marginLeft: -120 }} md='4'>
                                <MDBCardImage style={{ boxShadow: " 0 7px 9px 0 rgba(0, 0, 0, 0.2)", borderRadius: "50%", marginTop: "-35px" }} src={JSON.parse(localStorage.getItem("userInfo")).image ? JSON.parse(localStorage.getItem("userInfo")).image : 'https://www.fluidogroup.com/wp-content/uploads/2018/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'} position='top' alt='...' />
                            </MDBCol>
                            <MDBCol md='7'>
                                <MDBCardBody>
                                    <MDBCardTitle style={{ fontSize: "34px" }}>{JSON.parse(localStorage.getItem("userInfo")).name || "My Name"}</MDBCardTitle>
                                    <MDBCardText style={{ fontSize: "20px" }}>
                                        name: {JSON.parse(localStorage.getItem("userInfo")).fullName || "My Name"}
                                    </MDBCardText>
                                    <MDBCardText style={{ fontSize: "20px" }}>
                                        email: {JSON.parse(localStorage.getItem("userInfo")).email || "user@user.com"}
                                    </MDBCardText>
                                    {/* <MDBCardText style={{ fontSize: "20px" }}>
                                        Ratings: {(localStorage.getItem("userInfo")).seller ? (localStorage.getItem("userInfo")).seller.map(rev => rev.ratings) : 'No ratings yet'}
                                    </MDBCardText> */}
                                    {/* <MDBCardText style={{ fontSize: "20px" }}>
                                        Number of reviews: {JSON.parse(localStorage.getItem("userInfo")).seller ? JSON.parse(localStorage.getItem("userInfo")).seller.map(rev => rev.numReviews) : 'No Reviews'}
                                    </MDBCardText> */}

                                    <Button size="lg" active style={{ backgroundColor: '#C99A5C', color: "white", width: "150px", alignItems: "center" }}><NavLink style={{ textDecoration: "none", color: "white" }} to={`/user-profile-update/${JSON.parse(localStorage.getItem("userInfo"))._id}`}>Edit Profile</NavLink>
                                    </Button>{' '}

                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                </Container>
            </main>
        </>

    );
}
const mapStateToProps = (state) => ({
    userInfo: state.users.userDetail,
});

export default connect(mapStateToProps)(UserDetails);

