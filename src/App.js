import React from 'react';
import Header from './components/Header';
import List from './components/List';

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

export default App;
