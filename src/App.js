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

  onSearchChange = (event) => {
    var searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render');

    // resturcturerer da deet ser bedre ud en random variable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    var results = monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={onSearchChange} />

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
