import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/success' element={<Success />} />
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App