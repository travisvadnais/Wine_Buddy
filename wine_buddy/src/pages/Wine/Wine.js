import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import { Button } from 'reactstrap';
import './Wine.css';
import prices from '../../pages/Wine/prices';
import wines from '../../pages/Wine/wines';
import winetypes from '../../pages/Wine/winetypes';
import foods from '../../pages/Wine/foods';
import DropDown from '../../components/DropDown';



import API from "../../utils/API";

class Wine extends Component {
    constructor(props) {
        super(props);
            // Set up the state
            this.state = {
                foodSelection:"",
                wineSelection:"",
                priceSelection:""
            }
            //In order to call functions, you have to bind them to the constructor
            this.handleChange = this.handleChange.bind(this);
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
    } 

    //Set state when client selects a food
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    };

    // Set state when client clicks find my wine
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("button clicked!")
        API.getWine(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };
    
    render() {
        console.log(this.state);
        return (
            <div>
                <Nav />
                {/* Don't mess w/ this function.  You need the 'event' in both places to prevent
                    page from refreshing */}
                <div id="form_container">
                    <label>
                        Let's find you a wine based on what you're eating, wine preference, and price range!
                    </label>
                        <br />
                    <DropDown name="foodSelection" placeholder="Select Your Food" onChange={this.handleChange} items={foods}/>
                    <br />

                    {this.state.foodSelection && <DropDown name="wineSelection" placeholder="Select Your Wine" 
                    onChange={this.handleChange} items={wines[this.state.foodSelection]}/>}
                    <br />
                    
                    {this.state.wineSelection && <DropDown name="priceSelection" placeholder="Select Your Price Range" 
                    onChange={this.handleChange} items={prices}/>}
                    <br />
                    <Button
                                        color="danger"
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                        size="large">
                                        Find My Wine!
                                    </Button>
                    
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