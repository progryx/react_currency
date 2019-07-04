import React from "react";
import {addProductCount} from "../../redux/product-reducer";


class Products extends React.Component {
   debugger;
    render () {
    return (
        <div className='container'>
            <div className="row">
                {
                    this.props.products.map(p =>
                        <div className={"card col-3"} style={{width: '18rem', margin: '5px'}}>
                            <img className={"card-img-top"} src={p.img}/>
                            <div className={"card-body"}>
                                <h5 className={"card-title"}>{p.name}</h5>
                                <div className={'form-group'}>
                                    <div className={"form-group row"}>Price: {p.price}</div>
                                    <div className={'form-group row'}>
                                        <label htmlFor="quantity">Quantity:</label>
                                        <input className={'form-control'} name='quantity' placeholder='0'  type="number" min='1' max='10' step='1'/>
                                    </div>
                                    <div className={'form-group row'}>
                                        <button onClick={ () => {
                                            //props.addToCart(p.id,input)
                                        } } className={'btn btn-primary'}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )}
};

export default Products;