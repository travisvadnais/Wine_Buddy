
import React, { Component } from "react";
import './SelectionCard.css';
import pricePics from './priceImages';
import winePics from './wineImages';
import foodPics from './foodImages';


class SelectionCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        src: ""
      }
      this.findImage = this.findImage.bind(this);
    }
  
  //Find the image as soon as the component is mounted
  componentDidMount() {this.findImage()}

  //Also find the image when the component gets updated w/ new props (I.E. user changes the dropdown)
  componentDidUpdate(prevProps){
    if (this.props.selection !== prevProps.selection) { this.findImage()}
  };
  
  //I just put all the different wines; prices; and foods in a switch
  findImage() {
    switch (this.props.selection) {
      case "under $20": 
        this.setState({src: pricePics[0]})
        break;
      case "$20-$40":
        this.setState({src: pricePics[1]})
        break;
      case "$41-$80":
        this.setState({src: pricePics[2]})
        break;
      case "over $80":
        this.setState({src: pricePics[3]})
        break;
      case "Dry Whites":
      case "Sparkling Whites":
      case "Sweet Whites":
      case "Rich Whites":
        this.setState({src: winePics[0]})
        break;
      case "Dessert":
        this.setState({src: winePics[1]})
        break;
      case "Medium Body Reds":
      case "Full Body Reds":
      case "Light Body Reds":
        this.setState({src: winePics[2]})
        break;
      case "Vegetables":
        this.setState({src: foodPics[0]})
        break;
      case "Soft Cheese":
      case "Hard Cheese":
        this.setState({src: foodPics[1]})
        break;
      case "Starches":
        this.setState({src: foodPics[2]})
        break;
      case "Light Seafood":
      case "Rich Seafood":
        this.setState({src: foodPics[3]})
        break;
      case "White Meat":
      case "Red Meat":
      case "Cured Meat":
        this.setState({src: foodPics[4]})
        break;
      case "Sweets":
        this.setState({src: foodPics[5]})
        break;
      default:
        this.setState({src: "No Picture"})
        break;
    }
  }

  render() {
    return (
      <div className="card user_card">
        <img className="card-img-top user_selection" src={this.state.src} alt={this.props.alt} />
        <div className="card-body">
          <p className="card-text">{this.props.selection}</p>
        </div>
      </div>
    )
  }
}

export default SelectionCard