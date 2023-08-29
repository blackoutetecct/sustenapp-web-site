import './App.css'

// COMPONENTS

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Add from './components/Add'
import Newsletter from './components/Newsletter'

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
    </>
  )
}

export default App
