import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getDetailedObj } from "../../store/userStore/userSlicer";
import { NavLink } from 'react-router-dom';
import {
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    Button,
} from "@material-ui/core";



const useStyles = makeStyles({
    root: {
        marginTop: 100,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontFamily: 'Courier New',
        fontWeight: "bolder",
        color: '#2E3B55'
    },
    card: {
        marginTop: 50,
        width: 600,
        padding: 20,
    },
    media: {
        height: 450,
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttonStyle: {
        marginTop: 20,
        width: 600,
        backgroundColor: "#2E3B55",
        "&:hover": {
            background: "#c25744",
        },
        color: "#fff",
    },
});

const UserDetails = props => {
    const classes = useStyles();
    // const { id } = props.match.params;
    // console.log('param', props.match.params)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getDetailedObj(props.user._id));
        };
        fetchData();
    }, [dispatch]);

    return (

        <>

            <Container className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        title={props.user.name}
                        className={classes.media}
                        image={props.user.image ? props.user.image : 'https://www.fluidogroup.com/wp-content/uploads/2018/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png'}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h4">
                            name: {props.user.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            email: {props.user.email}
                        </Typography>
                    </CardContent>

                    <Typography gutterBottom variant="h5" component="h4">
                        Ratings: {props.user.seller ? props.user.seller.map(rev => rev.ratings) : 'No ratings yet'}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        Number of reviews: {props.user.seller ? props.user.seller.map(rev => rev.numReviews) : 'No Reviews'}
                    </Typography>
                </Card>
                <Button><NavLink to={`/user-profile-update/${props.user._id}`}>Edit Profile</NavLink></Button>
            </Container>
        </>

    );
}
const mapStateToProps = (state) => ({
    user: state.users.userDetail,
});

export default connect(mapStateToProps)(UserDetails);