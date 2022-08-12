import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Overview from "./components/SidebarPages/Overview";
import Pages from "./components/SidebarPages/Pages";
import Sales from "./components/SidebarPages/Sales";
import Messages from "./components/SidebarPages/Messages";
import Authentication from "./components/SidebarPages/Authentication";
import Docs from "./components/SidebarPages/Docs";
import Components from "./components/SidebarPages/Components";
import Help from "./components/SidebarPages/Help";
import './App.css'
import Page1 from "./components/SidebarPages/PagesChildren/Page1";
import Page2 from "./components/SidebarPages/PagesChildren/Page2";
import ProductList from "./components/SidebarPages/PagesSales/Product-list";
import Bill from "./components/SidebarPages/PagesSales/Bill";
import Invoice from "./components/SidebarPages/PagesSales/Invoice";
import Auth1 from "./components/SidebarPages/PagesAuth/Auth1";
import Auth2 from "./components/SidebarPages/PagesAuth/Auth2";
import Navbar from './components/Navbar'
import {useState} from 'react'
function App(){

    const [isOpen,setIsOpen] = useState(false)

    function toggle(){
        setIsOpen(!isOpen)
    }


    return (<div>
        <BrowserRouter>
                <Navbar toggle={toggle}/>
            <hr/>
            <div className={'d-flex gap-3'}>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <div className={'pages2'}>
                    <Switch>
                        <Route path={"/pages/page-1"} component={Page1}/>
                        <Route path={"/pages/page-2"} component={Page2}/>
                        <Route path={"/sales/product-list"} component={ProductList}/>
                        <Route path={"/sales/bill"} component={Bill}/>
                        <Route path={"/sales/invoice"} component={Invoice}/>
                        <Route path={"/messages"} component={Messages}/>
                        <Route path={"/authentication/auth-1"} component={Auth1}/>
                        <Route path={"/authentication/auth-2"} component={Auth2}/>
                        <Route path={"/docs"} component={Docs}/>
                        <Route path={"/components"} component={Components}/>
                        <Route path={"/help"} component={Help}/>
                        <Route path={"/"} component={Overview}/>
                    </Switch>
                </div>
            </div>

        </BrowserRouter>

    </div>)

}
export default App
