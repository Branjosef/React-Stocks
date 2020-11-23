import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  generatePortfolio = () => {
    return this.props.portfolio.map( stock => 
      <Stock 
        id={stock.id}
        name={stock.name}
        price={stock.price}
        ticker={stock.ticker}
        type={stock.type}
        sellStock={this.props.sellStock}
        class={'portfolio'}
      />
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.generatePortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
