import React, { Component } from 'react';
import '../App.css';

import { GetPictures } from '../helpers/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(old => ({
      count: old.count+1
    }));
  }

  decrement() {
    if( this.state.count > 0 )
      this.setState(old => ({
        count: old.count-1
      }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <content>
          {GetPictures(count)}
        </content>
        <footer>
          <button onClick={this.decrement} > - </button>
          <button onClick={this.increment} > + </button>
        </footer>
      </div>
    );
  }
}

export default App;