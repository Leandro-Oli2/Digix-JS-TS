// import logo from './logo.svg';
import './App.css';
// import SayMyName from './components/Props/SayMyName';
// import Pessoa from './components/Props/Pessoa';
// import Frase from './components/Css_Modules/Frase';
// import BotaoEstilizado from './components/Aula26.05/Ex01/BotaoEstilizado';
// import MensagemColorida from './components/Aula26.05/Ex02/MensagemColorida';
// import SecaoSobre from './components/Aula26.05/Ex03/SecaoSobre';
// import PerfilUsuario from './components/Aula26.05/Desafio/PerfilUsuario';
// import List from './components/Fragments/list';
// import Evento from './components/Eventos/Evento';
// import Form from './components/Eventos/form';
import Contador from './components/Aula28.05/Ex01/contador';

function App() {
  // const name = "Leandro"
  // const foto = "https://img.freepik.com/vetores-premium/icone-de-imagem-de-perfil-de-avatar-em-fundo-azul-estilo-de-design-plano-recursos-de-design-de-elementos-graficos_991720-653.jpg?semt=ais_hybrid&w=740"
  // const bio = "Lindo e maravilhoso"
  return (
    <div className="App">
      {/*Props:
       <SayMyName name="Leandro" />
      <SayMyName name = {name} />
      <Pessoa nome="Leandro" idade="19" profissao="Devloper" foto="https://via.placeholder.com/150"/> */}
      {/*Css Modules: <Frase/> */}
      {/* <BotaoEstilizado/>
      <MensagemColorida cor='green' texto="jgbfhbdfbghdfdfhd" /> */}
      {/* <SecaoSobre/> */}
      {/* <PerfilUsuario foto={foto} nome={name} bio={bio} /> */}
      {/* <List/> */}
        {/* <h1>Testando Eventos</h1>
        {/* <Evento numero={1}/>
        <Evento numero={2}/> }
        <Form/> */}
      <Contador/>
    </div>
  );
}

export default App;
