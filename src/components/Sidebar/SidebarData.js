
import {
    FaChartPie,
    FaLock,
    FaSortUp,
    FaHandsHelping, FaSortDown
} from 'react-icons/fa'
import {BsFillFileEarmarkBarGraphFill } from 'react-icons/bs'
import {GiShoppingBag} from 'react-icons/gi'
import {RiMessage2Fill} from 'react-icons/ri'
import {SiReadthedocs} from 'react-icons/si'
import {BsCollectionFill} from 'react-icons/bs'

const SidebarData = [
    {
      title: "Overview",
      path: "/overview",
      icon: <FaChartPie/>
    },
    {
      title: "Pages",
      path: "/pages",
      // icon: <FaLayerGroup/>,
      icon: <BsFillFileEarmarkBarGraphFill/>,
      iconClosed: <FaSortUp/>,
      iconOpened: <FaSortDown/>,
      subNav: [
          {
              title: "Page-1",
              path: "/pages/page-1"
          },
          {
              title: "Page-2",
              path: "/pages/page-2"
          },
      ]
    },
    {
      title: "Sales",
      path: "/sales",
      icon: <GiShoppingBag/>,
      iconClosed: <FaSortUp/>,
      iconOpened: <FaSortDown/>,
      subNav: [
          {
              title: "Product-list",
              path: "/sales/product-list"
          },
          {
              title: "Billing",
              path: "/sales/bill"
          },
          {
              title: "Invoice",
              path: "/sales/invoice"
          },
      ]
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <RiMessage2Fill/>
    },
    {
        title: "Authentication",
        path: "/authentication",
        icon: <FaLock/>,
        iconClosed: <FaSortUp/>,
        iconOpened: <FaSortDown/>,
        subNav: [
            {
                title: "auth - 1",
                path: "/authentication/auth-1"
            },
            {
                title: "auth-2",
                path: "/authentication/auth-2"
            },
        ]
    },
    {
        title: "Docs",
        path: "/docs",
        icon: <SiReadthedocs/>
    },
    {
        title: "Components",
        path: "/components",
        icon: <BsCollectionFill/>
    },
    {
        title: "Help",
        path: "/help",
        icon: <FaHandsHelping/>
    },
]
export default SidebarData
