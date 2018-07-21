import React, { Component } from "react";
import Nav from "../../components/Nav";
import SignupForm from "../../components/SignupForm";
import Footer from '../../components/Footer';
import './Signup.css';
// import API from "../../utils/API";
import { Link } from "react-router-dom";

class Signup extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <h3>This is where the Signup form will go</h3>
                <Footer />
            </div>
        );
    }
}

export default Signup