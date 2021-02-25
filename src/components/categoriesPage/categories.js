import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { active,  getRemoteCategories  } from "../../store/categoriesStore/categoriesSlicer";
import { Link, Typography, Button } from '@material-ui/core'
import { activeProduct } from '../../store/productsStore/productsSlicer'
import * as actions from '../../store/actionsPC/actions';

const ActiveCategories = props => {
    const dispatch = useDispatch();
    useEffect(() => {

        const fetchData = async () => {
            await dispatch(getRemoteCategories());
        };
        fetchData();
    }, [dispatch]);
    return (
        <>
            <div style={{ fontSize: '24px' }}>
                Browse Our Categories
        </div>
            <br />
            <section>
                <Typography>

                    {props.activeOne.categories.map((category, idx) => {

                        return <Button onClick={() => { props.activeProduct(category) }}><Link style={{ color: "#2E3B55", padding: "2px", magginRight: "25px" }} key={idx} value={category} onClick={() => props.active(category)} href="#">{category.toUpperCase()} </Link></Button>

                    })}



                </Typography>
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