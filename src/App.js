import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  //lifecycle methode 
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  onSearchChange = (event) => {
    var searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    // resturcturerer da deet ser bedre ud en random variable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    var results = monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters' />
        <CardList monsters={results} />
      </div>
    );
  }
}

export default App;
