import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
    <div style={{display:"flex",backgroundColor:"#02224C",height:"100vh", color:"white", textAlign:"center", alignItems:"center", justifyContent:'center'}}>
    <div style={{flexDirection:"column",height:"300px",width:"400px" ,display:"flex",backgroundColor:"black", color:"white", textAlign:"center", alignItems:"center", justifyContent:'center', borderRadius:"20px"}}>
      <Link to='/Signup'>Signup</Link>
      <Link to='/Signin'>Signin</Link>
      </div>
    </div>
    </>
  )
}

export default Home
