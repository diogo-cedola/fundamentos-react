import TextoDinamico from "./components/TextoDinamico";
import MensagemLogin from "./components/MensagemLogin";
import MensagemUsuario from "./components/MensagemUsuario";
import ListaNomes from "./components/ListaNomes";
import ListaComIds from "./components/ListaComIds";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <TextoDinamico />
      <hr />
      <MensagemLogin />
      <hr />
      <MensagemUsuario ok={false} nome="Carlos" />
      <hr />
      <ListaNomes />
      <hr />
      <ListaComIds />
    </main>
  );
}
