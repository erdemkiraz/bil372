import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ListStudents from "./ListStudents";
import ListCourses from "./ListCourses";
import AddPerson from "./AddPerson";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {TabMenu} from "primereact/tabmenu";
import {Menu} from 'primereact/menu';

      const items= [
            {label: 'Home', icon: 'pi pi-fw pi-home', url: '/'},
            {label: 'List Students', icon: 'pi pi-fw pi-calendar', url: 'ListStudents'},
            {label: 'List Courses', icon: 'pi pi-fw pi-pencil',url : 'ListCourses'},
            {label: 'Add Person', icon: 'pi pi-fw pi-pencil',url : 'AddPerson'},
        ]



const routing = (
    <Router>
        <div>
            <div className="nav-bar">
          <TabMenu model={items} />
          </div>

            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/">Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/ListStudents">Student List</Link>*/}
            {/*    </li>*/}

            {/*</ul>*/}
            <Route path="/" component={App} />
            <Route path="/ListStudents" component={ListStudents} />
            <Route path="/ListCourses" component={ListCourses} />
            <Route path="/AddPerson" component={AddPerson} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
