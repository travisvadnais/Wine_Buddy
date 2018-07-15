import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import './Wine.css';
import API from "../../utils/API";
import { Link } from "react-router-dom";




class Wine extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <h3>This is Where the User will start the wine-pairing questions</h3>
                <Footer />
            </div>
        );
    }
}

export default Wine