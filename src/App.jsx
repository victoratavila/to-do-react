import { useState } from "react";

function App() {
  const [name, setName] = useState("Victor");

  return (
    <div>
      <h1>Meu nome é {name}</h1>
      <button
        onClick={() => {
          setName("Pedro");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
