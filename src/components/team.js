import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import { Container } from "@material-ui/core";
import "../style/team.scss"
const TeamPage = () => {
  return (
      <>
    <header>
    <section className="main-team" >
        <div className="parallex">
        </div>
        <div className="row">
            <div className="title">
                <h1>Our Amazing Team</h1>
            </div>

        </div>
    </section>
</header>
        <Container style={{ margin: "auto"}}>
    <MDBCard   className="my-5 px-5 pb-5 text-center">
        <MDBCardBody >
          <MDBRow  style={{display :"flex" , justifyContent :"space-around" , margin: "auto"}}> 

          <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01AZ8XBTM1-7afbfb5b2ba6-512" className="img-fluid z-depth-1 rounded-circle" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">Hana'a Al-Ghazzi</h5>
              <p className="text-uppercase black-text">Web Developer</p>
              <p className="grey-text">
              Hello, My name is Hana'a, I am 23 and I have graduated from Zarqa' university with a bachelor's degree of pharmacy.
                            I'm here to merge between medical field with software development.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
              </ul>
            </MDBCol>
          
          
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01AZ2TMDEW-ef8af0b6ace3-512" className="img-fluid z-depth-1 rounded-circle" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">Mohammad Almoqdad </h5>
              <p className="text-uppercase black-text">Graphic designer</p>
              <p className="grey-text">
              beginner photographer with a lot of passion in programming and photography. I love Arabic language and aim to participate in it's technical revival
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
              </ul>
            </MDBCol>
             
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <img src="https://ca.slack-edge.com/TNGRRLUMA-U01BBMB60TT-b4fba5aaee13-512" className="img-fluid z-depth-1 rounded-circle" alt="" />
              <h5 className="font-weight-bold mt-4 mb-3">Fatima Atieh</h5>
              <p className="text-uppercase black-text">Web Developer</p>
              <p className="grey-text">
              Hard-working recent university graduate with a Software Engineering bachelor degree, frequently praised as focused and motivated to take challenges by my peers.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="black-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="black-text" />
                </a>
              </ul>
            </MDBCol>

            

           
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </Container>
      </>
  );
}

export default TeamPage;