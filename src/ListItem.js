import React, { PureComponent } from 'react';

import { ListItemWrapper } from './ui';

export default class ListItem extends PureComponent {
  render() {
    const { index } = this.props;
    const number = index + 1;
    return (
      <ListItemWrapper>
        Item {number}
        <button data-number={number} onClick={this.props.handleOnClick}>
          Click me
        </button>
      </ListItemWrapper>
    );
  }
}
