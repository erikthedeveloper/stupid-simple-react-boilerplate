import React from 'react';

export default class Checkbox extends React.Component {

  static propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked}
        onChange={event => this.props.onChange(event.target.checked)}
      />
    )
  }

}
