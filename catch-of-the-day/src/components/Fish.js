import React from 'react';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';

export default class Fish extends React.Component{
  render(){
    const { details } = this.props;
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button>Add To Order</button>
      </li>
    )
  }
}
