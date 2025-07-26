import React , { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {

   const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
  });
   const navigate = useNavigate();
   const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

     try{
        console.log(user)
        const API = process.env.REACT_APP_API_URL;
        const res = await axios.post(`${API}/api/v1/user/register` , user , {
           headers : {
              'Content-Type' : 'application/json'
           },
           withCredentials : true
        });
        if(res.data.success){
           navigate("/login")
           toast.success(res.data.message);
        }

     }catch(error){
      toast.error(error.response.data.message);
     console.log(error)
     }

    console.log(user);
     setUser({
      fullname: "",
      email: "",
      password: "",
      gender: "",
    })
  }

  return (
      <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>fullname</span>
            </label>
            <input
               value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='Full Name' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>email</span>
            </label>
            <input
               value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='email' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
               value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Password' />
          </div>
        
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
               checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                 checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login"> login </Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Singup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup