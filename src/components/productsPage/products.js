import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { getRemoteData } from '../../store/productsStore/productsSlicer';
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from '@material-ui/core/Container'
import Skeleton from 'react-loading-skeleton';

import {

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



const Product = props => {
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

                            return <MDBCol key={idx} md="4"> <MDBCard cascade style={{ fontFamily: "Roboto", marginTop: "12px" }}>
                                <MDBCardImage
                                    cascade
                                    className="img-fluid"
                                    overlay="white-light"
                                    hover
                                    style={{ height: "200px", width: "100%", overflow: "hidden" }}
                                    src={product.image}
                                />
                                <MDBCardBody cascade style={{ fontFamily: "Roboto" }}>
                                    <MDBCardTitle fontFamily="Roboto">{product.name ||  <Skeleton /> }</MDBCardTitle>
                                    <hr />
                                    <MDBCardText style={{ height: "50px" }}>
                                        {product.description || <Skeleton count={5}/> }
                                    </MDBCardText>
                                </MDBCardBody>
                                <div style={{ backgroundColor: "#252525" }} className="rounded-bottom text-center pt-3">
                                    <ul className="list-unstyled list-inline font-small" style={{ color: "white" }}>

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
                                    <Card.Footer style={{ backgroundColor: "#C99A5C", color: "white" }}>
                                        <small className="text-muted" style={{ textAlign: "center", alignItems: "center", color: "white" }}>  <Link style={{ cursor: "pointer", fontFamily: "Roboto", textAlign: "center", alignItems: "center", color: "white", fontSize: "18px", }} to={`/details/${product._id}`}>View Details</Link></small>
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
