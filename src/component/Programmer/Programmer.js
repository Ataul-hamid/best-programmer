import React from 'react';
import './Programmer.css'

const Programmer = (props) => {


    const { name, Role, Age, Country, Salary, img } = props.programmer;

    return (
        <div className="programmer-style">
            <div className="programmer">
                <img width="200px" height="100px" src={img} alt="" />

                <h4>Name: {name}</h4>
                <h5>Role: {Role}</h5>
                <h6>Age: {Age}</h6>
                <h6>Country: {Country}</h6>
                <h6>Salary: {Salary}</h6>
                <button onClick={() => props.handleAddToCart(props.programmer)} className="btn-regular"><i class="fas fa-shopping-cart"></i> Add to cart</button><br />

                <i class="fab fa-facebook icon"></i>
                <i class="fab fa-twitter icon"></i>
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />





            </div>
        </div>
    );
};

export default Programmer;