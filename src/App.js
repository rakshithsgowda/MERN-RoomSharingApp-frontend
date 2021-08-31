import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Route path='/home' exact component={Homescreen} />
      </BrowserRouter>
    </div>
  )
}

export default App
