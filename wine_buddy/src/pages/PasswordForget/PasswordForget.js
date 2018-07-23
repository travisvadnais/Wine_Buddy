import React, { Component } from "react";
import Footer from "../../components/Footer";
import './PasswordForget.css';

class PasswordForget extends Component {
    render() {
        return (
            <div>
              
                {/* I built this class stack in another HW and it works for this type of thing */}
                <div className="d-flex flex-wrap justify-content-center col-sm-12 mx-auto carousel">
                    <h3>Password Forget Here</h3>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PasswordForget