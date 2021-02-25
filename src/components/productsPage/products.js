import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { getRemoteData } from '../../store/productsStore/productsSlicer';
import { Card, CardDeck } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from '@material-ui/core/Container'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

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


const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});


// import { updateInstockdecrement, deleteProduct } from '../rtk-store/cartSlicer'


const Product = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getRemoteData());
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
        <Container>
            <section>
            <MDBRow style = {{ alignItems : "center", display : "flex",justifyContent : "space-between", alignItems : "center"}} >
                {props.filetredProduct.map((product, idx) => {
               
                    return  <MDBCol md="4"> <MDBCard cascade style = {{fontFamily:"Handlee" }}>
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            overlay="white-light"
                            hover
                            src={product.image}
                        />
                        <MDBCardBody cascade style={{ fontFamily: "Handlee" }}>
                            <MDBCardTitle fontFamily= "Handlee">{product.name}</MDBCardTitle>
                            <hr />
                            <MDBCardText>
                                {product.description}
                            </MDBCardText>
                        </MDBCardBody>
                        <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                            <ul className="list-unstyled list-inline font-small">

                                <li className="list-inline-item pr-2">
                                    <a href="#!" className="white-text">
                                        <MDBIcon far icon="comments" className="mr-1" />
                                        {product.reviews ? product.reviews.length : 'No Reviews'}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <MDBIcon icon="dollar-sign" className="mr-1" />
                                    {product.price}
                                </li>
                                <li className="list-inline-item pr-2">
                                    Count in Stock: {product.countInStock}
                                </li>

                            </ul>
                            <Card.Footer >
                         <small className="text-muted" style= {{textAlign:"center", alignItems:"center", color: "#333" , }}>  <Link style ={{cursor: "pointer", fontFamily: "Handlee",textAlign:"center", alignItems:"center",  color: "#333", fontSize: "18px" }} to={`/details/${product._id}`}>View Details</Link></small>
                        </Card.Footer>
                        </div>
                    </MDBCard>
                </MDBCol>
                     })}
            </MDBRow>
    
            </section>
            </Container>
        </>
    )
}


const mapStateToProps = state => ({
    myProducts: state.products.products,
    filetredProduct: state.products.filetredProduct,
    myProductsInCart: state.products.productsInCart,

});

// const mapDispatchToProps = (dispatch) => ({
//     delete: () => dispatch(deleteProduct()),
//     update: (obj) => dispatch(updateInstockdecrement(obj))
// })

export default connect(mapStateToProps)(Product);

                // <CardDeck style= {{ marginTop: "30px" , width: "75%", margin: "auto"}}>

                // {props.filetredProduct.map((product, idx) => {
                //     return <Card style={{display: "flex", flexDirection: "column" , justifyContent :"space-between", marginTop: "20px"}}><Card.Body>
                //         <Card.Text style={{ textAlign: 'center', fontFamily: "Handlee" , color:"#333" , fontSize:"24px" }}>{product.name}</Card.Text></Card.Body><Card.Footer>
                //             <small className="text-muted" style= {{textAlign:"center", alignItems:"center"}}>  <Link style ={{cursor: "pointer", fontFamily: "Handlee",textAlign:"center", alignItems:"center" }} to={`/details/${product._id}`}>View Details</Link></small>
                //         </Card.Footer></Card>
                // })}
                // </CardDeck>
