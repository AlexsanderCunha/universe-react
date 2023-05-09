import './App.css';
import galaxy from './Components/images/galaxy.jpg'
import nebula from './Components/images/nebula.jpg'
import stars from './Components/images/stars.jpg'
import planets from './Components/images/planets.jpg'

function App() {
  return (
    <div className='container'>
        <header>
            <p>Universo</p>
        </header>
        <main>
          <section className='box-title'>
            <h1>Universo</h1>
            <p>O universo é o conjunto de tudo o que existe, incluindo toda a matéria, energia, espaço e tempo. É composto por galáxias, estrelas, planetas, poeira cósmica, e outros objetos celestes.</p>
            <a href='https://pt.wikipedia.org/wiki/Universo' target='_blank'>Consulte mais informações</a>
          </section>
          <section className='box-start'>
            <h1>O universo</h1>
            <div className='box-cards'>
              <div className='card'>
              <img src={galaxy}/>
                <h3>Galaxia</h3>
                <p>Uma galáxia é um sistema astronômico composto por um grande número de estrelas, planetas, gases, poeira cósmica, matéria escura e outros objetos celestes interconectados gravitacionalmente.</p>
                <a href='https://pt.wikipedia.org/wiki/Galáxia' target='_blank'>Ver mais</a>
              </div>
              <div className='card'>
              <img src={nebula}/>
                <h3>Nebulosa</h3>
                <p>Uma nebulosa é uma nuvem de gás e poeira interestelar que é visível no espaço como uma mancha luminosa ou escura. As nebulosas podem ser compostas de diferentes elementos.</p>
                <a href='https://pt.wikipedia.org/wiki/Nebulosa' target='_blank'>Ver mais</a>
              </div>
              <div className='card'>
              <img src={stars}/>
                <h3>Estrelas</h3>
                <p>Estrelas são objetos celestes que emitem luz e calor próprios através de reações termonucleares que ocorrem em seus núcleos. Elas variam em tamanho, brilho, temperatura e cor.</p>
                <a href='https://pt.wikipedia.org/wiki/Estrela' target='_blank'>Ver mais</a>
              </div>
              <div className='card'>
              <img src={planets}/>
                <h3>Planetas</h3>
                <p>Planetas são corpos celestes que orbitam em torno de uma estrela e que possuem massa suficiente para que sua própria gravidade mantenha uma forma esférica. Eles podem ser compostos de rochas, gases, gelo e outros materiais.</p>
                <a href='https://pt.wikipedia.org/wiki/Planeta' target='_blank'>Ver mais</a>
              </div>
            </div>
          </section>
        </main>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <footer>
          <p className='autor'>© Copyright 2023. Todos os direitos reservados. Desenvolvido por Alexsander Cunha.</p>
        </footer>
    </div>
  );
}

export default App;