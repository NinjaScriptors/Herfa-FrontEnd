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
            <MDBRow >
                {props.filetredProduct.map((product, idx) => {
               
                    return  <MDBCol md="4"> <MDBCard cascade style = {{fontFamily:"Roboto" }}>
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            overlay="white-light"
                            hover
                            style={{height: "200px" , width:"100%" , overflow : "hidden"}}
                            src={product.image}
                        />
                        <MDBCardBody cascade style={{ fontFamily: "Roboto" }}>
                            <MDBCardTitle fontFamily= "Roboto">{product.name}</MDBCardTitle>
                            <hr />
                            <MDBCardText style ={{height:"50px"}}>
                                {product.description}
                            </MDBCardText>
                        </MDBCardBody>
                        <div  style={{backgroundColor : "#252525" }} className="rounded-bottom text-center pt-3">
                            <ul className="list-unstyled list-inline font-small" style= {{ color: "white"}}>

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
                            <Card.Footer  style ={{ backgroundColor:"#C99A5C" , color: "white" }}>
                         <small className="text-muted" style= {{textAlign:"center", alignItems:"center", color: "white" }}>  <Link style ={{cursor: "pointer", fontFamily: "Roboto",textAlign:"center", alignItems:"center",  color: "white" , fontSize: "18px" ,}} to={`/details/${product._id}`}>View Details</Link></small>
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
  

});


export default connect(mapStateToProps)(Product);
