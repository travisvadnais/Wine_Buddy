import React, { Component } from "react";
import Nav from "../../components/Nav";
import InstructionCard from "../../components/InstructionCard";
import instructions from '../../components/InstructionCard/InstructionInfo.json'
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import './Home.css';
// import API from "../../utils/API";
import { Link } from "react-router-dom";




class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* I built this class stack in another HW and it works for this type of thing */}
                <div className="d-flex flex-wrap justify-content-center col-sm-12 mx-auto carousel">
                    {
                    instructions
                    .map(instruction => (
                        <InstructionCard
                        id={instruction.id}
                        key={instruction.id}
                        step={instruction.step}
                        img={instruction.img}
                        alt={instruction.desc}
                        />
                    ))
                    }
                </div>
                <Link to = "../wine_pair"><Button text={"Let's Get Started!"}/></Link>
                <Footer />
            </div>
        );
    }
}

export default Home