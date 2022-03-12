import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSideBar from '../NavBar/LeftSideBar';
import RightSideBar from '../NavBar/RightSideBar';
import data from '../../assets/programData.json'
import './program.css'


const Programs = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [programs, setPrograms] = useState(data)
    // const [modal, toogleModal] = useState(false);
    const [addFormData, setAddFormData] = useState({
        
        code: "",
        name: "",
        department_id: "",
        degree: ""
    })

    const toggleEditModal = ():void => setEditModal(!editModal)

    const navigate = useNavigate()

    const handleAddProgramOnChange = (e:any) =>{
        e.prevemtDefault();

        const fieldName:any = e.target.getAttribute("name");
        const fieldValue = e.target.value.value;

        const newFormData:any = {...addFormData};
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData);
    }

    // const handleAddProgramSubmit = (e: any): void => {
    //     e.preventDefault();

    //     const newProgram = {
    //         id: uuidv4(),
    //         code: addFormData.code,
    //         name: addFormData.name,
    //         department_id: addFormData.department_id,
    //         degree: addFormData.degree
    //     }

    //     const newPrograms = [...programs, newProgram]
    //     setPrograms(newPrograms)
    // }

    const handleViewButton = (id?: string):void => {
        navigate('EditProgram/:id')
    }
    return(
        <div className="program-container">
                <LeftSideBar />
            <div className="center-view">
                <div className="heading">
                    <div className="text-container">
                        <p className="faculty-text">Semester</p>
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
                <div className="program-table">
                    <table className="table">
                        <thead style={{ backgroundColor: "black", color: 'white' }} className="table-header">
                            <tr style={{borderWidth: "1px"}}>
                                <th className='header-data'>S/N</th>
                                <th className='header-data'>Program Code</th>
                                <th className='header-data'>Program Name</th>
                                <th className='header-data'>Department</th>
                                <th className='header-data'>Degree Name</th>
                                <th className='header-data'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.map((program: any, index: any) => {
                                return(
                                    <tr key={index} className="tbody-row">
                                        <td>{index+1}</td>
                                        <td>{program.code}</td>
                                        <td>{program.name}</td>
                                        <td>{program.department_id}</td>
                                        <td>{program.degree}</td>
                                        <td >
                                            <tr>
                                                <td className="view-link"><Link to="" style={{color: "blue", textDecoration: "none"}}>View</Link></td>
                                                <td className="edit-link" onClick={toggleEditModal}><Link to="" style={{color: "blue", textDecoration: "none"}}>Edit</Link></td>
                                            </tr>                           
                                        </td>  
                                    </tr>
                                )
                                   
                            })}
                        </tbody>
                    </table>
                <div>
                    <Pagination className="page-numbers">
                        <PaginationItem disabled>
                            <PaginationLink
                                href="#"
                                previous />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                ...
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                9
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                10
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                next />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>

            
        </div>
                <RightSideBar />
        </div>
    )
}

export default Programs;


//               
//                     