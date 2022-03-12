import { Nav, NavItem, NavLink } from "reactstrap";
import { FaDesktop, FaHashtag, FaAddressCard, FaBookOpen, FaBinoculars, FaCog, FaRoute } from "react-icons/fa";
import { SiGoogleclassroom} from "react-icons/si";
import './leftsidebar.css'
import { IoPower } from "react-icons/io5";

const LeftSideBar = () => {
    return(
        <div className={`min-h-screen h-full bg-blue text-white w-28 absolute lg:static
        py-4 flex flex-col items-center transition-all duration-300 ease-in-out sidebar-container`}>
            <Nav 
                className="col-md-8 d-none d-md-block  sidebar"
                >
                <div className="sidebar-sticky"></div>
                <NavItem >
                    <NavLink href = "/" className='link' style={{marginBottom:"40px"}}><FaDesktop size="17px"/></NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='w-full py-2 my-1 link'><FaHashtag size="17px " />
                        Dashboard</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaAddressCard size="17px"/>Semester</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/faculties" className='link'><SiGoogleclassroom size="17px"/>Faculty</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/programs" className='link'><FaBookOpen size="17px"/>Programs</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><SiGoogleclassroom  size="17px"/>Class</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="#" className='link'><FaCog size="17px"/>Settings</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink href="/" className='link'><IoPower size="17px"/>Logout</NavLink>
                    </NavItem>
            </Nav>
        </div>
    )
}

export default LeftSideBar;