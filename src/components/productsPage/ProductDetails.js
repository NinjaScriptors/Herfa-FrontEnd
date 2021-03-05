import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailedObj } from "../../store/productsStore/productsSlicer"

import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../../style/product.scss";
import { Link } from 'react-router-dom';


import {
    MDBIcon,
} from "mdbreact";
import cookie from 'react-cookies';

// const labels = {
//     0.5: 'Useless',
//     1: 'Useless +',
//     1.5: 'Poor',
//     2: 'Poor +',
//     2.5: 'Ok',
//     3: 'Ok +',
//     3.5: 'Good',
//     4: 'Good +',
//     4.5: 'Excellent',
//     5: 'Excellent +',
// };

// const useStyles = makeStyles({
//     root: {
//         width: 200,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: "center"
//     },
// });

// const useStyleReview = makeStyles((theme) => ({
//     root: {
//         maxWidth: 600,
//         '& > * + *': {
//             marginTop: theme.spacing(2),

//         },

//     },
// })
// );


const Details = props => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const { id } = props.match.params;
    cookie.save('pro-id', id);
    console.log('param', props.match.params)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(id));

        };
        fetchData();
    }, [dispatch]);


    return (
        <>
            <header>
                <section className="main-product" >
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>Product Details</h1>
                        </div>

                    </div>
                </section>
            </header>

            <Container>
                <Row style={{ margin: "auto", alignItems: "center", display: "flex", justifyContent: "space-around" }}>
                    <Col xs={6} md={4} >
                        <div style={{ display: "flex", flexDirection: "column " }}>
                            <Image src={props.product.image} rounded style={{ overflow: "hidden", height: 325, boxShadow: "0 0 20px #232323" }} />

                        </div>
                    </Col>
                    <Col style={{ width: 380, height: 305, fontFamily: "Roboto" }}>
                        <h1>{props.product.name}</h1>
                        <hr />
                        <div>

                            <h3 style={{ color: "#C99A5C" }}> <MDBIcon icon="dollar-sign" className="mr-0" />  {props.product.price}</h3>
                        </div>
                        <p style={{ fontSize: "18px" }}>
                            {props.product.description}
                        </p>

                        <br />

                        <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                            <div style={{ color: "#252525" }}>
                                <MDBIcon icon="comments" className="mr-3" style={{ width: "10px", height: "10px" }} />
                                {props.product.reviews ? props.product.reviews.length : 'No Reviews'}

                            </div>

                            Count in Stock: {props.product.countInStock}



                            <div>
                                <i className="far fa-edit" style={{ margin: "2px" }}>
                                    <Link style={{ cursor: "pointer", fontFamily: "Roboto", textAlign: "center", color: "#333", fontSize: "16px", }} to={`/details-update/${props.product._id}`}>Update</Link>
                                </i>
                            </div>
                        </div>
                        <br />



                        <div style={{ display: "flex", flexDirection: "row", fontFamily: "Roboto", marginTop: 3 }}>
                            <Rating
                                name="hover-feedback"
                                defaultValue={props.product.rating || 5}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                            />
                            {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                        </div>

                    </Col>
                </Row>
                {/* update */}

                {/* delete */}
                {/* <Link style ={{cursor: "pointer", fontFamily: "Roboto",textAlign:"center", alignItems:"center",  color: "black" , fontSize: "18px" ,}} to={`/details-delete/${props.product._id}`}>Delete Product</Link> */}

            </Container>
            <Container>
                {/* {props.product.reviews ? props.product.reviews.map(rev => rev.comment) : " "} */}
                <ul id="comments-list" className="comments-list" style={{ margin: "auto" }}>
                    {props.product.reviews ? props.product.reviews.map((rev, idx) => {

                        console.log("props.user ---> !!", props.user)
                        return <li key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <div className="comment-main-level" >
                                <div className="comment-avatar" style={{ marginRight: " 20px" }}><img src={props.user.image ? props.user.image : 'https://www.fluidogroup.com/wp-content/uploads/2018/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'} alt="" /></div>
                                <div className="comment-box">
                                    <div className="comment-head">
                                        <h6 className="comment-name by-author">{rev.name ? rev.name : "user"}</h6>
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <div className="comment-content">
                                        {rev.comment}
                                    </div>
                                </div>
                            </div>
                        </li>

                    }) : " "}

                </ul>
            </Container>

        </>

    )

}

const mapStateToProps = (state) => ({
    product: state.products.productDetail,
    user: state.users.userDetail
});

export default connect(mapStateToProps)(Details);




{/* <div className={classRev.root} style={{ margin: 'auto', paddingBottom : "20px" }}>
                <SnackbarContent style={{ backgroundColor: "#C99A5C", fontFamily: "Handlee", color: "#333" }} action={action}
                    message={props.product.reviews ? props.product.reviews.map(rev => rev.comment):"No Comment Yet !"}
                />
            </div> */}