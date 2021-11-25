import { useState } from "react";
// import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
// import data from '../../assets/programData';
// // import Program from './Program'
// import { v4 as uuidv4 } from 'uuid'
// import ProgramData from "../../assets/programData";

// type programControlProps = {
//     handleAddProgramChange: (e: any) => void;
//     handleAddProgramSubmit: (e: any) => void
//     deleteProgram: (id: any) => void
//     editProgram:(id:any, editedProgram: any) => void
//     addProgramForm:(id:any, editedProgram: any) => void
// }



// const ProgramControl = ({handleAddProgramChange, handleAddProgramSubmit, editProgram}: programControlProps, _props: any) => {
//     const [programs, setPrograms] = useState(ProgramData.data)
//     const [addFormData, setaddFormData] = useState({
//         name: '',
//         code: '',
//         type: '',
//         department:'',
//         degree: '',
//     })
//     const [editProgramId, setEditProgramId] = useState(null)
    
//     {}
//     // const [editProgram, setEditProgram] = useState({
//     //     id: uuidv4(),
//     //     name: '',
//     //     code: '',
//     //     type: '',
//     //     department:'',
//     //     degree: '',
//     // })  
//     handleAddProgramChange =(e) => {
//         e.preventDefault();

//         const fieldName: string | number = e.target.getAttribute('name');
//         const fieldValue = e.target.value;
//         const newProgramFormData = {...addFormData}
//         newProgramFormData[fieldName] = fieldValue

//         setaddFormData(newProgramFormData)
//     }
    
//     handleAddProgramSubmit = (e) => {
//         e.preventDefault();

//         const addNewProgram = {
//             id: uuidv4(),
//             name: addFormData.name,
//             code: addFormData.code,
//             type: addFormData.type,
//             department:addFormData.department,
//             degree: addFormData.degree
//         }
//         const addProgram:any = [...programs, editProgram]
//         setPrograms(addProgram)
//     }
//    return(
//     <div className = "modal-container">
//     <div className="modal-content">
//         <h2>Add Program</h2>
         
        
//     </div>
//     <div>
//         <Modal >
//             <ModalHeader closeButton>
//                 <p>Edit Program</p>
//             </ModalHeader>
//             <ModalBody>
//                 <Form>
//              <FormGroup>
//                  <Label>Name</Label>
//                  <Input 
//                      type="text" 
//                      name="name" 
//                      id="name-field" 
//                      value= "name"
//                      placeholder="Input Program Name--"
//                      onChange= {handleAddProgramChange} 
//                  /> 
//              </FormGroup>
                
//              <FormGroup>
//                  <Label>Code</Label>
//                  <Input 
//                      type="number" 
//                      name="code" 
//                      id="program-code" 
//                      value= "code"
//                      placeholder="Input Program Code--" 
//                      onChange={handleAddProgramChange}
//                  />  
             
//                  <Label>Type</Label>
//                  <Input type="select" name="facultyHead" id="faculty-head" value= "type" onChange={handleAddProgramChange}>
//                      <option value="" disabled>--Choose Program Type</option>
//                      <option value="">Full TIme</option>
//                      <option value="">Part time</option>
//                      <option value="">Weekend</option>
//                  </Input>
//              </FormGroup>
             
//              <FormGroup>
//                  <Label>Department</Label>
//                  <Input type="select" name="facultyHead" id="faculty-head" value= "department" onChange={handleAddProgramChange}>
//                      <option value="" disabled>--Choose Department--</option>
//                      <option value="">Mechnical Engineering</option>
//                      <option value="">Chemical Engineering</option>
//                      <option value="">Pertroleum Engineering</option>
//                      <option value="">Food Science and Technology</option>
//                      <option value="">Metergulry</option>
//                  </Input>
//              </FormGroup>
             
//              <FormGroup>
//                  <Label>Degree</Label>
//                  <Input type="select" name="facultyHead" id="faculty-head"  value= "degree" onChange={handleAddProgramChange}>
//                      <option value="" disabled>--Choose Degree--</option>
//                      <option value="">B.Eng</option>
//                      <option value="">B.Sc</option>
//                      <option value="">B.A</option>
//                      <option value="">B.Edu</option>
//                  </Input>
//              </FormGroup>

//              <p> Requirements</p>

//              <FormGroup>
//                  <Label>Mandatory credit Load</Label>
//                  <Input 
//                      type="number" 
//                      name="creditLoad" 
//                      id="credit-load" 
//                  />
//              </FormGroup>
             
//              <FormGroup>
//                  <Label>Minimum Credit Load</Label>
//                  <Input 
//                      type="number" 
//                      name="maxCreditLoad" 
//                      id="credit-load" 
//                  />
//              </FormGroup>
            
//              <FormGroup>
//                  <Label>Minimum Credit Load</Label>
//                  <Input 
//                  type="number" 
//                  name="minCreditLoad" 
//                  id="credit-load" 
//                  />
//              </FormGroup>
             
            
//              <FormGroup>
//                  <Label>Program Logo</Label>
//                  <Input type="file" name="file" id="logo-upload" />
//              </FormGroup>
//              <Button className='cancel-btn'>Cancel</Button>
//              <Button className='save-btn'>Save</Button>
//          </Form> 
//             </ModalBody>
//         </Modal>
//     </div>
//     <div>

//     </div>
// </div>
//    )
// }

// export default ProgramControl

