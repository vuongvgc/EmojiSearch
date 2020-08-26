import React from 'react';
import './App.css';
import Headers from './Headers/Headers';
import InputSearch from './InputSearch/InputSearch';
import EmojiList from './EmojiList/EmojiList';
class App extends React.Component  {
  render() {
    return (
      <div className="App">
        <Headers />
        <InputSearch />
        <EmojiList />
      </div>
    );
  }
  
}

export default App;
