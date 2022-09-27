import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";


const Signin = () => {
  const [items, setItem] = useState({
    
  });
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) =>
  setInitialValues({
    ...initialValues,
    [e.target.name]: e.target.value});
    
    // useEffect(() => {
    //     submitForm()
    //   }, [initialValues]);
      
    const navigate = useNavigate();

    const Submit = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    
    setItem(items);

    if (items.email === initialValues.email || items.password === initialValues.password) {
      navigate("/dashboard");
    } else{
      navigate("/error")
    }
  };
  
  return (
    <>
    <div style={{height:"100vh", backgroundColor:"#02224C" ,display:"flex", textAlign:"center", alignItems:"center", justifyContent:'center'}}>
    <div style={{flexDirection:"column",height:"600px",width:"400px" ,display:"flex",backgroundColor:"black", color:"white", textAlign:"center", alignItems:"center", justifyContent:'center', borderRadius:"20px"}}>
      <div className="container mt-5">
        <h1 className="large text-primary">Sign In</h1>
      </div>

      <div className="container mt-5">
        <form className="form">
          

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
          <button onClick={Submit} className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Signin;
