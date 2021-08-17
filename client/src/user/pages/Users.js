import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

     const USERS = [
          {
            id: 'u1', 
            name: 'Max Schwarz', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDbRi8RBLOEnReJ6iRh0K0SEVOucHnd3iNA&usqp=CAU', 
            place: 3
          }
        ];

     return <UsersList items={USERS}/>
}

export default Users
