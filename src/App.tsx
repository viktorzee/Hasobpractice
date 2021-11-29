import  Home  from './components/home/Home';
import './App.css';
import Programs from './components/programs/Program';
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
        <Route path="/programs" element={<Programs/>}/>
        <Route path='/faculties' element={< Faculties />}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/online_store" element={<OnlineStore/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
