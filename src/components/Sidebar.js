import {FaBars} from 'react-icons/fa'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import '../components/Sidebar/Sidebar.css'
import SidebarData from "./Sidebar/SidebarData";
import SubMenu from "./Sidebar/SubMenu";
import {FaDashcube} from 'react-icons/fa'
function Sidebar({toggle,isOpen}){


    return (
            <div className={`${isOpen?'sidebar2':''} sidebar `}>
                <div>
                    {
                        SidebarData.map((item,index)=>{
                            return <SubMenu isOpen={isOpen} toggle={toggle} item={item} key={index}/>
                        })
                    }
                </div>
            </div>
    )
}
export default Sidebar
