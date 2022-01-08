import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import AwesomeProducts from './Pages/AwesomeProducts/AwesomeProducts';
import Cart from './Pages/Cart/Cart/Cart';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Explored from './Pages/Explored/Explored';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/Payment/Payment';
import Review from './Pages/Review/Review';
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
         <Route path="/explore">
           <Explored></Explored>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <PrivateRoute path="/cart">
           <Cart></Cart>
         </PrivateRoute>
         <Route path="/addProduct">
           <AddProduct></AddProduct>
         </Route>
         <Route path="/review">
           <Review></Review>
         </Route>
         <Route path="/awesomeProducts">
           <AwesomeProducts></AwesomeProducts>
         </Route>
         <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
         </Route>
         <Route path="/dashboard">
           <Dashboard></Dashboard>
         </Route>
         <Route path="/pay">
           <Payment></Payment>
         </Route>
         <Route path="/manageProducts">
           <ManageProducts></ManageProducts>
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
