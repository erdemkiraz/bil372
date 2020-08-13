import React from 'react';
import './App.css';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import logo from "./img/tobb.png"
import {TabMenu} from "primereact/tabmenu";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        // items: [
        //     {label: 'Home', icon: 'pi pi-fw pi-home'},
        //     {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        //     {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        //     {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        //     {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        // ]
    };
}

  render() {
    return (
      <div><h1>Admin Panel</h1></div>
    )
  }
}
export default App