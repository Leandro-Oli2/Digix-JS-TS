import './App.css';
import BemVindo from './components/BemVindo';
import Calculadora from './components/calculadora';
import FotoUsuario from './components/FotoUsuario';
import CardUsuario from './components/CardUsuario';


function App() {
  return (
    <div className="App">
      <FotoUsuario url={"https://avatars.githubusercontent.com/u/9919?s=100"}/>
      <CardUsuario nome={'Leandro'} profissao={'Developer'}/>
      <CardUsuario nome={'Marcos'} profissao={'Médico'}/>
      <CardUsuario nome={'Heron'} profissao={'Advogado'}/>
    </div>
  );
}

export default App;
