import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter style={{ backgroundColor: " #252525", height: "180px" }} className="font-small pt-1 mt-1">
      <MDBContainer fluid  style={{ display: "flex", justifyContent: "space-between" }} >
      {/* <MDBContainer fluid className="text-center text-md-left" style={{ display: "flex", justifyContent: "space-between" }} > */}

        <MDBRow style={{ height: "140px", width: "100%", margin: "auto" }}>
          <MDBCol md="3" style={{ marginTop: "-20px" }}>
            < h3 style={{ fontSize: "33px"  , color:"#C99A5C"}} className="title">H E R F A</ h3>
           
          </MDBCol>
          <MDBCol md="3" style={{ marginTop: "-50px" }}>
            < h4 style={{ fontSize: "24px" }} className="title">Links</ h4>
            <ul>
              <li className="list-unstyled">
                <a href="/user-details">Sell Local Products</a>
              </li>
              <li className="list-unstyled">
                <a href="/our-team">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="/">Privecy Policy</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol md="3" style={{ marginTop: "-50px" }}>
            < h4 style={{  fontSize: "24px" }} className="title">Links</ h4>
            <ul>
              <li className="list-unstyled">
                <a href="/categories">Buy Local Products</a>
              </li>
              <li className="list-unstyled">
                <a href="/about-us">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="/">Privecy Policy</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol md="3" style={{ marginTop: "-20px" }}>
            < h3 style={{ fontSize: "22px" }} className="title">Get in touch with us</ h3>
            <MDBCol style={{ display: "flex", justifyContent: "space-around", marginTop: "12px" }}>
              <InstagramIcon />
              <FacebookIcon />

              <GitHubIcon />
              <TwitterIcon />
            </MDBCol>
          </MDBCol>

          <MDBContainer style={{ marginLeft: "36%" }}>

            &copy; {new Date().getFullYear()} Copyright: <a  href="/"> H E R F A </a>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;
