import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  style={{backgroundColor:" #252525", height:"180px" }} className="font-small pt-1 mt-1">
      <MDBContainer  fluid className="text-center text-md-left" style={{display : "flex" , justifyContent: "space-between", marginRight: "20px" }} >
        <MDBRow style={{height :"140px", width: "100%" , margin:"auto"}}>
          <MDBCol md="3" style={{marginTop:"-20px"}}>
            <h7 style = {{fontSize: "34px"}}className="title">H E R F A</h7>
           
          </MDBCol>
          <MDBCol md="3" style={{marginTop:"-50px"}}>
            <h8  style = {{marginLeft: "40px" , fontSize: "24px"}} className="title">Links</h8>
            <ul>
              <li className="list-unstyled">
               <a href="#">Sell Local Products</a> 
              </li>
              <li className="list-unstyled">
              <a href="#">Contact</a>
              </li>
              <li className="list-unstyled">
               <a href="#">Privecy Policy</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3" style={{marginTop:"-50px"}}>
            <h8  style = {{marginLeft: "40px" , fontSize: "24px"}} className="title">Links</h8>
            <ul>
              <li className="list-unstyled">
               <a href="#">Sell Local Products</a> 
              </li>
              <li className="list-unstyled">
              <a href="#">Contact</a>
              </li>
              <li className="list-unstyled">
               <a href="#">Privecy Policy</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3" style={{marginTop:"-20px"}}>
            <h7 style = {{fontSize: "24px"}}className="title">Get in touch with us</h7>
            <MDBCol style={{display : "flex" , justifyContent : "space-around", marginTop:"12px"}}>
            <InstagramIcon />
            <FacebookIcon />

            <GitHubIcon />
            <TwitterIcon />
            </MDBCol>
          </MDBCol>

     <MDBContainer style ={{marginLeft :"36%"}}> 
  
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> H E R F A </a>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;
