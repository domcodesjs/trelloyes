import React, { useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';

function App() {
  const [store, setStore] = useState({
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm']
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k']
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm'
        ]
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm']
      }
    ],
    allCards: {
      a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
      b: { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      c: { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      d: { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      e: { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      f: { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      g: { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      h: { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      i: { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      j: { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      k: { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      l: { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      m: { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
    }
  });
  const { lists, allCards } = store;

  const newRandomCard = () => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    };
  };

  const addCard = (id) => {
    const listId = id - 1;
    const storeCopy = { ...store };
    const randomCard = newRandomCard();
    storeCopy.lists[listId].cardIds.push(randomCard.id);
    storeCopy.allCards[randomCard.id] = randomCard;
    return setStore(storeCopy);
  };

  const deleteCard = (listId, cardId) => {
    const realListId = listId - 1;
    const storeCopy = { ...store };
    storeCopy.lists[realListId].cardIds = storeCopy.lists[
      realListId
    ].cardIds.filter((id) => id !== cardId);
    // doesn't make sense to delete the card from the object since
    // the lists are using the same id's in the cardIds array so
    // deleting 1 could potentially delete it from another list
    // ideally we want unique id's but uncomment below if ya want
    // delete storeCopy.allCards[cardId];
    return setStore(storeCopy);
  };

  return (
    <>
      <Header></Header>
      <main className='app'>
        {lists.map((list) => (
          <List
            addCard={addCard}
            deleteCard={deleteCard}
            key={list.id}
            allCards={allCards}
            header={list.header}
            cardIds={list.cardIds}
            listId={list.id}
          ></List>
        ))}
      </main>
    </>
  );
}

export default App;
