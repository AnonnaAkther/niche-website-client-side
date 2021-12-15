import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home';
import Cart from './Pages/Cart/Cart/Cart';
import Explored from './Pages/Explored/Explored';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/explore">
           <Explored></Explored>
         </Route>
         <Route path="/cart">
           <Cart></Cart>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
