import React from "react";
import Cart from "./Cart";
import {compose} from "redux";
import {connect} from "react-redux";


class CartContainer extends React.Component {
    render () {
        return (
            <Cart />
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

export default compose(
    connect(mapStateToProps,
        {

        })
)(CartContainer);