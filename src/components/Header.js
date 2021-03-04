import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from "axios"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1
    },
    appBarTransparent: {
        backgroundColor: 'transparent',
        color: "white",
        textDecoration: "none",

    },
    appBarSolid: {
        backgroundColor: '#C99A5C',
        color: "white"
    }, largeIcon: {
          width: 40,
          height: 40,
       
      
      }
}));

export default function ButtonAppBar() {
    const usersAPI = ' https://herfa-app.herokuapp.com/api/users';
    let [username, setUsername] = useState("")
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          
        >
            <MenuItem onClick={handleMenuClose}><NavLink to="/user-details">{JSON.parse(localStorage.getItem("userInfo")).name}</NavLink></MenuItem>
        </Menu>
    );

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const classes = useStyles();


    async function getUserInfo() {
        let result = await axios({
            method: 'get',
            url: `${usersAPI}/${JSON.parse(localStorage.getItem("userInfo"))._id}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("userinformation>>>>>>>>>>>",res.data.name)
            return res.data.name
        })
        console.log(result)
        setUsername(result)
    }

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        getUserInfo();
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar className={classes[navRef.current]} position="fixed" >
                <Toolbar>
                    <div>
                        <Typography className={classes.title} style={{ fontSize: "24px" }}>
                            H E R F A           </Typography>

        </div>
                    <div style={{display: "flex", justifyContent :"space-around" , margin :"auto", alignItems :"center", width: "93%", fontFamily : "Roboto" , fontSize: "20px"}}>
                        <div>

                            <a style={{ color: "white" }} href="/">Home</a>


                        </div>
                        <div id="navDropdown">
                            <div style={{ color: "white" }}>
                                <NavLink
                                    style={{ color: "white" }}
                                    to='/categories'
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onMouseOver={handleToggle}
                                >
                                    Categories
                                 </NavLink>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes[navRef.current]}>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                            className={classes[navRef.current]}
                                        >
                                            <Paper className={classes[navRef.current]}>
                                                <ClickAwayListener onMouseOver={handleClose} >
                                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleClose}>Food</MenuItem>
                                                        <MenuItem onClick={handleClose}>Clothes</MenuItem>
                                                        <MenuItem onClick={handleClose}>Handicraft</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                        </div>


                        <div >
                            <NavLink style={{ color: "white" }} to='/about-us'>About Us</NavLink>
                        </div>

                        <div >
                            <NavLink style={{ color: "white" }} to='/our-team'>Our Team</NavLink>
                        </div>
                
                        <div  className={classes[navRef.current]}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onMouseOver={handleProfileMenuOpen}
                                className={classes[navRef.current]}
                                color="inherit"
                               
                               
                            >
                                <AccountCircle className={classes.largeIcon} />
                            </IconButton>
                        </div>
                    </div>






                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {renderMenu}
        </div >
    );
}





