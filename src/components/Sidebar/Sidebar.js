import './Sidebar.css'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {FaBars} from "react-icons/fa";
import {useState} from "react";
import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";

function Sidebar(){

    const [sidebar,setSidebar] = useState(false)

    function showSidebar(){
        setSidebar(!sidebar)
    }

    return (
        <div>
            <div className="nav">
                <div style={{marginLeft: sidebar?"50px":"0px"}} className="navIcon">
                    <FaBars onClick={showSidebar}/>
                </div>

                <div style={{width: sidebar?"250px":"50px"}} className="sidebar">
                    {SidebarData.map((item,index)=>{
                        return <SubMenu key={index} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Sidebar