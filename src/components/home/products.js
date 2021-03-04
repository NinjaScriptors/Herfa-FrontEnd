import React from 'react';
import { Container, GridList, GridListTile, GridListTileBar, IconButton, } from '@material-ui/core';
import tileData from './products-images';
import useStyles from "./productsBarStyle";
import StarBorderIcon from '@material-ui/icons/StarBorder';


function Products(){
    const classes = useStyles();
    return (
        <section id="products-section">
        <Container>
            <h3 style ={{    fontWeight: "400",
    fontSize:"34px"}}>TOP SELLING PRODUCTS</h3>
            <hr />
            <div className={classes.root}>
                <GridList cellHeight={300} spacing={15} className={classes.gridList}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    </section>
    )
}

export default Products;