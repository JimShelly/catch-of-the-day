import React from 'react';
import Header from './Header';
import Order  from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

export default class app extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    //getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addFish(fish){
    //update our state
    const fishes = {...this.state.fishes}; //... = spread. takes every time from object and spread it into a new object.  AKA clones
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes })
  }
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }

}
