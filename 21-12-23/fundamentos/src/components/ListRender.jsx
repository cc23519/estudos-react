import React, {useState} from 'react'

const ListRender = () => {
    const [users, setUsers] = useState([
    {id: 1, nome: "Guilherme", idade: 18},
    {id:2, nome:"Luiz", idade:23},
    {id:3, nome:"Roberto", idade : 52},
])


const deletar = ()  =>{
  const numeroaleatorio = Math.floor(Math.random() * 4)

  setUsers((prevUsers) =>{
    console.log("feito!")
      return prevUsers.filter((user) => numeroaleatorio !== user.id);
  })
}

  return (
    <div>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.nome} - {user.idade}</li>
        ))}
      </ul>
      <div><button onClick={deletar}>Deletar</button></div>
      
    </div>
  )
}

export default ListRender
