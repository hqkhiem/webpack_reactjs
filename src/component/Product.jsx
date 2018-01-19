import React from 'react';
import UserInformation from './UserInformation.jsx';

class Product extends React.Component {
    constructor(props){
        super(props);
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(){
        console.log(this.props.name);
    }
    render() {
        return (
        <div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" align="center">
                <div className="thumbnail">
                    <img src={this.props.image} alt={this.props.name}/>
                    <div className="caption">
                        <bs3-h3 id="product_name">{this.props.name}</bs3-h3>
                        <br />
                        <h3 id="product_price">{this.props.price} Vnđ</h3>
                    </div>
                </div>
        
                <button type="button" className="btn btn-success" onClick={this.showInfo}>
                    Buy
                </button>
            </div>
        </div>
        );
    }
}
export default Product;