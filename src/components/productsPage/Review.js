
import React, { useEffect } from "react";
import { form, TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Container from '@material-ui/core/Container'
import "../../style/product.scss";
import axios from "axios"
import cookie from 'react-cookies';
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from 'react-loading-skeleton';
import { Redirect } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export const Reviews = (props) => {
    const classes = useStyles();

    let [comment, setComment] = React.useState("");
    let [reviews, setRevewis] = React.useState([])
    useEffect(async () => {
        getReviews()
    }, [])


    async function getReviews() {
        let reviews2 = await axios(`https://herfa-app.herokuapp.com/api/products/${props.id}`, {
            method: "get",
            // data: JSON.stringify(reviewBody),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.load('auth')}`
            }
        })
        setRevewis(reviews2.data.reviews)
        console.log(reviews2.data.reviews)
    }
    async function handleReveiwSubmittion(e) {
        e.preventDefault();
        e.target.reset()
        let reviewBody = {
            name: JSON.parse(localStorage.getItem("userInfo")).name,
            rating: props.rating || 5,
            comment: comment
        }
        console.log("ggggggggggggggggggggggggggggggggggggggg", reviewBody)
        console.log("productId", props.id)
        await axios(`https://herfa-app.herokuapp.com/api/products/${props.id}/reviews`, {
            method: "post",
            data: JSON.stringify(reviewBody),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.load('auth')}`
            }
        }).then(() => {
            getReviews()
        })
    }



    return (

        <Container>
            {/* {props.product.reviews ? props.product.reviews.map(rev => rev.comment) : " "} */}
            <ul id="comments-list" className="comments-list" style={{ margin: "auto" }}>
                <div>



                </div>
                {reviews ? reviews.map((rev, idx) => {

                    // console.log("props.user ---> !!",)
                    return <li key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <div className="comment-main-level" >
                            <div className="comment-avatar" style={{ marginRight: " 20px" }}><img src={props.image ? props.image : 'https://www.fluidogroup.com/wp-content/uploads/2018/09/user-icon-silhouette-ae9ddcaf4a156a47931d5719ecee17b9.png' || <Skeleton />} alt="" /></div>
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name by-author">{rev.name ? rev.name : "user" || <Skeleton />}</h6>
                                    <i className="fa fa-heart"></i>
                                </div>
                                <div className="comment-content">
                                    {rev.comment || <Skeleton />}
                                </div>
                            </div>
                        </div>
                    </li>

                }) : " " || <Skeleton />}

            </ul>
            <div>

                <form style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "0px 182px" }} onSubmit={handleReveiwSubmittion} className={classes.root} noValidate autoComplete="off">
                    <TextField style={{ width: "55%", marginLeft: "20px" }} onChange={(e) => setComment(e.target.value)} id="standard-basic" label="Share Your Experience " />
                    <Button type="submit" size="large" style={{ backgroundColor: '#C99A5C', color: "white", width: "150px", alignItems: "center", marginRight: "159px" }}>Add Review</Button>
                </form>


            </div>
        </Container>
    );
}
