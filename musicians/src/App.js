import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TableRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicians: this.props.data,
      filterVal: 0
    }
  }

  onFilterChange =(evt) => {
    this.setState({filterVal: evt.target.value});
  }
  render() {
    let data = this.state.musicians;
    const propRows = Object.keys(data[0]).map(function(prop) {
      return (<th key={prop}>{prop}</th>)
    })
    const dataRows = 
      data.filter(musician=> musician.stars >= this.state.filterVal).map((musician) =>
        <tr key={musician.id}>
                  <td>{musician.id}</td>
                  <td>{musician.name}</td>
                  <td>{musician.stars}</td>
                </tr>
      );
    
  
    return (
      <div className="Table">
      Show stars above: <input onChange={this.onFilterChange}/>
        <table>
          <thead>
            <tr>{propRows}</tr>
          </thead>
          <tbody>
          {dataRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableRender;


