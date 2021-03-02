import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { getRemoteData } from '../../store/userStore/userSlicer';

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


const User = props => {
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
                {props.filetredUser.map((user, idx) => {
                    return <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} key={idx} color="textSecondary" gutterBottom>
                                {user.name}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Link to={`/user-details/${user._id}`}>View Details</Link>
                        </CardActions> */}
                    </Card>
                })}
            </section>
        </>
    )
}


const mapStateToProps = state => ({
    // myUsers: state.users.users,
    filetredUser: state.users.users,
    // myProductsInCart: state.products.productsInCart,

});

// const mapDispatchToProps = (dispatch) => ({
//     delete: () => dispatch(deleteProduct()),
//     update: (obj) => dispatch(updateInstockdecrement(obj))
// })

// const mapDispatchToProps = (dispatch, getState) => ({
//     getUserInfo: (userInfo) => dispatch(updateUserDetails(userInfo))
// })

export default connect(mapStateToProps)(User);
