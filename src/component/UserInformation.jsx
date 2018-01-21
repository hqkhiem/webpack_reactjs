import React from 'react';

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.getInfo = this.getInfo.bind(this);
  }
  getInfo(){
    console.log(this.props.nameProduct);
    console.log(this.props.totalBuy);
    console.log(this.refs.name.value);
  }
  render() {
    return (
      <div className="border" align="center">
          <h2>Input Your Information</h2>
          <table align="center" className="border">
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" name="" id="name" className="form-control" required="required" ref="name"/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="email" name="" id="email" className="form-control" required="required" ref="email" />
                </td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>
                  <input type="text" name="" id="phone" className="form-control" required="required" ref="phone" />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="right">
                  <button type="button" className="btn btn-danger" onClick={this.getInfo}>Confirm</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
export default UserInformation;