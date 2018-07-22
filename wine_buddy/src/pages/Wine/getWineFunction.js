export function getWineFunction(wine, price) {
  switch (wine | price) {
    case (wine === "Sweet Whites" && price === "under $20"):
      this.setState({wineIndex: 0}); 
      break;
    case ("Sweet Whites" | "$20-$40"):
        this.setState({wineIndex: 1}); 
        break;
    case (wine === "Sweet Whites" && price === "$41-$80"):
        this.setState({wineIndex: 2}); 
        break;
    case (wine === "Sweet Whites" && price === "over $80"):
        this.setState({wineIndex: 3}); 
        break;
  }
}