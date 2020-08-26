import React from 'react';
import './EmjiList.css'
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return( <li className="List__item" >
                <p className="List__item-icon">{props.symbol}</p>
                <p className="List__item-text">{props.title}</p>
            </li>
    )
}

  
function EmojiList(props) {
    const dataEmoji = props.dataEmoji;
    const listItems = dataEmoji.map((emoji) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={emoji.title.toString()} symbol={emoji.symbol} title={emoji.title} />
    );
    return (
        <div className="List">
            <ul>
            {listItems}
            </ul>
        </div>
    );
  }
export default EmojiList;