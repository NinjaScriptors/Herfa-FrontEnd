import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { active, getRemoteCategories } from "../../store/categoriesStore/categoriesSlicer";
import { activeProduct, setsearchProducts } from '../../store/productsStore/productsSlicer'
import * as actions from '../../store/actionsPC/actions';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
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

    let [item, setSearchItem] = useState("");

    function handlechange(e) {
        console.log(e.target.value)
        setSearchItem(e.target.value);
        setsearchProducts(item)
    }
    function handleSearchBarClick(e) {
        e.preventDefault();
        props.getSearchProducts(item)
    }





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
                                onChange={handlechange}
                                onSubmit={handleSearchBarClick}
                                className={classes.input}
                                placeholder="Search about?"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                style={{ textAlign: "center" }}
                            />
                            <IconButton onClick={handleSearchBarClick} type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical" />

                        </Paper>
                    </div>
                    <section style={{ width: "52%", display: "flex", justifyContent: "space-evenly", margin: "auto", color: "white", marginTop: "-80px" }}>

                        {props.activeOne.categories.map((category, idx) => {

                            return <div key={idx} className="radiogroup">
                                <input className="state" type="radio" name="app" id={idx} key={idx} value={category} onChange={() => { props.activeProduct(category) }} href="/categories" />
                                <label className="label" htmlFor={idx}>
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
    activeProduct: (string) => dispatch(activeProduct(string)),
    getSearchProducts: (name) => dispatch(actions.getSearchProducts(name))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategories)
