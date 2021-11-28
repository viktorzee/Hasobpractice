import { Nav, NavItem, NavLink } from "reactstrap";
import { FaDesktop, FaHashtag, FaAddressCard, FaBookOpen, FaBinoculars, FaCog, FaRoute } from "react-icons/fa";
import './leftsidebar.css'

const LeftSideBar = () => {
    return(
        <div className="sidebar-container">
            <Nav 
                className="col-md-8 d-none d-md-block  sidebar"
                >
                <div className="sidebar-sticky"></div>
                <NavItem >
                    <NavLink href = "/" className='link'><FaDesktop size="20px"/></NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaHashtag size="20px"/>Dashboard</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaAddressCard size="20px"/>Semester</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/faculties" className='link'><FaBookOpen size="20px"/>Faculty</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/programs" className='link'><FaBookOpen size="20px"/>Programs</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaBinoculars size="20px"/>Class</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaCog size="20px"/>Settings</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/" className='link'><FaRoute size="20px"/>Logout</NavLink>
                    </NavItem>
            </Nav>
        </div>
    )
}

export default LeftSideBar;