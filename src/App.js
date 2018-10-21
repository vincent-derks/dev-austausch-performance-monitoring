import React, { Component } from 'react';

import getItems from './utils/getItems';
import getRandomBackground from './utils/getRandomBackground';
import ListItem from './ListItem';
import { Wrapper, Container, Title } from './ui';

export default class App extends Component {
  state = {
    backgroundColor: '#eee'
  };

  toggleBackground = () =>
    this.setState(state => ({
      backgroundColor: getRandomBackground(state.backgroundColor)
    }));

  render() {
    const items = getItems(999);
    const itemsToShow = items.slice(0, 5);
    return (
      <Wrapper backgroundColor={this.state.backgroundColor}>
        <Container>
          <Title>Performance Monitoring</Title>
          <button onClick={this.toggleBackground}>Toggle background</button>
          {itemsToShow.map(item => (
            <ListItem
              handleOnClick={number =>
                console.log(`clicked :-) number ${number}`)
              }
              key={item}
              index={item}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}
