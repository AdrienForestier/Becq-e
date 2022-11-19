import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Core from "../Core/Core";


export default class App extends React.Component {
  render(){
    return(
        <div>
            <Header/>
            <Core/>
        </div>
    )
  }
}
