
import {
    FaLayerGroup,
    FaChartPie,
    FaNewspaper,
    FaPager,
    FaBriefcase,
    FaLock,
    FaSortUp,
    FaCommentAlt,
    FaBars,
    FaHandsHelping, FaSortDown
} from 'react-icons/fa'
const SidebarData = [
    {
      title: "Overview",
      path: "/overview",
      icon: <FaChartPie/>
    },
    {
      title: "Pages",
      path: "/pages",
      icon: <FaLayerGroup/>,
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
      icon: <FaBriefcase/>,
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
        icon: <FaCommentAlt/>
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
        icon: <FaNewspaper/>
    },
    {
        title: "Components",
        path: "/components",
        icon: <FaPager/>
    },
    {
        title: "Help",
        path: "/help",
        icon: <FaHandsHelping/>
    },
]
export default SidebarData