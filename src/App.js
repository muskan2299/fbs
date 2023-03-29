import logo from './logo.svg';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { SearchForm } from '../../fb-app/src/Components/search_form';
import SignUp from './Components/signup';
import Login from './Components/login';

function App() {
  return (
    <div className="App">
      <section className="Main-container">
        <aside className="Search-section">
          <SearchForm></SearchForm>
        </aside>
        </section>
    </div>
  );
}

export default App;