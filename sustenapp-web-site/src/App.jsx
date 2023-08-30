import './App.css'

// COMPONENTS

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Add from './components/Add'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Add />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default App
