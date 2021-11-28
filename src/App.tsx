import  Home  from './components/home/Home';
import './App.css';
import Programs from './components/programs/Program';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './components/students/Student';
import Staff from './components/staff/Staff';
import OnlineStore from './components/online-store/OnlineStore';
import Faculties from './components/faculty/Faculties';
import ViewProgram from './components/programs/ViewProgram';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs/>}/>
        <Route path='/faculties' element={< Faculties />}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/online_store" element={<OnlineStore/>} /> */}
        <Route path="/online_store" element={<ViewProgram/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
