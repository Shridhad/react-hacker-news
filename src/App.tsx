import React from 'react';
import HomeView from './views/home/Home';
import StoryView from './views/story/Story';
import Header from './components/header/Header';
import {BrowserRouter, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Route path="/" exact component={HomeView}></Route>
      <Route path="/item/:id" exact component={StoryView}></Route>
    </BrowserRouter>
  );
}

export default App;
