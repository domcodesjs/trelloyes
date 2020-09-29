import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card
        title='Title'
        content={'lorem ipsum something you know what I mean'}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot Test
  it('renders the Card UI as expected', () => {
    const tree = renderer
      .create(
        <Card
          title='Title'
          content={'lorem ipsum something you know what I mean'}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
