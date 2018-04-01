import React, { Component } from 'react';
import './App.css';

import AppButton from './components/AppButton';
import AppSearch from './components/AppSearch';
import AppUl from './components/AppUl';
import Loader from './components/Loader';
import DBpost from './data.json';

const fetchData = entity =>
  fetch(API + entity).then(response => response.json());

const TEXT_ADD_POST = "Добавити нових постів";
const TEXT_NONE = "Записів для добавлення немає";
const API = "https://jsonplaceholder.typicode.com/";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 10,
      step: 10,
      db: [],
      isLoading: true
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);    
  }

  componentDidMount() {
    setTimeout(() => {
      fetchData("posts").then((posts) => {
          this.setState({
              db: posts,
              isLoading: false
          });
        }
      );
    }, 2000);
  }

  onClick() {
    const { count, step, db } = this.state;
    if (count < db.length) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step < prevState.db.length 
                  ? prevState.count + step 
                  : prevState.db.length
        }
      });
    }
  };

  onChange(event) {
    let searchText = event.target.value;
    this.setState((prevState) => {
      return {
        db: searchText !=="" 
              ? DBpost.reduce((newDB, elem) => {
                  return elem.title.includes(searchText)
                          ? newDB.concat(elem).sort((a, b) => 
                              (a.title > b.title) ? 1 : 
                                (a.title < b.title) ? -1 : 0) 
                          : newDB 
                }, [])
              : DBpost
    }});
    this.setState((prevState) => {
      return {
        count: prevState.db.length > prevState.step 
          ? prevState.step 
          : prevState.db.length
      }
    });
  }

  render() {
    let { count, step, db, isLoading } = this.state;
    return (
      <div className="App">
        <AppSearch 
          onChange={this.onChange} />
        <h1>Кількість записів {count}</h1>
        {
          isLoading 
            ? (<Loader>Loading ...</Loader>) 
            : (<AppUl items={db.slice(0, count)} />)
        }
        <AppButton 
          text={(db.length !== count && step < db.length) ? TEXT_ADD_POST : TEXT_NONE} 
          onClick={this.onClick} />
      </div>
    );
  }
}

export default App;