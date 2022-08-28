import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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

    var Element = this.state.monsters;
    var results = Element.filter((element) => {
      return element.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder=' Search Monsters' onChange={(event) => {
          var searchField = event.target.value.toLocaleLowerCase();

          this.setState(() => {
            return { searchField }
          })
        }} />

        {
          results.map((monster) => {
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
