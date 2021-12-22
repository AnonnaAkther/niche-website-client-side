import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Cart from './Pages/Cart/Cart/Cart';
import Explored from './Pages/Explored/Explored';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/explored">
           <Explored></Explored>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
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
     </AuthProvider>
    </div>
  );
}

export default App;
