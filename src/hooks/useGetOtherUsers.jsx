import React, {useEffect} from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';


const useGetOtherUsers = () => {
   
     const dispatch = useDispatch();

  useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const API = process.env.REACT_APP_API_URL;
                 axios.defaults.withCredentials = true;
                const res = await axios.get(`${API}/api/v1/user/getother`);
                // store
                console.log(res);
    dispatch(setOtherUsers(res.data));            
               
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])
  
}

export default useGetOtherUsers

//  useEffect lets you run some code: after your component renders (shows on screen)