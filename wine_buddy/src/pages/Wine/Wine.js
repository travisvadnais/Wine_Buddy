import React, { Component } from "react";
import Nav from "../../components/Nav";
import SelectionCard from "../../components/SelectionCard";
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

      
    componentDidMount() {
        //this.loadWine();
    }
    //========================== API Call for Wine ===================================//
        //Alex's function//
    loadWine = () => {
        API.getWines()
        .then(res => this.setState({ foodSelection: res.data, wineSelection: res.data, priceSelection: res.data }))
        .catch(err => console.log(err));
    }; //End Alex's function
        
    //Start Travis' function
    //I think it'll need to look something more like this:
    loadWine = () => {
        API.getWines({
            winetypes: "list of wine types that go w/ their wine selection",
            //So we're going to need a fx to convert the this.state.wineSelection to the list of wines that go with it in the 'winetypes' variable,
            price: this.state.priceSelection,
        })
        //We need to pass these values into `getWines` so that we can use them to query the DB.
        .then(res => {
        //This is where we'll put the logic for what we want to do when the Wine comes back.  I.E. put it in a modal or whatever.  We don't need any setState stuff b/c the state is already set to the selections they made from the dropdown. 
        }) 
        .catch(err => console.log(err));
    }
    //======================
    //======================= End API Call ===========================================//
    //=================================================================================================//

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
        API.getWines(this.state.search)
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
         <div className="main_container">
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
                {this.state.priceSelection && <Button
                                    color="danger"
                                    type="submit"
                                    onClick={this.handleFormSubmit}
                                    size="large">
                                    Find Your Wine!
                                </Button>}
                    
            </div>
                <div id="user_inputs">
                    <ul>
                        {/* This will populate a bubble for every selection the user makes */}
                        <li className="selections">{this.state.foodSelection && <SelectionCard
                                                            selection={this.state.foodSelection}
                                                            image="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F02%2Fihop-pancakes-ap_435762852572.jpg%3Fw%3D2000&w=700&q=85"
                                                            alt="Food"
                                                            />}</li>
                        <li className="selections">{this.state.wineSelection && <SelectionCard
                                                            selection={this.state.wineSelection}
                                                            image="https://media.mnn.com/assets/images/2017/04/various%20wine%20bottles.jpg.653x0_q80_crop-smart.jpg"
                                                            alt="Wine"/>}</li>
                        <li className="selections">{this.state.priceSelection && <SelectionCard
                                                            selection={this.state.priceSelection}
                                                            image="https://thumbs.dreamstime.com/b/green-dollar-sign-image-many-30555081.jpg"
                                                            alt="Dollars"/>}</li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Wine;
