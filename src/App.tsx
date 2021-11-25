import  Home  from './components/home/Home';
import './App.css';
// import Programs from './components/programs/Program';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './components/students/Student';
import Staff from './components/staff/Staff';
import OnlineStore from './components/online-store/OnlineStore';
import Faculties from './components/faculty/Faculties';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/programs" element={<Programs name={''} code={''} department_id={''} degree={''} id={''} handleEdit={function (id?: string): void {
          throw new Error('Function not implemented.');
        } } handleView={function (id?: string): void {
          throw new Error('Function not implemented.');
        } } />}/> */}
        <Route path='/faculties' element={< Faculties toggle={function (): void {
          throw new Error('Function not implemented.');
        } } toggleEdit={function (): void {
          throw new Error('Function not implemented.');
        } }/>}/>

        <Route path="/student" element={<Student/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/online_store" element={<OnlineStore/>} />
      {/* <Home handleLoginClick={function (): void {
        
      } } handleRegisterClick={function (): void {
      } } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
