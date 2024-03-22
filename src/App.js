import Header from 'components/Header'
import Carousel from 'components/Carousel'
import Lorem from 'components/Lorem'
import 'assets/css/App.css'

function App() {
  const images = ['img-01', 'img-02', 'img-03']

  return (
    <>
      <Header />
      <main>
        <section className="cta">
          <Lorem />
        </section>
        <section id="carousel-container">
          <Carousel items={images} />
        </section>
      </main>
    </>
  )
}

export default App
