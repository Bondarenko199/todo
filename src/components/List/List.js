import React from 'react'
import './List.css'

class List extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      itemText: '',
      inputEnable: false,
      itemsArray: []
    }
  }

  showInput = () => {
    this.setState({inputEnable: !this.state.inputEnable})
  }

  setItemText = (e) => {
    this.setState({itemText: e.target.value})
  }

  keyPressHandle = (e) => {
    if (e.key === 'Enter') {

      this.state.itemsArray.push(this.state.itemText);
      this.setState({itemText: ''})
    }
  }

  render() {
    let list = this.state.itemsArray.map((val, key) => {
      return (
        <li key={key}>{val}</li>
      )
    })

    let inputClass = "MainInput" + (this.state.inputEnable ? '' : ' InactiveInput');

    return (
      <React.Fragment>
        <ul className="MainList">
          {list}
        </ul>
        <button className="AddButton" onClick={this.showInput}/>
        <input type="text"
               className={inputClass}
               ref={(input) => {
                 this.textInput = input
               }}
               value={this.state.itemText}
               onChange={this.setItemText}
               onKeyPress={this.keyPressHandle}/>
      </React.Fragment>
    )
  }
}

export default List