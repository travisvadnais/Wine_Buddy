import React, { Component } from "react";
import Nav from "../../components/Nav";
import SigninPage from "../../components/SigninPage";
import Footer from '../../components/Footer';
import './Signin.css';
// import API from "../../utils/API";
import { Link } from "react-router-dom";

class Signin extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <h3>This is where the Sign in form will go</h3>
                <Footer />
            </div>
        );
    }
}

export default Signin