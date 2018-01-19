import React from 'react';

class UserInformation extends React.Component {
    render() {
      return (
        <div>
          <table align="center">
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" name="" id="name" className="form-control" required="required"/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="email" name="" id="email" className="form-control" required="required"/>
                </td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>
                  <input type="text" name="" id="phone" className="form-control" required="required"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default UserInformation;