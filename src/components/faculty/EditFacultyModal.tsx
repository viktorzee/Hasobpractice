import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const EditFacultyForm = () => {
   return(
    <div className = "modal-container">
    <div className="modal-contents">
        <h2>Create new Faculty</h2>
         <Form>
             <FormGroup>
                 <Label>Name:</Label>
                 <Input 
                     type="text" 
                     name="name" 
                     id="name-field" 
                     placeholder="Input name of department" 
                 />   
             </FormGroup>
               
             <FormGroup>
                 <Label>ID</Label>
                <Input 
                     type="number" 
                     name="id" 
                     id="faculty-id" 
                     placeholder="Input Faculty Id" 
                 /> 
             </FormGroup>
                
             <FormGroup>
                 <Label>Phone #</Label>
                 <Input 
                     type="number" 
                     name="phone" 
                     id="contact" 
                     placeholder="Input Phone Nunmber" 
                 />
             </FormGroup>
             
             <FormGroup>
                <Label>Email</Label>
                 <Input 
                     type="email" 
                     name="email" 
                     id="email" 
                     placeholder="Input Email Address" 
                 /> 
             </FormGroup>
             
             <FormGroup>
                <Label>Web Page</Label>
                 <Input 
                     type="text" 
                     name="webpage" 
                     id="webpage" 
                     placeholder="Input Faculty web link" 
                 />
             <FormGroup> 
             </FormGroup>
                 <Label>Address</Label>
                 <Input 
                     type="text" 
                     name="address" 
                     id="address" 
                     placeholder="Input Physical address of department" 
                 />
             </FormGroup>
             
             <FormGroup>
                 <Label>Head of Faculty</Label>
                 <Input type="select" name="facultyHead" id="faculty-head">
                     <option value="">Prof AA</option>
                     <option value="">Prof AB</option>
                     <option value="">Prof ME</option>
                     <option value="">Prof CE</option>
                     <option value="">Prof OS</option>
                     <option value="">Prof ID</option>
                 </Input>
             </FormGroup>
             

             <Input type="file" name="file" id="logo-upload" />

            <Button className='cancel-btn'>Cancel</Button>
            <Button className='save-btn'>Save</Button>
         </Form> 
    </div>
    <div>
        
    </div>
</div>
   )
}

export default EditFacultyForm