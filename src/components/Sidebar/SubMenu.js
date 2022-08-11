import {Link} from 'react-router-dom'
import './Sidebar.css'
import styled from 'styled-components'
import {useState} from "react";

function SubMenu({item,toggle,isOpen}){

    const SidebarLink = styled(Link)`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      list-style: none;
      height: 50px;
      text-decoration: none;
      font-size: 18px;
      color: #000;
      &:hover{
        background: #252831;
        cursor: pointer;
        color: #fff;
      }
    `

    const [subnav,setSubnav] = useState(false)
    function showSubnav(){
        setSubnav(!subnav)
    }

    const SidebarLabel = styled.span`
      margin-left: 16px;
    `;

    const SideIcon = styled.span`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `

    const DropdownLink = styled(Link)`
        //background: #252831;
        height: 45px;
        padding-left: 3.5rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        transition: all 0.2s ease;
      &:hover{
        border: 1px solid gray;
        transform: scale(1.1);
        //background: gray;
        border-radius: 30px;
        cursor: pointer;
        margin-left: 8px;
        color: #000;
        width: 80%;
      }
    `

    return (
        <>
            <SidebarLink  to={item.path} onClick={item.subNav && showSubnav}>
                <div className={'d-flex align-items-center'}>
                    <div>
                        {item.icon}
                    </div>
                    <SidebarLabel>{item.title}</SidebarLabel>   <div>
                </div>
                </div>
                <SideIcon>
                    <div>
                        {isOpen?item.subNav && subnav ? item.iconClosed:item.subNav ?item.iconOpened:null:''}
                        {/*{item.subNav && subnav ? item.iconClosed:item.subNav ?item.iconOpened:null}*/}
                    </div>
                </SideIcon>
            </SidebarLink>
            {subnav && item.subNav.map((item,index)=>{
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.title}
                    </DropdownLink>
                )
            })}
        </>
    )
}
export default SubMenu
