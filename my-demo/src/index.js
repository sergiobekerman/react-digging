import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Master from './Master';
import Notfound from './NotFound'
import Empty from './Empty'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'


const routing = (
    <BrowserRouter>
      <div id="wrapper">
      <Sidebar/>
  
  {/* <!-- Content Wrapper --> */}
  <div id="content-wrapper" class="d-flex flex-column">

    {/* <!-- Main Content --> */}
    <div id="content">

    <Topbar/>

        <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/app" component={App} />
            <Route path="/empty" component={Empty} />
            <Route path component={Notfound} />
        </Switch>

    </div>
    {/* <!-- End of Main Content --> */}

    <Footer/>
  </div>
  {/* <!-- End of Content Wrapper --> */}
      

      </div>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<Master hola="Enter you email" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
