import React, { Component } from "react";
import Nav from "../../components/Nav";
import SelectionCard from "../../components/SelectionCard";
import Footer from '../../components/Footer';
import { Button } from 'reactstrap';
import './Wine.css';
import './Modal.css';
import prices from '../../pages/Wine/prices';
import wines from '../../pages/Wine/wines';
import winetypes from '../../pages/Wine/winetypes';
//modalWines are hardcoded.  If you get this deployed w/ routes and an actual DB, you can delete this
import modalWines from './winesForModal';
// Modal was a component built into the react-bootstrap package you downloaded
import Modal from 'react-bootstrap/lib/Modal'
import foods from '../../pages/Wine/foods';
import DropDown from '../../components/DropDown';
//import { set } from "mongoose";
//import API from "../../utils/API";

class Wine extends Component {
    constructor(props) {
        super(props);
            // Set up the state
            this.state = {
                foodSelection:"",
                wineSelection:"",
                priceSelection:"",
                show: false,
                //wineIndex is part of the hardcoded wines.  You can delete if you get DB connected
                wineIndex: 0
            }
            //In order to call functions, you have to bind them to the constructor
            this.handleChange = this.handleChange.bind(this);
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
            //handleShow & handleClose are for the modal
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.getWineFunction = this.getWineFunction.bind(this);
    } 

