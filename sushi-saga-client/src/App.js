import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    iterator: 0,
    plates: [],
    wallet: 200
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushis: data
        })
      })
  }

  updatePlates = (sushi) => {
    if(!this.state.plates.includes(sushi) && 
    this.state.wallet >= sushi.price){
    this.setState({
      plates: [...this.state.plates, sushi],
      wallet: (this.state.wallet - sushi.price)
    })
  }
  }

  iteratorUpdater = () => {
    this.setState({
      iterator: this.state.iterator + 4
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer 
          plates={this.state.plates}
          iteratorUpdater={this.iteratorUpdater} 
          sushis={this.state.sushis} 
          iterator={this.state.iterator} 
          updatePlates={this.updatePlates}
        />
        <Table plates={this.state.plates} 
        wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;