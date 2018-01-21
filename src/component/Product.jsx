import React from 'react';
import UserInformation from './UserInformation.jsx';
import ReactDOM from 'react-dom'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.showInfo = this.showInfo.bind(this);
        this.state = {
            total: this.props.totalItems
        };
    }

    showInfo() {
        ReactDOM.render(<UserInformation nameProduct={this.props.name} totalBuy={this.state.total}/>, document.getElementById('info'));
    }

    changeNumber(flag) {
        if (flag && (this.state.total < this.props.existed)) {
            this.state.total = this.state.total + 1;
            this.setState(this.state);
        } else if (!flag && this.state.total > 0) {
            this.state.total = this.state.total - 1;
            this.setState(this.state);
        }
    }
    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src={this.props.image} alt={this.props.name} />
                        <div className="caption">
                            <b><bs3-h3 id="product_name">{this.props.name}</bs3-h3></b>
                            <br />
                            <h5 id="product_existed">Products existed: <b>{this.props.existed}</b></h5>
                            <h3 id="product_price">{this.props.price} Vnđ</h3>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><button type="button" className="btn btn-default" onClick={() => this.changeNumber(false)}>-</button></td>
                                    <td><input type="button" className="btn btn-default" value={this.state.total} disabled /></td>
                                    <td><button type="button" className="btn btn-default" onClick={() => this.changeNumber(true)}>+</button></td>
                                    <td><button type="button" className="btn btn-success" onClick={this.showInfo}>Buy</button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

Product.defaultProps = {
    totalItems: 0
}
export default Product;