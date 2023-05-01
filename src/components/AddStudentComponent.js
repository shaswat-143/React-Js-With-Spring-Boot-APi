import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import StudentService from "../services/StudentService";


const AddStudentComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailId, setEmailId] = useState("");
  const history = useNavigate();
  const {id} = useParams();

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();

    const student = {firstname, lastname, emailId}

    if(id){
      StudentService.updateStudent(id, student).then((response) =>{
        history('/')
      }).catch(error =>{
        console.log(error);
      })  

    }else{
      StudentService.createStudent(student).then((response) =>{

        console.log(response.data)
  
        history('/');
  
      }).catch(error => {
          console.log(error)
      })
    }

  }

  useEffect(() => {

    StudentService.getStudentById(id).then((response) =>{
      setFirstname(response.data.firstname)
      setLastname(response.data.lastname)
      setEmailId(response.data.emailId)
    }).catch(error =>{
      console.log(error)
    })
  }, [])
  
 const title = () => {

    if(id){
      return<h2 className="text-center">Update Student</h2>
    }else{
      return <h2 className="text-center">Add Student</h2>
    }
  }
  return (
    <div>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
           {
            title()
           }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>
                <button className="btn btn-success" onClick={(e) => saveOrUpdateStudent(e)} >Submit </button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentComponent;
