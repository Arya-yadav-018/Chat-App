import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';


const OtherUser = ({user}) => {
    

    const dispatch = useDispatch();
   const {selectedUser , onlineUsers} = useSelector(store=>store.user)
   const isOnline = onlineUsers.includes(user._id);
    const selectedUserHandler = (user)=>{
        console.log(user);
       dispatch(setSelectedUser(user));
    }
    
  return (
       
       <div>
            <div onClick={()=> selectedUserHandler(user)}  className={` ${selectedUser?._id === user?._id ? 'bg-zinc-200 text-black': '' } flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`} >
               <div className={`avatar ${isOnline ? 'avatar-online' : '' }`}>
                     <div className='w-10 rounded-full'>
                      <img src={user?.profilePhoto} alt={`${user?.fullname}'s profile`} />
                     </div>
               </div>
               <div className='flex flex-col flex-1'>
                     <div className='flex justify-between  gap-2 text-white'>
                       <p>{user?.fullname}</p>
                     </div>
               </div>
            </div>

            <div className='divider my-0 py-0 h-1'></div>
          

         </div>


  )
}

export default OtherUser




