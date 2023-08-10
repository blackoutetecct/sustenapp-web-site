import './App.css'

// COMPONENTS

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'

function App() {
  
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
