import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props); // Absolutely needed since we're using props
    this.state = { currentName: this.props.username, botSays: this.props.botMessage, botTwoSays: this.props.peterMessage }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.settingsSubmit(this.state.currentName);
    this.props.setBotMessage(this.state.botSays);
    this.props.setBotTwoMessage(this.state.botTwoSays);
    this.props.increment();
  }
  changeHandler = (event) => {
    // Fires when the input box is updated
    this.setState({ currentName: event.target.value })
  }
  changeBotSaysHandler = (event) => {
    this.setState({ botSays: event.target.value})
  }
  changeBotTwoSaysHandler = (event) => {
    this.setState({botTwoSays: event.target.value })
  }
  render() {
    return (<form onSubmit={this.handleSubmit} className="basic-grey">
      <label> Change your name to
        <input value={this.state.currentName}
          onChange={this.changeHandler}
          type="text" />
      </label>
      <label> What should the first bot say?
        <input value={this.state.botSays}
          onChange={this.changeBotSaysHandler}
          type="text" />
      </label>
      <label> What should the second bot say?
        <input value={this.state.botTwoSays}
          onChange={this.changeBotTwoSaysHandler}
          type="text" />
      </label>
      <input type="submit" />
      <div>{this.props.counter}</div>
    </form>)

  }
}

export default Settings;
