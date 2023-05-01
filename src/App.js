import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <>
      <Router>
      <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<ListStudentComponent/>}></Route>
          <Route path="/add-student" element = {<AddStudentComponent/>}></Route>
          <Route path="/edit-student/:id" element = {<AddStudentComponent/>}></Route>
        </Routes>
      <FooterComponent />
      </Router>
      </>
  );
}

export default App;
