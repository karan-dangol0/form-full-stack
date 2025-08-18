import React, {useState, useEffect} from 'react'
import axios from 'axios'
const GetUsers = ({refresh}) => {
    const [users, setUsers] = useState([]);

    useEffect(  () => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/users");
                setUsers(res.data);
            } catch (error) {
                console.log(error.response?.data || error.message);
                
            }
        };
        fetchUsers();
        
    }, [refresh])
    console.log(users);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
            
        } catch (error) {
           console.log(error.response?.data || error.message);
            
        }
    }
    
    
  return (
      <>
          <div className="p-4 border rounded mt-4">
              <h2 className="text-xl font-bold mb-2">Users</h2>
              <ul className="space-y-1">
                  {users.map(user => (
                      <li key={user._id} className="border-b py-1">
                          {user.firstName} {user.lastName} - {user.email} - {user.phoneNumber}
                          {/* <button className="bg-blue-400 px-2 py-2 ml-5 rounded-md text-gray-100 hover:bg-blue-600">Edit</button> */}
                          <button className="bg-blue-400 px-2 py-2 ml-5 rounded-md text-gray-100 hover:bg-blue-600" onClick={() => { handleDelete(user._id);  refresh()}}>Delete</button>
                      </li>
                  ))}
              </ul>
            </div>
      </>
  )
}

export default GetUsers;