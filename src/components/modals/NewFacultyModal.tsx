import { ModalProps } from "../../types/ModalProps";
import Modal from '../Modal';
import { IoClose } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddFacultyModal = ({ modalIsOpen, setModalOpen }: ModalProps) => {
  let initialValues = { name: '', code: '', website_url: '', email_address: '', contact_phone: '', 
                        physical_location: '', campus_location: '', category: '', logo: ""} 
                        
  return (
    <Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} >  
      <div className="flex items-center justify-end mb-4">
        <button className="text-3xl" onClick={() => setModalOpen(false)}> 
          <IoClose />
        </button>
      </div>
      <div className="flex flex-col items-center px-4 md:px-5 mb-32 space-y-7">
        <h2 className="text-blue text-3xl">Create New Faculty</h2>
        <Formik
       initialValues={initialValues}
       enableReinitialize={true}
       validationSchema={Yup.object({
            name: Yup.string().required('Name is Required'),
            code: Yup.string().required('Code is Required'),
            website_url: Yup.string(),
            email_address: Yup.string().email().required('Email Address is required'),
            contact_phone: Yup.number().min(11).positive("Must be positive").label('Contact Number'),
            physical_location: Yup.string(),
            campus_location: Yup.string(),
            category: Yup.string().required('Type is Required'),

          })}
          onSubmit={ async (values, actions) => {
            let formData = new FormData();
            formData.append("name", values.name );
            formData.append("code", values.code); 
            formData.append("website_url", values.website_url); 
            formData.append("email_address", values.email_address); 
            formData.append("contact_phone", values.contact_phone); 
            formData.append("physical_location", values.physical_location); 
            formData.append("campus_location", values.campus_location); 
            formData.append("type", values.category); 
            formData.append("logo_file_path", values.logo); 

          }}
     >
       {({
         isSubmitting,
         isValid,
         status,
         setFieldValue 
       }) => (
        <Form className="form" >

         { status &&  <div className="text-white "> { status } </div>   }
    
         <div className="grid grid-cols-12 gap-5">
           
         
         <div className="col-span-12">
            <Field type="hidden" name="organization_id" className="form-input" />
         </div>

          <div className="col-span-12">
            <label className="block" htmlFor="name">
              Name
            </label>
              <Field type="text" name="name" className="form-input"/>
              <ErrorMessage name="name" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="id">
              Code
            </label>
              <Field type="text" name="code" className="form-input"/>
              <ErrorMessage name="code" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="contact_phone">
              Contact Phone
            </label>
              <Field type="tel" name="contact_phone" className="form-input"/>
              <ErrorMessage name="contact_phone" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="email_address">
              Email Address
            </label>
              <Field type="email" name="email_address" className="form-input"/>
              <ErrorMessage name="email_address" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="website_url">
              Website URL
            </label>
              <Field type="text" name="website_url" className="form-input"/>
              <ErrorMessage name="website_url" component="div" className="text-red-900" />
          </div>

          <div className="col-span-12">
            <label className="block" htmlFor="physical_location">
              Physical Location
            </label>
              <Field type="text" name="physical_location" className="form-input"/>
              <ErrorMessage name="physical_location" component="div" className="text-red-900" />
          </div>

          <div className="col-span-12">
            <label className="block" htmlFor="campus_location">
              Campus Location
            </label>
              <Field type="text" name="campus_location" className="form-input"/>
              <ErrorMessage name="campus_location" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="category">
              Type
            </label>
              <Field as="select" name="category" className="form-input px-4 py-3"> 
                      <option value="">Choose Type</option>
                      <option value="unit">Unit</option>
                      <option value="faculty">Faculty</option>
                      {/* <option value="is_department">Department</option> */}
                      <option value="administrative">Administrative</option>
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="hod">
              Head of Faculty
            </label>
              <Field as="select" name="hod" className="form-input px-4 py-3"> 
                      <option value="">Choose Head of Faculty</option>
                      <option value="Maduka Christian">Maduka Christian</option>
              </Field>
              <ErrorMessage name="hod" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
            <label className="block" htmlFor="logo">
              Logo
            </label>
              <input type="file" name="logo" id="logo"    className="form-input px-4 py-3" onChange={(e:any) => {setFieldValue("logo", e.currentTarget.files[0] );}} />
              <ErrorMessage name="logo" component="div" className="text-red-900" />
          </div>

          <div className="col-span-6">
          </div>


          <div className="col-span-6">
            <button type="button"  className="cancel_btn" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
          </div>
          <div className="col-span-6">
            <button type="submit"  className={`${ ( isValid && !isSubmitting ) ? "btn" : "cancel_btn cursor-not-allowed" } text-lg disabled:opacity-0 float-right`} disabled={isSubmitting} >
              Save
            </button>
          </div>
        </div>
       </Form>
       )}
     </Formik>
        
      </div>
    </Modal>
  );
};

export default AddFacultyModal ;
