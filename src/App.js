import UsuarioInfo from "./components/UsuarioInfo";
import ListaNumeros from "./components/ListaNumeros";
import Contador from "./components/Contador";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Estado com Objetos e Arrays e useState Básico</h1>
      <UsuarioInfo />
      <hr />
      <ListaNumeros />
      <hr />
      <Contador />
    </main>
  );
}