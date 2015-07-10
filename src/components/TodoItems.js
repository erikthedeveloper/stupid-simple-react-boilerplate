import React from 'react';
import Checkbox from './Checkbox';

const styles = {
  list: {
    listStyle: 'none'
  }
};

export default class TodoItems extends React.Component {

  static propTypes = {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id:       React.PropTypes.number.isRequired,
        complete: React.PropTypes.bool.isRequired,
        text:     React.PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const {items} = this.props;
    return (
      <ul style={styles.list}>
        {items.map(item =>
          <li key={item.id}>
            <Checkbox
              checked={item.complete}
              onChange={val => this.onCheckboxChange(item.id, val)}
            /> {item.text}
          </li>
        )}
      </ul>
    )
  }

  onCheckboxChange = (id, val) => {
    console.log("TODO: Do something with this checkbox change event!", id, val);
  }

}
