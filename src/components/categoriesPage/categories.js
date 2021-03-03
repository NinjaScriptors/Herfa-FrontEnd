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
import "./input.css"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        margin: "auto",
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

                <section className="main-categories" >
                    <div className="parallex">
                    </div>
                    <div className="row">
                        <div className="title">
                            <h1>Categories</h1>
                        </div>

                    </div>
                    <div >
                        <Paper component="form" className={classes.root} style={{ alignItems: "center", backgroundColor: "transparent", border: "1px solid white", marginTop: "-140px" }}>

                            <InputBase
                                className={classes.input}
                                placeholder="Search about?"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                style={{ textAlign: "center" }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical" />

                        </Paper>
                    </div>
                    <section style={{ width: "52%", display: "flex", justifyContent: "space-evenly", margin: "auto", color: "white", marginTop: "-80px" }}>

                        {props.activeOne.categories.map((category, idx) => {

                            return <div className="radiogroup">
                              <input className="state" type="radio" name="app" id={idx} key={idx} value={category}  onClick={() => { props.activeProduct(category) }} href="/categories" />
                              <label className="label" for={idx}>
                                <div className="indicator"></div>
                                <span className="text">{category.toUpperCase()}</span>
                              </label>
                            </div>
    
                        })}


                    </section>
                </section>
            </header>
            <br />



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
