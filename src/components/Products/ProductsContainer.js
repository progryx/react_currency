import React from "react";
import Products from "./Products";
import {compose} from "redux";
import {connect} from "react-redux";
import {addProductCount, addToCart, getProducts} from "../../redux/product-reducer";


class ProductsContainer extends React.Component {

    state = {
        count: 0
    };

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
        //debugger;
        this.props.getProducts();

    }


    render() {
        return ( <Products
            {...this.props}
            count={this.state.count}
        /> )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products
    }
};


export default compose(
    connect(mapStateToProps,
        {
            getProducts,
            addToCart,
            addProductCount
        })
)(ProductsContainer);