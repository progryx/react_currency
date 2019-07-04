import React from "react";
import Products from "./Products";
import {compose} from "redux";
import {connect} from "react-redux";
import {addProductCount, addToCart, getProducts} from "../../redux/product-reducer";


class ProductsContainer extends React.Component {

    state = {
        currentCount: 0
    };

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
        //debugger;
        this.props.getProducts();

    }

    getInputRef = (node) => {
        debugger;
        //return this.setState({currentCount: e.target.value}); // catch
    }


    render() {
        return ( <Products
            {...this.props}
            handleChange={this.handleChange}
        /> )
    }
}

let mapStateToProps = (state) => {
   // debugger;
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