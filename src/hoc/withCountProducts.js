import React from 'react'
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    products: state.productPage.products
});

export const withCountProducts = (Component) => {

    class inputComponent extends React.Component {


        render() {
           return <Component {...this.props} />
        }
    }

    let ConnectedComponent = connect(mapStateToProps)(inputComponent);

    return ConnectedComponent
}