import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: []
    };

    this.pictures = [
      'https://sun9-35.userapi.com/c831309/v831309644/1dfe85/hU_wbWJzs2s.jpg',
      'https://sun9-6.userapi.com/c7007/v7007738/6085f/tgN1s5MSOqo.jpg',
      'https://sun9-33.userapi.com/c635107/v635107075/8925/RQ_Tv-v1SkA.jpg',
      'https://sun9-2.userapi.com/c635101/v635101580/69af9/z8-h-Yf1TMs.jpg',
      'https://sun9-4.userapi.com/c635101/v635101580/69ae9/PzUNNZNLD1o.jpg',
      'https://pp.userapi.com/c849020/v849020566/d1a15/nc9PTOM6XqY.jpg',
      'https://pp.userapi.com/c830508/v830508998/1b119e/Tu66t9UIoGg.jpg',
      'https://pp.userapi.com/c830508/v830508998/1b11cd/iyF5FzYwo2E.jpg',
      'https://pp.userapi.com/c846524/v846524893/142a45/0q-5wW0WNR0.jpg',
      'https://pp.userapi.com/c846524/v846524893/142a4e/TWHudOFm4_k.jpg',
    ];

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState( (old) => ({
      ...old,
      pictures: [
        ...old.pictures,
        this.pictures[ Math.floor(Math.random()*this.pictures.length) ]
      ]
    }) );
  }

  decrement() {
    if( this.state.pictures.length > 0 )
      this.setState( (old) => ({
        ...old,
        pictures: old.pictures.slice(0,-1)
      }) );
  }

  render() {
    return (
      <div className="App">
        <content>
          {this.state.pictures.map( (el,i)=>(
            <img key={i} src={el} />
          ) )}
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
