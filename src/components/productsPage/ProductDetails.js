import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getDetailedObj } from "../../store/productsStore/productsSlicer"
import { form, TextField, Button } from '@material-ui/core';
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
import { Link, NavLink } from 'react-router-dom';
import { MDBIcon } from "mdbreact";
import cookie from 'react-cookies';
import { Reviews } from "./Review";
import ForumIcon from '@material-ui/icons/Forum';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
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

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));



const Details = props => {

    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    let [sellerobj, setSellerObj] = React.useState("")

    setTimeout(() => {
        setSellerObj(props.product.seller)
    }, 1000)
    const { id } = props.match.params;
    // cookie.save('pro-id', id);
    console.log('param', props.match.params)
    console.log("products ..........??? ", props.product)

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
                            <Image src={props.product.image || <Skeleton circle={true} height={325} width={50} duration={3} />} rounded style={{ overflow: "hidden", height: 325, boxShadow: "0 0 20px #232323" }} />

                        </div>
                    </Col>
                    <Col style={{ width: 380, height: 305, fontFamily: "Roboto" }}>
                        <h1 style={{ textAlign: "left" }}>{props.product.name || <Skeleton />}</h1>
                    <hr />
                    <div>

                        <h3 style={{ color: "#C99A5C" }}> <MDBIcon icon="dollar-sign" className="mr-0" />  {props.product.price || <Skeleton />}</h3>
                    </div>
                    <p style={{ fontSize: "18px" }}>
                        {props.product.description}
                    </p>

                    <br />


                    <div style={{ display: "flex", justifyContent: "space-between", width: "68%" }}>
                        <div style={{ color: "#252525" }}>
                            <MDBIcon icon="comments" className="mr-3" style={{ width: "10px", height: "10px" }} />
                            {props.product.reviews ? props.product.reviews.length : 'No Reviews'}

                        </div>

                            Count in Stock: {props.product.countInStock || <Skeleton />}



                        <div>

                            {/* { username !== "Log In" ?  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}> 
                                                        <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to={`/user-profile-update/${JSON.parse(localStorage.getItem("userInfo"))._id}`}>Update Profile {username}</NavLink></MenuItem> 
                                                        <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to="/">Log Out</NavLink></MenuItem> </MenuList>
                                                         :<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}> <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to="/sign-up">Sign Up</NavLink></MenuItem> </MenuList> } */}
                            <i className="far fa-edit" style={{ margin: "2px" }}>
                                <Link style={{ cursor: "pointer", fontFamily: "Roboto", textAlign: "center", color: "#333", fontSize: "16px", }} to={`/details-update/${props.product._id}` || <Skeleton />}>{"Update" || <Skeleton />}</Link>
                            </i>
                        </div>
                        </div>
                    <br />



                    <div style={{ position: "absolute", display: "flex", justifyContent: "space-between", flexDirection: "row", fontFamily: "Roboto", marginTop: 30 }}>
                        <Rating

                            name="hover-feedback"
                            value={props.product.rating || 5}
                            precision={0.5}
                            onChange={(event, newValue) => {

                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                        {/* {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                        <div style={{ position: "relative", left: 106, top: -15 }}>

                            {console.log("idddddddddddddddd", sellerobj ? sellerobj._id : "nothing")}
                            <NavLink to={`/chat/${sellerobj ? sellerobj._id : "nothing"}`}>
                                <Button
                                    style={{ backgroundColor: "#252525", color: "white" }}
                                    variant="contained"
                                    className={classes.button}
                                    endIcon={<ForumIcon style={{ width: 30, height: 30, color: "c99a5c", }} />}
                                >
                                    Chat With Seller
                                </Button>
                            </NavLink>
                        </div>
                    </div>

                    </Col>

        </Row>
            {/* update */}

            {/* delete */}
            {/* <Link style ={{cursor: "pointer", fontFamily: "Roboto",textAlign:"center", alignItems:"center",  color: "black" , fontSize: "18px" ,}} to={`/details-delete/${props.product._id}`}>Delete Product</Link> */}

        </Container >

        <Reviews id={id} reviews={props.product.reviews} image={props.user.image} rating={value} />

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