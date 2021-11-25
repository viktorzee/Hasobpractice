import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
// import { useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom';
// import { Button, Col, Container, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import data from '../../assets/programData'
// import { UserState } from '../../redux/reducers/userReducer';
// import { RootState } from '../../redux/storer';
// import LeftSideBar from '../NavBar/LeftSideBar';
// // import EditProgramForm from './AddPorgramModal';
// import RightSideBar from '../NavBar/RightSideBar';
// import './program.css'
// import EditProgramForm from './EditProgramModal';

// type programProps = {
//     name: string;
//     code: string | number;
//     department_id: string;
//     degree: string;
//     id: string | number;
//     handleEdit: (id?: string) => void
//     handleView: (id?: string) => void
// }

// const Programs = ({name, code, department_id, degree, id, handleEdit, handleView}: programProps) => {
//     const [showModal, setshowModal] = useState(false);
//     const [programs, setPrograms] = useState(data)
//     const navigate = useNavigate()

    

//     const userLogin = useSelector<RootState, UserState>(state => state.userLogin)

//     const {userInfo} = userLogin

//     handleEdit = (id) => {
//         navigate('ViewProgram/:id')
//     }
//     handleView = (id) => {
//         navigate('EditProgram/:id')
//     }
//     return(
//         <div className="faculty-container">
//             <div className="left-sidebar">
//                     <LeftSideBar />
//             </div>
//             <div className="center-view">
//                 <div className ="nav-section">
//                     <div>Semester</div>
//                         <div>
//                             <div >
//                                 <Button className="add-sort-btn">Add</Button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="program-table">
//                         <Table>
//                             <thead style={{backgroundColor: "black", color: 'white'}}>
//                                 <tr>
//                                     <th>S/N</th>
//                                     <th>Program Code</th>
//                                     <th>Program Name</th>
//                                     <th>Department</th>
//                                     <th>Degree Name</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {programs.map((program: { code: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; department_id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; degree: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; id: string | number; }) => {
//                                     return (
//                                         <tr>
//                                         <td></td>
//                                         <td>{program.code}</td>
//                                         <td>{program.name}</td>
//                                         <td>{program.department_id}</td>
//                                         <td>{program.degree}</td>
//                                         <td><Link to="./EditProgramModal/:id">Edit</Link></td>
//                                         <td><Link to = "./ViewProgram/:id">{program.id === id ? <EditProgramForm handleAddProgramChange={function (e: any): void {
//                                                 throw new Error('Function not implemented.');
//                                             } } handleAddProgramSubmit={function (e: any): void {
//                                                 throw new Error('Function not implemented.');
//                                             } } deleteProgram={function (id: any): void {
//                                                 throw new Error('Function not implemented.');
//                                             } } editProgram={function (id: any, editedProgram: any): void {
//                                                 throw new Error('Function not implemented.');
//                                             } } addProgramForm={function (id: any, editedProgram: any): void {
//                                                 throw new Error('Function not implemented.');
//                                             } } /> : "Edit"}</Link></td>
//                                     </tr>
//                                     )
//                                 })}
//                             </tbody>
//                         </Table>
//                     </div>
//                     <div>
//                         <Pagination>
//                             <PaginationItem disabled>
//                                 <PaginationLink
//                                 href="#"
//                                 previous
//                                 />
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#">
//                                 1
//                                 </PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#">
//                                 2
//                                 </PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#">
//                                 ...
//                                 </PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#">
//                                 9
//                                 </PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#">
//                                 10
//                                 </PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                             <PaginationLink
//                                 href="#"
//                                 next
//                             />
//                             </PaginationItem>
//                             <PaginationItem>
//                             <PaginationLink
//                                 href="#"
//                                 last
//                             />
//                             </PaginationItem>
//                         </Pagination>
//                     </div>
//                 </div>
//             <div className="right-sidebar">
//                <div className="right-sidenav">
//                     <RightSideBar />
//                 </div> 
//             </div>
//         </div>
//     )
// }

// export default Programs;


//                 {/* <div className="loginmodal-container">
//                     <div className="loginModal">
//                         <EditProgramForm handleEditProgramChange={function (e: any): void {
//                         throw new Error('Function not implemented.');
//                     }} handleEditProgramSubmit={function (e: any): void {
//                             throw new Error('Function not implemented.');
//                         }} 
//                         />
//                     </div>
//                 </div> */}