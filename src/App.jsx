import React from 'react';
import Product from './component/Product.jsx'
import UserInformation from './component/UserInformation.jsx';

class App extends React.Component {
   render() {
    var phones = [
            {
                name : "Iphone X",
                price : "29.000.000",
                image : "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
                existed: 5,
                status : true
            },
            {
                name : "Iphone 8",
                price : "19.000.000",
                image : "http://cdn07.happymobile.vn/media/images/2018/01/iphone8-plus-gold.jpg",
                existed: 20,
                status : true
            },
            {
                name : "Samsung S8",
                price : "22.000.000",
                image : "https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png",
                existed: 15,
                status : true
            },
            {
                name : "Bphone 2017",
                price : "9.700.000",
                image : "https://cdn.tgdd.vn/Products/Images/42/75001/bkav-bphone-2-hero-400x460.png",
                existed: 11,
                status : true
            }
        ];

        var elements = phones.map((phone, index) => {
            if(phone.status){
                return <Product
                        key={index} 
                        name={phone.name}
                        price={phone.price}
                        image={phone.image}
                        existed={phone.existed}
                        />

            }
        });

      return (
         <div>
             <div className="panel panel-default">
                <div id="product" align="center">
                    <h1>Phone Store</h1>
                    {elements}
                </div>
             </div>
         </div>
      );
   }
}
export default App;