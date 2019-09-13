import React from 'react';
import './App.css';

//TODO: add responsive-image class
const image = (source) => {
    return (<img src={source} className="responsive-image"/>);
}
const itemTitle = (title) => {
    return (<h2 className="product-title">{title}</h2>);
}
const price = (price) => {
    return (<div className="price">${price.toFixed(2)}</div>)
}

class SingleProduct extends React.Component {
    state = {
        product: {
            description: "Gummies",
            cost: 5.00,
            image: ""
        }
    }

    componentDidMount() {
        //add in way to get Id
        this.getProductFromServer();
    }

    getProductFromServer(productId) {
        fetch(`/api/products/{productId}`)
        .then(res => res.json())
        .then(product => this.setState({ product }));
    }

    render(){
        return (
            <div class="SingleProduct">
                <div>{image(this.state.product.image)}</div>
                <div className="ProductDetails">
                    {itemTitle(this.state.product.description)}
                    {price(this.state.product.cost)}
                </div>
            </div>
        );
    }

}

export default SingleProduct;