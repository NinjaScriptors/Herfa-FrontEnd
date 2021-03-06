import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (


    //   <section className="">
    //   <footer className=" text-white" style={{backgroundColor : "#252525",  flexShrink: 0 }} >
    //     <div className="container p-4">
    //       <div className="row">
    //         <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
    //           <h5 className="text-uppercase">H E R F A </h5>

    //           <p>
    //           Herfa is platform that connected between costumer and seller in one place, to get the confident from online products we have a rating and review system 

    //           </p>
    //         </div>


    //         <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    //           <h5 className="text-uppercase">Links</h5>

    //           <ul className="list-unstyled mb-0">
    //             <li>
    //               <a href="#!" className="text-white">Link 1</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 2</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 3</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 4</a>
    //             </li>
    //           </ul>
    //         </div>


    //         <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    //           <h5 className="text-uppercase mb-0">Links</h5>

    //           <ul className="list-unstyled">
    //             <li>
    //               <a href="#!" className="text-white">Link 1</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 2</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 3</a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">Link 4</a>
    //             </li>
    //           </ul>
    //         </div>

    //       </div>

    //     </div>



    //     <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    //       © 2020 Copyright:
    //       <a className="text-white" href="/"> HERFA</a>
    //     </div>

    //   </footer>

    // </section>

    <MDBFooter style={{ backgroundColor: " #252525" }} className="font-small">
      <MDBContainer fluid className="text-center text-md-left" style={{ display: "flex", justifyContent: "space-between"  }} >
        <MDBRow style={{ height: "180px", width: "100%" }}>
          {/* 
        <div className="col-lg-5 col-md-10 mb-4 mb-md-0">
           <h5 className="text-uppercase">H E R F A </h5>
  
           
          </div> */}
          <MDBCol md="3" >
            < h3 style={{ fontSize: "33px" }} className="title">H E R F A</ h3>

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


            < h4 style={{ marginLeft: "40px", fontSize: "24px" }} className="title">Links</ h4>
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
          < div style={{ marginLeft: "35%" }}>


            &copy; {new Date().getFullYear()} Copyright:  <a href="/">H E R F A </a>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;
