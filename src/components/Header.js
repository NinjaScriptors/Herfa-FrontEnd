import React from 'react';
import '../style/header.scss'
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
        width: 200,
        color: "white",
        backgroundColor: "transparent",

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        backgroundColor: "transparent",
        color: "white"
    },
    iconButton: {
        padding: 10,
        color: "white"
    },
    divider: {
        height: 20,
        margin: 4,
    },
}));


const Header = (props) => {
    const classes = useStyles();

    return (
        <>
           
                    <header className="index-header">
                        <nav>
                            <Paper component="form" className={classes.root}>

                                <InputBase
                                    className={classes.input}
                                    placeholder="Search about?"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />

                            </Paper>
                            <div className="nav-bar">
                                <a className="nav-link" href="/">Home</a>
                            
                                <NavLink className="nav-link" to='/about-us'>Our Story</NavLink>

                           
                           
                            <a className="nav-link" href="/">Products</a>
                            <div className="nav-dropdown" id="navDropdown">
                                <a className="nav-link dropdown-title" href="/">Categories</a>
                                <div className="nav-dropdown-links" id="navDropdownLinks">
                                    <div className="inner-div">
                                        <a className="nav-link" href="/">Food</a>

                                        <a className="nav-link" href="/">Gift</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </header>
                
            </>

        )
    }



export default Header;