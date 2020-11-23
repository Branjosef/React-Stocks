import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filter: 'All',
      filteredStocks: [],
      sort: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stockData => {
      this.setState({
        stocks: stockData
      })
    })
  }

  onSort = (value) => {
    console.log(value)
  }

  onChangeType = (filteredValue) => {
    let filteredArr = this.state.stocks.filter(stock => stock.type === filteredValue)
    this.setState({  
      filter: filteredValue, 
      filteredStocks: filteredArr
    })


  }

  buyStock = (props) => {
    let stock = this.state.stocks.find(stock => stock.id === props.id)
    let stocksArr = this.state.stocks.filter(stock => stock.name !== props.name)
    let portfolioArr = this.state.portfolio
    portfolioArr.push(stock)
    this.setState({
      stocks: stocksArr,
      portfolio: portfolioArr
    })
  }

  sellStock = (props) => {
    let stock = this.state.portfolio.find(stock => stock.id === props.id)
    let portfolioArr = this.state.portfolio.filter(stock => stock.name !== props.name)
    let stocksArr = this.state.stocks
    stocksArr.push(stock)
    this.setState({
      stocks: stocksArr,
      portfolio: portfolioArr
    })
  }


  render() {
    return (
      <div>
        <SearchBar onChangeType={this.onChangeType} onSort={this.onSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filter === 'All' ? this.state.stocks : this.state.filteredStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
