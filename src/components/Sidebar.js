
import {useState} from "react";
import '../components/Sidebar/Sidebar.css'
import SidebarData from "./Sidebar/SidebarData";
import SubMenu from "./Sidebar/SubMenu";
import {FiSettings} from 'react-icons/fi'
import {GoSettings} from 'react-icons/go'
import {ImEarth} from 'react-icons/im'
function Sidebar({toggle,isOpen}){

    const [active,setactive] = useState('Overview')

    function setactive2(title){
        setactive(title)
    }

    return (
            <div className={`${isOpen?'sidebar2':''} sidebar`} style={{maxWidth:'467px'?`${toggle}`:''}} >
                <div >
                    {
                        SidebarData.map((item,index)=>{
                            return <SubMenu  isOpen={isOpen} toggle={toggle} item={item} active={item.title === active ? "active":''} setactive={setactive2}  key={index}/>
                        })
                    }
                </div>
                <div  className={`${isOpen?'sidebar2':''} Sidebarsettings`}>
                    <GoSettings className={'go'}/>
                    <ImEarth className={'go'}/>
                    <FiSettings className={'go'}/>
                </div>

            </div>
    )
}
export default Sidebar
