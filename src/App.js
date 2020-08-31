import React from 'react';
import './App.css';
import Headers from './Headers/Headers';
import Footers from './Footers/Footer';
import InputSearch from './InputSearch/InputSearch';
import EmojiList from './EmojiList/EmojiList';
import EmojiDataJson from '../src/Resouces/EmojiList.json'
class App extends React.Component  {
  constructor(props){
    super();
    this.state = {
      inputText: '',
      dataEmoji: dataEmoji,
      currentPage: 1,
      status: '' 
    }
  }
  inputChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }
  handleInput = (event) => {
    const inputText = this.state.inputText;
    let dataFillter = dataEmoji.filter((emoji) => 
    (emoji.keywords.search(inputText) !== -1 || emoji.title.search(inputText) !== -1 ))
    if(event.charCode === 13) {
      this.setState({
        inputText: '',
        dataEmoji: dataFillter,
        currentPage: 1
      })
    }
  }
  changePage = (event) => {
    let currentPage;
    const oldPage = this.state.currentPage;
    if(event.target.value === 'pre') {
      currentPage = oldPage - 1;
    }else if(event.target.value === 'next'){
      currentPage = oldPage +  1;
    }
    this.setState({
      currentPage: currentPage
    })
  }
  changeStatus = (status) => {
    this.setState({
      status: status
    })
  }
  render() {
    const dataEmoji = this.state.dataEmoji;
    const inputText = this.state.inputText;
    return (
      <div className="App">
        <Headers 
          status={this.state.status}/>
        <InputSearch  
          value={inputText} 
          inputChange={this.inputChange} 
          handleInput={this.handleInput}/>
        <EmojiList 
          dataEmoji={dataEmoji} 
          currentPage={this.state.currentPage} 
          changePage={this.changePage}
          statusHandle={this.changeStatus}
          />
        <Footers />
      </div>
    );
  }
  
}
const dataEmoji = EmojiDataJson;
export default App;
