import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailedObj } from "../../store/productsStore/productsSlicer"
import { Card, CardDeck } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Rating} from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {navLink} from "react-router-dom"


import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdbreact";
import { CenterFocusStrong } from "@material-ui/icons";

const labels = {
    0.5: 'Useless',
    1: 'Useless +',
    1.5: 'Poor',
    2: 'Poor +',
    2.5: 'Ok',
    3: 'Ok +',
    3.5: 'Good',
    4: 'Good +',
    4.5: 'Excellent',
    5: 'Excellent +',
};
const action = (
    <Button color="#333333" size="small">
        <FavoriteIcon />
    </Button>
);

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
});

const useStyleReview = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        '& > * + *': {
            marginTop: theme.spacing(2),

        },

    },
}));


const Details = props => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const classRev = useStyleReview();

    const { id } = props.match.params;
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
                <section className="main-banner" style={{
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
                            <h1>Products Details</h1>
                        </div>

                    </div>
                </section>
            </header>

            <Container>
                <Row style={{ margin: "auto", alignItems: "center", display: "flex", justifyContent: "space-around" }}>
                    <Col xs={6} md={4} >
                        <div style={{ display: "flex", flexDirection: "column " }}>
                            <Image src="https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=926&q=80" rounded style={{ overflow: "hidden", height: 300, paddingTop: "15px" }} />
                            <span style={{ display: "flex", flexDirection: "row", fontFamily: "Handlee", marginTop: 3 }}>
                                <Rating
                                    name="hover-feedback"
                                    value={props.product.rating}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                />
                                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                            </span>
                        </div>
                    </Col>
                    <Jumbotron style={{ width: 380, height: 305, fontFamily: "Handlee" }}>
                        <h1>{props.product.name}</h1>
                        <hr />
                        <p>
                            {props.product.description}
                        </p>



                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                            <navLink to="/reviews"> <MDBIcon icon="comments" className="mr-1" /></navLink>
                                {props.product.reviews ? props.product.reviews.length : 'No Reviews'}
                                
                            </div>

                            <div>
                                <MDBIcon icon="dollar-sign" className="mr-1" />
                                {props.product.price}
                            </div>
                        </div>
                        <br />
                        <div>
                            Count in Stock: {props.product.countInStock}
                        </div>








                    </Jumbotron>
                </Row>
            </Container>
            <div className={classRev.root} style={{ margin: 'auto' }}>
                <SnackbarContent style={{ backgroundColor: "#929FBA", fontFamily: "Handlee", color: "#333" }} action={action}
                    message={props.product.reviews ? props.product.reviews.map(rev => rev.comment) : " "}
                />
            </div>

        </>

    )

}

const mapStateToProps = (state) => ({
    product: state.products.productDetail,
});

export default connect(mapStateToProps)(Details);


