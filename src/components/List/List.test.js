import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from '../../store';
import List from './List';

const cardIds = ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'];
const allCards = store.allCards;

describe('List Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(
      <List header='Header' cardIds={cardIds} allCards={allCards} />,
      section
    );
    ReactDOM.unmountComponentAtNode(section);
  });

  // Snapshot Test
  it('renders the List UI as expected', () => {
    const tree = renderer
      .create(<List header='Header' cardIds={cardIds} allCards={allCards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
