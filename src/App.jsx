import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";
import MyComponent from "./components/MyComponent";
import Tarefas from "./components/tarefas";

function App() {

  return (
    <>
      <header>
        <MyComponent title="Olá, mundo React!" subtitle="Esse é o meu primeiro componente!" />
      </header>

      <main>
        <section>
          <div className="events_section">
            <MeuContador section_title='Estados e Eventos' section_subtitle='Contador de cliques' description='Um simples contador de cliques' />
          </div>
        
          <div className="list_section">
            <MinhaLista section_title='Listas e chaves (keys)' section_subtitle='Melhores plataformas de Streaming' section_subtitle2='Efeitos colaterais' section_h4='Filtro de pesquisa (efeito colateral)' />
          </div>
        </section>

        <div className="tarefas_section">
          <Tarefas />
        </div>
      </main>
    </>
  );
};

export default App