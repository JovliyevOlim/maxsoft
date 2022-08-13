import {Link} from 'react-router-dom'
import './Sidebar.css'
import styled from 'styled-components'
import {BsFillRecordCircleFill} from 'react-icons/bs'
import {useState} from "react";

function SubMenu({item,toggle,isOpen,active,setactive,classes}){

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
        setactive(item.title)
        setLinkActive('')

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
        padding-left: 3rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        transition: all 0.2s ease;
      
    `

    function activelink(){
        setactive(item.title)
        setLinkActive('')

    }

    const [link,setLinkActive] = useState('')

    function setLink(title){
        setLinkActive(title)
    }
    return (
        <div className={classes}>
            <SidebarLink  className={active}   to={item.path} onClick={item.subNav ? item.subNav && showSubnav : activelink}>
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
            {item.subNav || subnav ? item.subNav.map((item,index)=>{
                return (

                        <DropdownLink onClick={()=>setLink(item.title)} className={active+" "+(item.title === link ? "linkactive":'')} to={item.path} key={index}>
                            <BsFillRecordCircleFill className={'link-icon' + " "+(item.title === link ? "link-icon-active":'')}/>
                            <p>{item.title}</p>
                        </DropdownLink>
                )
            }) :''}
        </div>
    )
}
export default SubMenu
