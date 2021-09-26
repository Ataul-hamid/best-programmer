import React, { useEffect, useState } from 'react';

import './Data.css'
import Programmer from '../Programmer/Programmer';
import Cart from '../Cart/Cart';

const Data = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./tools.JSON")
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, []);
    const handleAddToCart = (programmer) => {


        const newCart = [...cart, programmer];
        setCart(newCart);
    }
    return (
        <div className="data-container">
            <div className="programmer-container">
                {
                    programmers.map(programmer => <Programmer key={programmer.key} programmer={programmer}

                        handleAddToCart={handleAddToCart}></Programmer>)

                }



            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>


        </div>
    );
};

export default Data;