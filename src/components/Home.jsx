import React, { useContext } from 'react';
import Banner from './Banner';
import Category from './Category';
import OurJourney from './OurJourney';
import TotalSell from './TotalSell';
import { Context } from '../context/AppContext';

const Home = () => {
  const { dark } = useContext(Context);
  return (
    <>
      <Banner />
      <Category dark={dark} />
      <OurJourney dark={dark} />
      <TotalSell dark={dark} />
    </>
  );
};

export default Home;
