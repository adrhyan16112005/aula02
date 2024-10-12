import { useEffect, useState } from "react";

export default function App() {

  const [fotos, setFotos] = useState([]); 

  useEffect(() => {
    const buscarUsuario = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
      const dados = await resposta.json(); 
      setFotos(dados); 
    }
    buscarUsuario();
  }, []); 

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.slice(0, 10).map((foto) => ( 
          <li key={foto.id}>
            <img src={foto.thumbnailUrl} alt={foto.title} />
            <p>{foto.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
