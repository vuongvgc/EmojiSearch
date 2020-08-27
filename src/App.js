import React from 'react';
import './App.css';
import Headers from './Headers/Headers';
import InputSearch from './InputSearch/InputSearch';
import EmojiList from './EmojiList/EmojiList';
class App extends React.Component  {
  constructor(props){
    super();
    this.state = {
      inputText: '',
      dataEmoji: dataEmoji 
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
        dataEmoji: dataFillter
      })
    }
  }
  render() {
    const dataEmoji = this.state.dataEmoji;
    const inputText = this.state.inputText;
    return (
      <div className="App">
        <Headers />
        <InputSearch  value={inputText} inputChange={this.inputChange} handleInput={this.handleInput}/>
        <EmojiList dataEmoji={dataEmoji}/>
      </div>
    );
  }
  
}
const dataEmoji = [
      {
        "title": "100",
        "symbol": "💯",
        "keywords":
          "hundred points symbol symbol wow wow win win perfect perfect parties parties"
      },
      {
        "title": "1234",
        "symbol": "🔢",
        "keywords": "input symbol for numbers symbol"
      },
      {
        "title": "Grinning",
        "symbol": "😀",
        "keywords": "grinning face happy smiley emotion emotion"
      },
      {
        "title": "Grimacing",
        "symbol": "😬",
        "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
      }
]
export default App;
