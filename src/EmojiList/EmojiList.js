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
      let currentPage = this.props.currentPage;
      const rangeList = caculatorPage(dataEmoji,currentPage,5);
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
              <div>
                <ul>
                {listItems}
                </ul>
              </div>
              <div>
                <button value="pre" onClick={this.props.changePage}>Pre</button>
                <button value="next" onClick={this.props.changePage}>Next</button>
              </div>
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