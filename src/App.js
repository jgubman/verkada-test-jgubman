import Header from 'components/Header'
import Carousel from 'components/Carousel'
import Lorem from 'components/Lorem'

import { data } from 'lib/data'

import 'assets/css/App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="cta">
          <Lorem body={data.loremBody} head={data.loremHead} title={data.loremTitle} button={data.loremButton} />
        </section>
        <section id="carousel-container">
          <Carousel items={data.images} />
        </section>
      </main>
    </>
  )
}

export default App