    //========================== API Call for Wine ===================================//
    //=========================
    //Note: This is not being used for the initial deploy.  You'll need this if you get the DB working
    loadWine = (wine, price) => {
        //userWine will store the return from the winetypes API
        let userWine;
        //Switch case will take the user wine selection and pull back the types of wine that go with it
        switch (wine) {
            case "Sweet Whites":
                userWine = winetypes["Sweet Whites"];
                break;
            case "Rich Whites":
                userWine = winetypes["Rich Whites"];
                break;
            case "Sparkling Whites":
                userWine = winetypes["Sparkling Whites"];
                break;
            case "Dessert":
                userWine = winetypes["Dessert"];
                break;
            case "Dry Whites":
                userWine = winetypes["Dry Whites"];
                break;
            case "Light Body Reds":
                userWine = winetypes["Light Body Reds"];
                break;
            case "Medium Body Reds":
                userWine = winetypes["Medium Body Reds"];
                break;
            default:
                userWine = winetypes["Full Body Reds"];
                break;
        }
        //userWine returns an array.  This fx will randomly pull one element from that array to query DB
        if (userWine.length > 1) {
            userWine = userWine[Math.floor(Math.random() * userWine.length)];
        }
        //Send the info to API.js - not working.  Commenting out for v1.
        // API.getWines(userWine, price)
        // .then(res => {
        // //This is where we'll put the logic for what we want to do when the Wine comes back.  I.E. put it in a modal or whatever.  We don't need any setState stuff b/c the state is already set to the selections they made from the dropdown. 
        // }) 
        // .catch(err => console.log(err));
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
        //event.preventDefault();
        console.log("button clicked!")
        this.loadWine(this.state.wineSelection, this.state.priceSelection);
        //Pull in the getWineFx from another file.  This will grab one of the hardcoded wines in the winesForModal.js file
        this.getWineFunction(this.state.wineSelection, this.state.priceSelection);
        this.handleShow();
    };
    //Nonsense function to pull the hardcoded wines based on user input
    getWineFunction = (wine, price) => {
        if (wine === "Sweet Whites" && price === "under $20") {
            this.setState({wineIndex: 0})}
        else if (wine === "Sweet Whites" && price === "$20-$40") {
            this.setState({wineIndex: 1})}
        else if (wine === "Sweet Whites" && price === "$41-$80") {
            this.setState({wineIndex: 2})}
        else if (wine === "Sweet Whites" && price === "over $80") {
            this.setState({wineIndex: 3})}
        else if (wine === "Rich Whites" && price === "under $20") {
            this.setState({wineIndex: 4})}
        else if (wine === "Rich Whites" && price === "$20-$40") {
            this.setState({wineIndex: 5})}
        else if (wine === "Rich Whites" && price === "$41-$80") {
            this.setState({wineIndex: 6})}
        else if (wine === "Rich Whites" && price === "over $80") {
            this.setState({wineIndex: 7})}
        else if (wine === "Sparkling Whites" && price === "under $20") {
            this.setState({wineIndex: 8})}
        else if (wine === "Sparkling Whites" && price === "$20-$40") {
            this.setState({wineIndex: 9})}
        else if (wine === "Sparkling Whites" && price === "$41-$80") {
            this.setState({wineIndex: 10})}
        else if (wine === "Sparkling Whites" && price === "over $80") {
            this.setState({wineIndex: 11})}  
        else if (wine === "Dessert" && price === "under $20") {
            this.setState({wineIndex: 12})}
        else if (wine === "Dessert" && price === "$20-$40") {
            this.setState({wineIndex: 13})}
        else if (wine === "Dessert" && price === "$41-$80") {
            this.setState({wineIndex: 14})}
        else if (wine === "Dessert" && price === "over $80") {
            this.setState({wineIndex: 15})}   
        else if (wine === "Dry Whites" && price === "under $20") {
            this.setState({wineIndex: 16})}
        else if (wine === "Dry Whites" && price === "$20-$40") {
            this.setState({wineIndex: 17})}
        else if (wine === "Dry Whites" && price === "$41-$80") {
            this.setState({wineIndex: 18})}
        else if (wine === "Dry Whites" && price === "over $80") {
            this.setState({wineIndex: 19})}  
        else if (wine === "Medium Body Reds" && price === "under $20") {
            this.setState({wineIndex: 20})}
        else if (wine === "Medium Body Reds" && price === "$20-$40") {
            this.setState({wineIndex: 21})}
        else if (wine === "Medium Body Reds" && price === "$41-$80") {
            this.setState({wineIndex: 22})}
        else if (wine === "Medium Body Reds" && price === "over $80") {
            this.setState({wineIndex: 23})}  
        else if (wine === "Full Body Reds" && price === "under $20") {
            this.setState({wineIndex: 24})}
        else if (wine === "Full Body Reds" && price === "$20-$40") {
            this.setState({wineIndex: 25})}
        else if (wine === "Full Body Reds" && price === "$41-$80") {
            this.setState({wineIndex: 26})}
        else if (wine === "Full Body Reds" && price === "over $80") {
            this.setState({wineIndex: 27})}  
        else if (wine === "Light Body Reds" && price === "under $20") {
            this.setState({wineIndex: 28})}
        else if (wine === "Light Body Reds" && price === "$20-$40") {
            this.setState({wineIndex: 29})}
        else if (wine === "Light Body Reds" && price === "$41-$80") {
            this.setState({wineIndex: 30})}
        else if (wine === "Light Body Reds" && price === "over $80") {
            this.setState({wineIndex: 31})}  
    }

//====================== Start Modal Functions ==========================================//
    handleClose() {this.setState({ show: false });}
    handleShow() {this.setState({ show: true });}
//========================== End Modal Functions ======================================//
    
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
                                                        alt="Food"/>}</li>
                    <li className="selections">{this.state.wineSelection && <SelectionCard
                                                        selection={this.state.wineSelection}
                                                        alt="Wine"/>}</li>
                    <li className="selections">{this.state.priceSelection && <SelectionCard
                                                        selection={this.state.priceSelection}
                                                        alt="Dollars"/>}</li>
                </ul>
            </div>   
            
            {/* ==================== Start Modal ========================================================*/}
            <div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                <Modal.Title>
                    <Modal.Header closeButton></Modal.Header>
                    <span className="intro">Your wine is . . .</span>
                    <br/> 
                    <span id="wine_name">{modalWines[this.state.wineIndex].name}</span>
                    
                </Modal.Title>
                <Modal.Body>
                    <img id="modal_image" src={modalWines[this.state.wineIndex].img} alt="wine"/>            
                </Modal.Body>
                <Modal.Footer>
                    <h4 id="price_wrapper"><span id="price_span">{"Price:  "}</span>{modalWines[this.state.wineIndex].price}</h4>
                    <h4 id="rating_wrapper"><span id="rating_span">{"Rating:  "}</span>{modalWines[this.state.wineIndex].rating}</h4>
                    <Button className="close_button" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
            {/* ====================== End Modal ========================================================= */}
            <Footer />  
        </div> //End Main container
        );
    }
}

export default Wine;
