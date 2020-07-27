import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {

  const initialState = useInitialState(API);

  return (
    <div className="App">

      <Header/>
      <Search/>

      {initialState.mylist.length > 0 &&
      <Categories listName="My list">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>
      }

      <Categories listName="Trends">
        <Carousel>
          {
            initialState.trends.map(video => <CarouselItem key={video.id} {...video}/>)
          }
        </Carousel>
      </Categories>

      <Categories listName="Originals">
        <Carousel>
          {
            initialState.originals.map(video => <CarouselItem key={video.id} {...video}/>)
          }
        </Carousel>
      </Categories>
      <Footer/>
    </div>
  );
};

export default App;
