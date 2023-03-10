import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attendance from './components/Attendance';
import Dashboard from './components/Dashboard';
import Day from './components/Day';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Day />}></Route>
        </Route>
        <Route path='/attendance' element={<Attendance />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
