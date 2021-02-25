import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { active, getRemoteCategories } from "../../store/categoriesStore/categoriesSlicer";
import { Link, Typography, Button } from '@material-ui/core'
import { activeProduct } from '../../store/productsStore/productsSlicer'
import * as actions from '../../store/actionsPC/actions';
import { Card, CardDeck } from 'react-bootstrap'
import about3 from '../../assets/about3.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 550,
        color: "white",
        backgroundColor: "#333333",

    },
    input: {
        marginLeft: theme.spacing(1),
        alignItems: "center",
        flex: 1,
        backgroundColor: "transparent",
        color: "white"
    },
    iconButton: {
        padding: 10,
        color: "white",
        alignItems: "center",
    },
    divider: {
        height: 20,
        margin: 4,
    },
}));



const ActiveCategories = props => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {

        const fetchData = async () => {
            await dispatch(getRemoteCategories());
        };
        fetchData();
    }, [dispatch]);
    return (
        
        <>
        
            <Paper component="form" className={classes.root} style={{alignItems: "center" , margin: "auto"}}>

                <InputBase
                    className={classes.input}
                    placeholder="Search about?"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    style={{textAlign: "center" , margin: "auto"}}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />

            </Paper>
            <br />
            <section>
                <CardDeck style={{ width: "85%", margin: "auto" }}>
                    {props.activeOne.categories.map((category, idx) => {

                        return <Card style={{ width: '550rem' }} onClick={() => { props.activeProduct(category) }}><Card.Body> <Card.Img variant="top" style={{ margin: 'auto', textAlign: 'center', cursor: "pointer" }} src={about3} /><Card.Text style={{ marginTop: "10px", textAlign: 'center', cursor: "pointer", fontFamily: "Handlee" }} key={idx} value={category} onClick={() => props.active(category)} href="/categories">{category.toUpperCase()} </Card.Text></Card.Body></Card>
                    })}
                </CardDeck>

            </section>


        </>
    )
}

const mapStateToProps = state => ({

    active: state.categories.ActiveCategories,
    activeOne: state.categories,

});
const mapDispatchToProps = (dispatch, getState, string) => ({
    active: (string) => dispatch(active(string)),
    activeProduct: (string) => dispatch(activeProduct(string))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategories)