import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// import TopNav from './components/navigation/TopNav'
import SideBar from './components/navigation/SideBar'
import Landing from './components/Landing'
import Banner from './components/Banner'
import ContactUs from './components/ContactForm'

function App() {
  return (
    <>
      <Router className="App">
          {/* <TopNav /> */}
          <SideBar />
        <Switch>
          <Route path="/" />
        </Switch>
        <Landing />
        <Banner />
        <ContactUs />
      </Router>
    </>
  )
}

export default App;
