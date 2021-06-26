import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import SignUp from './components/pages/SignUp'
import Marketing from './components/pages/Marketing'
import Home from './components/pages/Home'
import Consulting from './components/pages/Consulting'
import Design from './components/pages/Design'
import Development from './components/pages/Development'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/design' component={Design} />
        <Route path='/development' component={Development} />
      </Switch>
    </Router>
  )
}

export default App
