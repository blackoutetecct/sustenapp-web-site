import './App.css'

// COMPONENTS

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Add from './components/Add'

function App() {
  
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Add />
      </main>
    </>
  )
}

export default App
