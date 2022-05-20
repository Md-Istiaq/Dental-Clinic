import React from 'react';
const UserRow = ({user , refetch}) => {
    const makeAdmin = () =>{
          fetch(`http://localhost:5000/user/admin/${user.email}` ,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res => {
              if(res.status === 403){
                alert("Failed to make an admin")
              }
              return res.json()
          })
          .then(data => {
              if(data.modifiedCount > 0){
                fetch()
                alert("successfully make admin")
              }
          })
         
      }
    return (
        <tr>
        <th>1</th>
        <td>{user.email}</td>
        <td>{ user.role!== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove User</button></td>
        
    </tr>
    );
};

export default UserRow;