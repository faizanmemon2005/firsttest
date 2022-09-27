import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [initialValues, setInitialValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  
  const navigate = useNavigate()
  const submitForm = () => {
    localStorage.setItem("items", JSON.stringify(initialValues));
    navigate("/Signin")
  };

  const handleChange = (e) =>
  setInitialValues({
      ...initialValues,
    [e.target.name]: e.target.value})


  return (
    <>
    <div style={{height:"100vh", backgroundColor:"#02224C" ,display:"flex", textAlign:"center", alignItems:"center", justifyContent:'center'}}>
    <div style={{flexDirection:"column",height:"600px",width:"400px",display:"flex",backgroundColor:"black", color:"white", textAlign:"center", alignItems:"center", justifyContent:'center', borderRadius:"20px"}}>
      <div className="container mt-5">
        <h1 className="large text-primary">Sign Up</h1>
      </div>

      <div className="container mt-5">
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
      </div>

      <div className="container mt-5">
        <form className="form">
          <div className="form-group mt-1">
            <input 
            placeholder="Name" 
            name="fullname"
            onChange={handleChange}
                />
          </div>

          <div className="form-group mt-1">
            <input
              placeholder="Email" name="email"
            onChange={handleChange}
                />
          </div>

          <div className="form-group mt-1">
            <input
               name="password"
              placeholder="Password"
            onChange={handleChange}
            />
          </div>
          <button onClick={submitForm} className="btn btn-primary mt-3">
            Signup
          </button>
        </form>
      </div>

      <div className="container mt-5">
        <p className="my-1">
          Already have an account? <Link to="/Signin">Sign In</Link>
        </p>
      </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
