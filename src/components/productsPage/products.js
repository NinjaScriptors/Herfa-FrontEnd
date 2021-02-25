import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { getRemoteData } from '../../store/productsStore/productsSlicer';
// import { updateInstockdecrement, deleteProduct } from '../rtk-store/cartSlicer'

const useStyles = makeStyles({

    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


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
            <section>
                {props.filetredProduct.map((product, idx) => {
                    return <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} key={idx} color="textSecondary" gutterBottom>
                                {product.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/details/${product._id}`}>View Details</Link>
                        </CardActions>
                    </Card>
                })}
            </section>
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
