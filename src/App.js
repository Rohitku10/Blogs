import {Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route  path="/" element={<BlogsList/>} />
      <Route  path="/blogs/:id" element={<BlogItemDetails/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="*" element={<NotFound/>} />
    </Routes>
  </>
)

export default App
