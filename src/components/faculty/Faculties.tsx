import { useState } from "react";
import LeftSideBar from "../NavBar/LeftSideBar";
import data from '../../assets/Facultylist.json'
import dataOne from '../../assets/programData.json'
import { Link } from "react-router-dom";
import RightSideBar from "../NavBar/RightSideBar";
import './faculties.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewFacultyModal from "../modals/NewFacultyModal";
import logo from '../../assets/logo.png'



const Faculties = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [faculties, setFaculties] = useState(data);
    const [selectedFile, setSelectedFile] = useState(null)
    const [input, setInput] = useState({
        name: "",
        code: "",
        id: "",
        number: "", 
        email: "",
        webpage: "",
        address: "",
    })
    

    const handleInputChange = (e: any): void => {
       setFaculties(e.target.value)
    }
    const handleFileChange = (e: any):void => {
        setSelectedFile(e.target.files[0])
    }
    
    return(
        <>
            <div className="faculty-container">
            <div className="">
                <LeftSideBar />
            </div>


            <div className="center-view">
                <div className="heading">
                    <div className="text-container">
                        <p className="faculty-text">Faculties</p>
                    </div>
                        <div className="float-right addNew">
                            <div>
                        <button
                            className="btn float-right"
                            onClick={() => setAddModal(true)}
                        >
                            Add +
                        </button>
                        <select className="select">
                            <option>Select</option>
                            <option value="byCreated">By Created</option>
                            <option value="byUpdated">By updated</option>
                            <option value="alphabetical">Alphabetical</option>
                                </select>
                            </div>
                    </div>
                </div>
    <div className="faculty-list-container">
        
        {faculties.map((faculty, index) => (
            <div className="faculty-list" key={faculty.id}>

                <div className="faculty-details">
                    <div className="faculty-logo"><img src={logo} alt="logo" /></div>
                    <div key= {index} className="faculty-data">
                        <h3>{faculty.faculty}</h3>
                       <p>{faculty.location}</p>
                       <p>{faculty.phoneNumber}</p>
                       <p>{faculty.email}</p>
                       <span><Link to = "">Edit</Link></span>
                       <span><Link to='../programs/ViewProgram'>Delete</Link></span>
                   </div>
               </div>
            </div>
        ))}
       
    </div>
            </div>




            {/*Add new faculty modal */}
            {/* {showModal === true && (
        <div className = "new-facultyModal-container">
            <div className = "new-facultyModal">
                <NewFacultyModal />
            </div>
        </div>
    )} */}
            {/*edit faculty modal */}
            {/* {showModal === true && (
        <div className = "edit-facultyModal-container">
            <div className = "edit-facultyModal">
                <EditFacultyModal />
            </div>
        </div>
    )} */}
            {/*New Modal */}



            {/* For right sidebar */}
                <div className="">
                    <RightSideBar />
                </div>
        </div>
            <NewFacultyModal modalIsOpen={addModal} setModalOpen={setAddModal}/>
        </>
    )
}

export default Faculties;