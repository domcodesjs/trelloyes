# Requirements

[Link to Live Site](https://trelloyes-orpin.vercel.app/)

You're required to create a new "create-react-app" project called trelloyes. Remove the boilerplate so you have a clean start and then focus on building 3 components: `App`, `List`, and `Card`.

## Card.js:

- The Card component should render markup matching the design.html: a div with a class of 'Card' containing an h3 for the card's title and a p element for the card's content.
- The `Card` component accepts 2 props: `title` and `content`.
  - `title` is a string of the card's title.
  - `content` is a string of the card's content.
  - These props will be passed in for each `Card` from the `List` component.

## List.js:

- The `List` component should render markup matching the `design.html`: a section with a class of `'List'`, containing a `header` and `div` with class `'List-cards'`.
- The `List` component accepts 2 props: `header` and `cards`.
  - `header` is a string of the header of the card to render.
  - `cards` is an array of card objects. Each object should have a title and content.
  - These props will be passed in for each `List` from the `App` component.
- The `List` should render a `Card` component for each of the cards in the cards array prop.
- Each instance of the `Card` component should be passed 2 props (and a key). The 2 props are `title` and `content`.
  - The `title` prop is a string for the Card's title.
  - The `content` prop is a string of the Card's content.

## App.js:

- The `App` component should render markup matching the `design.html`: the main element, a header with the h1 and a div with class `'App-list'`.
- The `App` component will accept 1 prop, `store`.
  - The store prop is an object with 2 keys: `lists` and `allCards`.
  - `lists` is an array of objects.
  - `allCards` is an object where each key is a card's ID and the value is the card object with a title and content.
  - You'll be given a dummy `STORE` object to pass to your `App`.
- The `App` should render a `List` component for each of the items in the `store.lists` array.
- Each instance of the `List` component should be passed 2 props (and a key). The 2 props are `header` and `cards`.
  - The `header` prop is a string for the List's header.
  - The `cards` prop will be an array of card objects.
    - You'll need to combine the `cardIds` array for the list with the `allCards` object.
