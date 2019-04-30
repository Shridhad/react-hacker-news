import React from 'react';
import HomeView from './views/home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import StoryView from './views/story/Story';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
      </div>

      <Route path="/" exact component={HomeView}></Route>
      <Route path="/item/:id" exact component={StoryView}></Route>
    </BrowserRouter>
  );
}

export default App;
