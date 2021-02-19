import React, { Component} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './Navigation/Home';
import Login from './Navigation/Login';
import Register from './Navigation/Register';
import Products from './Navigation/Products';
import About from './Navigation/About';
import Cat1 from './Cat1';
import Edit from './Navigation/Edit';
import Category from './Navigation/Category' ;
import './MainPage.css';    



class MainPage extends Component {
  render() {
    return (
      <>
        <header className="header">
        <Router>
          <div className="header-nav">
            <div className="header-nav_len">
              
            <Link className="header-nav__item" to="/Home/">HOME</Link>
            <Link className="header-nav__item" to="/Login/">LOGIN</Link>
            <Link className="header-nav__item" to="/Register/">REGISTER</Link>
            <Link className="header-nav__item" to="/Products/">PRODUCTS</Link>
            <Link className="header-nav__item" to="/Category/">CATEGORY</Link>
            <Link className="header-nav__item" to="/About/">ABOUT</Link>



            </div>
            <div className="inside">
              <Switch>
          <Route exact path="/" component={Home}/>  
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} /> 
          <Route path="/Products" component={Products} /> 
          <Route exact path="/Category" component={Category} /> 
          <Route path="/Category/:id(80|90|67)/:name?" component={Edit}></Route>


          {/* <Route path="/Category/:id(\d)" component={Cat1}></Route> */}

          <Route path="/About" component={About} /> 
          <Route path="*" render={() => 
            <div>
              <h1> 404</h1>
              <h5>Data Not Found</h5>
            </div>
          } />
          </Switch>
        </div>
          </div>
          </Router>
        </header>
      </>
    );
  }
}


export default MainPage;
// const CategoryDetail =({match})=>{
//   return <h1>Category Values:{match.params.id}</h1>
// }
// const Category=({match})=>{
//   console.log(match.url);
//   return(
//     <div>
//       <Link to={'${match.url}/5'}>Page 1</Link>
//       <Link to={'${match.url}/1'}>Page 2</Link>
//       <Link to={'${match.url}/3'}>Page 3</Link>
//       <Link to={'${match.url}/4'}>Page 4</Link>

//     </div>
//   )
// }
