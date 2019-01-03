import React, { Component } from 'react'
import './App.css'
import data from './data.json'

import SearchBar from './SearchBar/SearchBar'
import ProductTable from './Products/ProductTable'

class App extends Component {

  state = {
    products: data.data
  }

  render () {
    console.log(this.state.products)
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Filterable products</h1>
        </header>
        <SearchBar 
          products={this.state.products}
        />
        <ProductTable 
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App
