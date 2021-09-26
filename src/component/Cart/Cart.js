import React from 'react';
import './Cart.css'


const Cart = (props) => {




    const { cart } = props;




    // const totalReducer = (previous, programmer) => previous + programmer.Salary
    // const total = cart.reduce(totalReducer, 0);

    let totalQuantity = 0;
    let total = 0;
    for (const program of cart) {
        if (!program.quantity) {
            program.quantity = 1;
        }
        total = total + program.Salary * program.quantity;
    }
    return (
        <div className="calculation">
            <h3><i class="fas fa-user-check"></i>Programmer Added: {cart.length}</h3>
            <ul>{cart.map((programmer) => (<li>{programmer.name}</li>))}
            </ul>
            <h4>Total Cost: ${total}</h4>
            <button className="btn-buy">Buy Now</button>

        </div>
    );
};

export default Cart;