import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchUser = async () => {
      const resposta = await fetch('https://randomuser.me/api');
      const dados = await resposta.json();
      setUsers([dados.results[0]]); 
    }

    fetchUser(); 
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name.first} {user.name.last} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

