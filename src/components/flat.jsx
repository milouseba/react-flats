import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const divStyle = {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')"
    };
    return(
      <div className="card" style={divStyle}>
      <div className="card-category">150 EUR</div>
      </div>
    );
  }
}

export default Flat;
