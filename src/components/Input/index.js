import {Component} from 'react'

import './index.css'

class Input extends Component {
  state = {
    inputText: '',
    showButtonText: true,
    showInputBar: true,
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      showButtonText: !prevState.showButtonText,
      showInputBar: !prevState.showInputBar,
    }))
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, showButtonText, showInputBar} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {showInputBar ? (
              <input
                className="input"
                type="text"
                value={inputText}
                onChange={this.onChangeInput}
              />
            ) : (
              <p className="description">{inputText}</p>
            )}

            <button className="btn" type="button" onClick={this.onClickBtn}>
              {showButtonText ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Input
