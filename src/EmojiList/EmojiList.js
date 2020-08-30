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
      let dataEmoji = this.props.dataEmoji;
      const rangeList = caculatorPage(dataEmoji,1,2);
      dataEmoji = dataEmoji.slice(rangeList.min, rangeList.max)
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
function caculatorPage(list,pageCurrent,pageRange) {
  let rangeList = {max: 0, min: 0}
  const lengthItem = list.length;
  let page = Math.ceil(lengthItem / pageRange);
  if(1<= pageCurrent <= page){
    rangeList.max = pageCurrent * pageRange;
    rangeList.min = (pageCurrent - 1) * pageRange;
  }
  return rangeList;
}  
export default EmojiList;