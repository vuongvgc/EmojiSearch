import React from 'react';
import './EmjiList.css';
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return( <li className="List__item" >
                <p className="List__item-icon">{props.symbol}</p>
                <p className="List__item-text">{props.title}</p>
            </li>
    )
}
function StatusError() {
  return(
    <p>Nothings emoji that you want search</p>
  )
}
  
class EmojiList extends React.Component {
    render(){
      let listItems ;
      const dataEmoji = this.props.dataEmoji.slice(0,5);
      if(dataEmoji.length === 0) {
        listItems = <StatusError />
      } else {
        listItems = dataEmoji.map((emoji) =>
          <ListItem key={emoji.title.toString()} symbol={emoji.symbol} title={emoji.title} />
        )
      }
      return (
          <div className="List">
              <ul>
              {listItems}
              </ul>
          </div>
      );
    }
    }
    
export default EmojiList;