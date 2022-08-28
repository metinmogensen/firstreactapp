import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  //lifecycle methode 
  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }))


  }


  render() {
    console.log('render');

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder=' Search Monsters' onChange={(event) => {
          var Element = this.state.monsters;
          var target = event.target.value;
          var results = Element.filter((element) => {
            return element.name.includes(target)
          })

          this.setState(() => {
            return { monsters: results }
          })
        }} />

        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }


      </div>
    );
  }
}

export default App;
