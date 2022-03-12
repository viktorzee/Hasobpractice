import { useState } from "react";
import logo from '../../assets/logo.png';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/features/userSlice";
import { FaBell, FaLongArrowAltLeft, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import './Rightsidebar.css'
import { IoNotificationsOutline, IoPower } from "react-icons/io5";

type RightSideBarProps = {
    handleLogout?: (e: any) => void 
}


const RightSideBar = ({ handleLogout}: RightSideBarProps) => {
    const [value, onChange] = useState(new Date());
    // const dispatch = useDispatch()
    const navigate = useNavigate();

    handleLogout  =(e) => {
        e.preventDefault();
        // dispatch(logoutUser())
        navigate('/Home')
    }

    return(
        <><div className="rightside-container">
            <div className="right-container">
                <div className="nav-icons">
            <IoNotificationsOutline size="1.5rem" className="notification" />
            <Link to='/' onClick={handleLogout}><IoPower size="1.5rem" className="logout" /></Link>
        </div>
                <div className="mapoly-container">
                    <div className="logo-text">
                        <img src={logo} alt='Logo' className='logo' width="40px" />
                        <h2 className="moshood">Moshood Abiola Polytechnic Abeokuta</h2>

                    </div>
                    <div className="links">
                        <p style={{ marginTop: "10px" }}><a href="mailto:rector@mapoly.edu.ng?subject=Enquires" className="link-text"><span className="mapolyLinks"><FaEnvelope size="10px" /></span> rector@mapoly.edu.ng</a></p>
                        <p><a href="tel:+2347063331234" className="link-text"><span className="mapolyLinks"><FaPhone size="10px" /></span> +2347063331234</a></p>
                        <p className="last-item "><a href="https://mapoly.edu.org" className="link-text"><span className="mapolyLinks"><FaLink size="10px" /></span> https://mapoly.edu.org</a></p>
                    </div>
                </div>
                <div>
                    <Calender
                        onChange={onChange}
                        value={value}
                        className="react-calendar" />
                </div>
                <div className="quicklink">
                    <h3 className="quicklink-header">Quick Links</h3>
                    <p><a href='#' className="quicklinks">Staff Forum</a></p>
                    <p><a href='#' className="quicklinks">Learning Resources</a></p>
                    <p><a href='#' className="quicklinks last-item">Time Tables</a></p>
                </div>
            </div>
        </div>
        </>
    )
}   
    
   

export default RightSideBar;

