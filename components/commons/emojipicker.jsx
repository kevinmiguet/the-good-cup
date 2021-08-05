import React from 'react'
import emojis from "./emojis.json";
import SearchField from "../forms/searchField"

class Emojipicker extends React.Component {
    state = {
      isOpen: 0
    };
  
    toggleAccordion = (event, index) => {
      this.setState({ isOpen: index });
    };
  
    renderEmoji = (length = emojis.length) => {
      let cats = [];
      const style = {
        margin: 0,
        background: "rgb(21, 28, 34)",
        color: "#fff",
        height: "42px",
        lineHeight: "42px",
        padding: "0 12px"
      };
      return emojis.map((o, i) => {
        if (i >= length) return false;
  
        if (cats.includes(o.category)) return false;
  
        cats.push(o.category);
  
        return (
          <div className='bg-indigo-600 cursor-pointer' key={i} onClick={e => this.toggleAccordion(e, i)}>
            <h3  className="m-0 bg-yellow-400 h-42 leading-7 p-12">{o.category}</h3> 
            
            <div className="display:flex p-10" 
                  open={this.state.isOpen === i}>
                {emojis
                .filter(e => e.category === o.category)
                .map(m => (
                  <div className="display: inline-block;
                  padding: 4px;
                  /* border: 1px solid #eee; */
                  border-radius: 3px;
                  margin-right: 5px;
                  margin-left: 5px;">{m.emoji}
                  </div>
                ))}
            </div>
          </div>
        );
      });
    };
  
    render() {
      return (
        <React.Fragment>
          <div className="box-border font-serif bg-pink-800">
          <div className="max-width: 400px;
  margin: auto;
  padding: 20px">
            <SearchField />
            <div className=" border-radius: 5px;
  overflow: hidden;">{this.renderEmoji()}</div>
          </div>
          </div>
        </React.Fragment>
      );
    }
  }
  export default Emojipicker

  /* display: ${props => (props.open ? "block" : "none")}; 
   */