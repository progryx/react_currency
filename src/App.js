import React, { Component } from 'react';
import ProductsContainer from "./components/Products/ProductsContainer";
import {Route} from "react-router-dom";


//styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import CartContainer from "./components/Cart/CartContainer";

const App = (props) => {
    return (
        <div className='container'>
            <div className="col-12">
                <Route path="/" render ={ () => <ProductsContainer/>  }/>
                <Route path="/cart" render ={ () => <CartContainer/>  }/>

            </div>
        </div>
    )
};

export default App;