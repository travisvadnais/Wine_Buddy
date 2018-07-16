import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import './Wine.css';
import foodPairs from '../../pages/Wine/foods.json';
import Dropdown from '../../components/Dropdown';
import API from "../../utils/API";

//Store all the customer's choices from the forms
let customerChoices = [];

//The customer will have these options in the second form.
let wineList =[];


class Wine extends Component {
    constructor(props) {
        super(props);
            // Set up the state
            this.state = {
                formArea: <Dropdown id="food_options" name="food" placeholder="Select The Star of Your Dish!" onChange={this.handleFoodSelectionChange} />,
                Food: "Food: Select a Food!",
                Wine_Type: "Wine Type: Select a Wine!",
                Wine_Price: "Wine Price: Select a Price!"
            }
            //In order to call functions, you have to bind them to the constructor
            this.handleFoodSelectionChange = this.handleFoodSelectionChange.bind(this);
            this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
            this.getWineTypesFromAPI = this.getWineTypesFromAPI.bind(this);
    } 
    
    handleFoodSubmit = (event, Food) => {
        event.preventDefault();
        //I used state to capture the selected food, but the string needed to be modified
        //To get rid of the "You're Eating", we need to take off the first 15 characters
        const myString = Food;
        const foodEntry = myString.substr(15);
        customerChoices.push(foodEntry);
        console.log(`customer choices are: ${customerChoices}`);
        //Nested functions.  Get the wine types, then get the wine list.
        this.getWineTypesFromAPI(foodEntry);
        //this.getWineList();
    };

    //This function will check the API for the list of wine TYPES that match the food
    getWineTypesFromAPI = (foodEntry) => {
        //We have to map through the API to get the list of wine options to present the user
        let wineGroups = [];
        let workingWineList = [];
        //First we're going to find the API entry that matches the user's food choice
        foodPairs.map(e => {
            if (e.food === foodEntry) {
                wineGroups = e.wines;
                return e.wines
            };
        });
        //Then we're going to push the wine keys of wine objects to a temp variable
        wineGroups.map(e => {
            workingWineList.push(Object.keys(e))
        })
        //Finally we'll loop through that array and grab their values
        workingWineList.map(e => {
            wineList.push(e);
        })
        console.log(`User wine choices are: ${wineList}`)
    };

    //Set state when client selects a food
    handleFoodSelectionChange = (event) => {
        this.setState({
            Food: `You're Eating: ${event.target.value}`
        });
    }

    render() {
        return (
            <div>
                <Nav />
                {/* Don't mess w/ this function.  You need the 'event' in both places to prevent
                    page from refreshing */}
                <div id="form_container">
                    <form onSubmit={(event)=>this.handleFoodSubmit(event, this.state.Food)}>
                        <label>
                            Let's find you a wine!
                            <br />
                            {/* The formArea will render the which part of the form you're on */}
                            {this.state.formArea}
                        </label>
                        <br />
                        {/* This is the "Next" button on the form */}
                        <input type="submit" value="Next" />
                    </form>
                </div>
                <div id="user_inputs">
                    <ol>
                        {/* We're going to keep the user updated as to what selections (s)he's made */}
                        <li>{this.state.Food}</li>
                        <li>{this.state.Wine_Type}</li>
                        <li>{this.state.Wine_Price}</li>
                    </ol>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Wine