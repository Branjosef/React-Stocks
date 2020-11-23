import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  generateStocks = () => {
    return this.props.stocks.map( stock => 
      <Stock 
        id={stock.id}
        name={stock.name}
        price={stock.price}
        ticker={stock.ticker}
        type={stock.type}
        buyStock={this.props.buyStock}
        class={'stocks'}
      />
    )
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.generateStocks()}
      </div>
    );
  }

}

export default StockContainer;
