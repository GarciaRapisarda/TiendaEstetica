import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [detail, setItem] = useState([]);
    const producto = [{
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    }]
    

    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
    }, 2000);
})
useEffect(() => {
        promise.then((detail) => {
            setItem(detail);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);
   
      
    return (
        <div>
            <ItemDetail item = {detail} />
        </div>
    );
};

export default ItemDetailContainer