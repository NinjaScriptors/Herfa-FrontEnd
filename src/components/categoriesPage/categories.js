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
            <header>

            <section className="main-banner" style={{
                    backgroundImage: "../../assets/home-banner2.jpg",

                    height: "100%",
                    backgroundSize: "cover",
                    position: "relative",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    fontWeight: "100",
                    alignItems: "center"
                }}>
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>Categories</h1>
                        </div>

                    </div>
                <Paper component="form" className={classes.root} style={{ alignItems: "center", marginBottom: "340px" ,backgroundColor : "transparent" , border : "1px solid white"}}>

                    <InputBase
                        className={classes.input}
                        placeholder="Search about?"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        style={{ textAlign: "center"}}
                        />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />

                </Paper>
                        </section>
            </header>
            <br />
            <section style={{ width: "75%", display: "flex", justifyContent: "space-around", margin: "auto" }}>
                {props.activeOne.categories.map((category, idx) => {
                    return <div className="card w-25" >
                        <div style={{ textAlign: "center" }} key={idx} value={category} onClick={() => { props.activeProduct(category) }} href="/categories" class="card-body">
                            <h5 className="card-title">{category.toUpperCase()} </h5>

                            <a style={{ backgroundColor: '#C99A5C' }} href="#" className="btn">More</a>
                        </div>
                        <div className="card-footer text-muted">#Buy_Local</div>
                    </div>
                })}

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
