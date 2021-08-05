import React from 'react'

class SearchField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    render() {
      return (
        <form className="margin-top: 1em margin-bottom: 1em">
          <div className=' display: flex;
                            flex: 1;
                            height: 42px;
                            justify-content: space-between '>
            <input className="padding: 0 12px;
                                outline: none;
                                border: none;
                                border-radius: 5px;
                                width: 75%;"
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder="Search emoji"
            />
            <button className='padding: 12px 20px;
                                height: 42px;
                                border: none;
                                background: rgb(21, 28, 34);
                                border-radius: 5px;
                                margin-left: 10px;
                                color: #fff;
                                cursor: pointer;
                                min-width: 35%;'>
              <span role="img" aria-label="search">
                Search 🔍
              </span>
            </button>
          </div>
        </form>
      );
    }
  }

export default SearchField
