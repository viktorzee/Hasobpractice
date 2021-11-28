import { useState } from "react";
import Logo from '../../assets/Logo.png';

import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/features/userSlice";
import { FaBell, FaLongArrowAltLeft, FaPhone, FaEnvelope, FaLink } from "react-icons/fa";
import './Rightsidebar.css'

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
        <div className="rightside-container">
                <div className="nav-icons">
                    <div><FaBell size="10px" className="notification"/></div>
                    <div>
                        <Link to = '/' onClick= {handleLogout}>< FaLongArrowAltLeft size="10px" className="logout"/></Link>
                    </div>
                </div>
                <div className="mapoly-container">
                    <div className="logo-text">
                        <div>
                            <img src={Logo} alt='Logo' className='logo' width="40px" />
                        </div>
                        <div>
                            <h3 className="moshood">Moshood Abiola Polytechnic<span className="polytechnic">Abeokuta</span></h3>
                        </div>
                        
                    </div>
                    <div>
                        <p style={{marginTop:"10px"}}><a href = "mailto:rector@mapoly.edu.ng?subject=Enquires"><span className= "mapolyLinks"><FaEnvelope size="10px"/></span> rector@mapoly.edu.ng</a></p>
                        <p><a href = "tel:+2347063331234"><span className= "mapolyLinks"><FaPhone size="10px"/></span> +2347063331234</a></p>
                        <p className="last-item"><a href = "https://mapoly.edu.org"><span className= "mapolyLinks"><FaLink size="10px"/></span> https://mapoly.edu.org</a></p>
                    </div>
                </div>
                <div>
                    <Calender 
                        onChange={onChange}
                        value={value}
                        className="date"
                    />
                </div>
                <div className="quicklink">
                    <h3 className="quicklink-header">Quick Links</h3>
                    <p><a href= '#' className="quicklinks">Staff Forum</a></p>
                    <p><a href= '#' className="quicklinks">Learning Resources</a></p>
                    <p><a href= '#'className="quicklinks last-item">Time Tables</a></p>
                </div>
            </div>
    )
}   
    
   

export default RightSideBar;

