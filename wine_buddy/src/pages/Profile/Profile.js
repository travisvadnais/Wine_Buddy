import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import './Profile.css';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <h3>This is where the client's profile will load</h3>
                <Footer />
            </div>
        );
    }
}

export default Profile