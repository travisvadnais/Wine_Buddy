import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import './Wine.css';
import Dropdown from '../../components/Dropdown';
import foodPairs from './foods.json';
import API from "../../utils/API";

const foods = [];

foodPairs.forEach(food => {
    foods.push(food.food);
});
console.log(foods);

class Wine extends Component {
    render() {
        return (
            <div>
                <Nav />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Let's find you a wine!
                        <br />
                        <Dropdown placeholder={"Select The Star of Your Dish!"} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <Footer />
            </div>
        );
    }
}

export default Wine