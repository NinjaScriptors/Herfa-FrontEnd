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
    }
}));

export default function ButtonAppBar() {

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

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}  style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin:"auto" , flexDirection: "row"}}>
                <Toolbar  >

                    <div >
                    <Typography className={classes.title} style={{ fontSize: "24px" }}>
                        H E R F A           </Typography>
                       <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin:"auto" , flexDirection: "row"}}>

                                <a style={{ color: "white" }} href="/">Home</a>
                          

                       </div>
                       <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin:"auto" , flexDirection: "row"}}>
                                <NavLink style={{ color: "white" }} to='/about-us'>Our Story</NavLink>
                           </div>
                           <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin:"auto" , flexDirection: "row"}}>

                                <a style={{ color: "white" }} href="/">Products</a>
                           </div >


                       
                                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin:"auto" , flexDirection: "row"}}  id="navDropdown">
                                    <div style={{ color: "white" }}>
                                        <NavLink
                                            style={{ color: "white" }}
                                            to='/'
                                            ref={anchorRef}
                                            aria-controls={open ? 'menu-list-grow' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                        >
                                            Categories
                                 </NavLink>
                                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={handleClose}>
                                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                <MenuItem onClick={handleClose}>Food</MenuItem>
                                                                <MenuItem onClick={handleClose}>Gift</MenuItem>
                                                                <MenuItem onClick={handleClose}>Hand Craft</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </div>
                                </div>

                        
                                <div  className={classes.search} >
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </div>
                                </div>


                    </div>


                </Toolbar>
            </AppBar>
        </div >
    );
}




// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import { NavLink } from "react-router-dom"
// const useStyles = makeStyles((theme) => ({
//     grow: {

//         flexGrow: 1,
//         justifyContent:"space-between", flexDirection:"row",
//         backgroundColor: "transparent"
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
//     sectionDesktop: {
//         backgroundColor: 'transparent',
//         boxShadow: 'none',
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',

//         },
//     },
//     sectionMobile: {
//         backgroundColor: 'transparent',
//         boxShadow: 'none',
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
// }));

// export default function PrimarySearchAppBar() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Food</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Gift</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >

//         </Menu>
//     );

//     return (
//         <div className={classes.grow}>
//             <AppBar  position="static" elevation={trigger ? 24 : 0}
//         style={{
//           backgroundColor: trigger ? "#fff" : "transparent",
//           boxShadow: trigger
//             ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
//             : undefined
//         }}>
//                 <Toolbar>

//                     <Typography className={classes.title} variant="h6" noWrap>
//                         H E R F A           </Typography>

//                         <div style={{display:'flex', alignItems:"center", justifyContent:"space-between" , margin: "auto", color :"#333"}} >
//                             <a style = {{color: "#333"}}className="nav-link" href="/">Home</a>
//                             <NavLink style = {{color: "#333"}} className="nav-link" to='/about-us'>Our Story</NavLink>
//                             <a  style = {{color: "#333"}} className="nav-link" href="/">Products</a>
//                             <div style = {{color: "#333"}} className="nav-dropdown" id="navDropdown" aria-label="show more"
//                                     aria-controls={mobileMenuId}
//                                     aria-haspopup="true"
//                                     onClick={handleProfileMenuOpen}
//                                     color="inherit">
//                                 <a style = {{color: "#333"}} className="nav-link dropdown-title"  href="/">Categories</a>

//                             </div>
//                     <div className={classes.search} > 
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </div>



//                     </div>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {renderMenu}
//         </div>
//     );
// }




