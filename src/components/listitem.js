import React from 'react'

class ListItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selected: false
    }
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState((prevState, props) => {
      return { selected: !prevState.selected }
    })
  }

  render() {
    return (
      <li onClick={ this.clicked }>
        <p className={ this.state.selected ? 'selected' : null }>{ this.props.name }</p>
      </li>
    )
  }
}

export default ListItem;
