import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import List from './components/List/List';

function App({ store }) {
  const { lists, allCards } = store;
  return (
    <>
      <Header></Header>
      <main className='app'>
        {lists.map((list) => (
          <List
            key={list.id}
            allCards={allCards}
            header={list.header}
            cardIds={list.cardIds}
          ></List>
        ))}
      </main>
    </>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
