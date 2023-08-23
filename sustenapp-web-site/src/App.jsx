import './App.css'

// COMPONENTS

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Add from './components/Add'
import Newsletter from './components/Newsletter'
import Comments from './components/Comments'

function App() {
  
  return (
    <>
      <Header />

      <main>
        <Home />
        <Comments />
        <About />
        <Add />
        <Newsletter />
      </main>
    </>
  )
}

export default App
