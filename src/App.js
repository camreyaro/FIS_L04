import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
import Contacts from './components/Contacts'

var contact1 = {'name': 'Jisoo', 'phone': '12345'}
var contact2 = {'name': 'Rose', 'phone': '67890'}
var contacts = [contact1, contact2]

function App() {

  return (
    <Contacts contacts={contacts}/>
  );
}

export default App;
