import React from 'react';
import ItemContainer from '../components/ItemContainer';

const Home = ({ search, cart, setCart }) => {
  return (
    <>
      <ItemContainer search={search} cart={cart} setCart={setCart} />
    </>
  );
};

export default Home;