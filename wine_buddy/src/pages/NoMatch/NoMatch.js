import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import './NoMatch.css';

// This will render when the client hits an invalid route.  AKA 404 page.
class Nomatch extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <div className="d-flex flex-wrap justify-content-center col-sm-12 mx-auto carousel">
                    <h3>Nothing to see here!</h3>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Nomatch