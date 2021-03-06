import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom"
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
    let [username, setUsername] = useState("")
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);




    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
        console.log(mobileMoreAnchorEl)
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
            <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "#333" }} to="/user-details">{username}</NavLink></MenuItem>
            {/* <MenuItem onClick={handleMenuClose}><NavLink  style={{ color: "#333" }} to="/user-profile-update/:id">Update Profile</NavLink></MenuItem> */}
        </Menu>
    );

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const classes = useStyles();


    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {

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


    let test = [];
    test.push(JSON.parse(localStorage.getItem("userInfo")))
    useEffect(() => {
        let name = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).name : "Log In";
        setUsername(name)
    }, test)

    return (
        <div className={classes.root}>
            <AppBar className={classes[navRef.current]} position="fixed" >
                <Toolbar>
                    <div>
                        <Typography className={classes.title} style={{ fontSize: "24px" }}>
                            H E R F A           </Typography>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", margin: "auto", alignItems: "center", width: "93%", fontFamily: "Roboto", fontSize: "20px" }}>
                        <div>

                            <a style={{ color: "white" }} href="/">Home</a>


                        </div>


                        <div >
                            <NavLink style={{ color: "white" }} to='/categories'>Categories</NavLink>
                        </div>

                        <div >
                            <NavLink style={{ color: "white" }} to='/about-us'>About Us</NavLink>
                        </div>

                        <div >
                            <NavLink style={{ color: "white" }} to='/our-team'>Our Team</NavLink>
                        </div>




                        <div id="navDropdown">
                            <IconButton
                                edge="end"
                                ref={anchorRef}
                                aria-label="account of current user"
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                // onMouseOver={handleProfileMenuOpen}
                                className={classes[navRef.current]}
                                color="inherit"
                            >
                                <AccountCircle className={classes.largeIcon} />
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes[navRef.current]}>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                            className={classes[navRef.current]}
                                        >
                                            <Paper className={classes[navRef.current]}>
                                                {/* <ClickAwayListener onClick={handleClose} > */}

                                                    {username !== "Log In" ? <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to={`/user-profile-update/${JSON.parse(localStorage.getItem("userInfo"))._id}`}>Update Profile {username}</NavLink></MenuItem>
                                                        <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to="/">Log Out</NavLink></MenuItem> </MenuList>
                                                        : <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}> <MenuItem onClick={handleMenuClose}><NavLink style={{ color: "white" }} to="/sign-up">Sign Up</NavLink></MenuItem> </MenuList>}

                                                {/* </ClickAwayListener> */}
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
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





