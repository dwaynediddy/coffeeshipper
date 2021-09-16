import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import TopNav from './components/navigation/TopNav'
// import SideBar from './components/navigation/SideBar'
// import SideMenu from './components/navigation/SideMenu'
import Landing from './components/Landing'
import Banner from './components/Banner'
import MainItem from './components/faders/MainItem'
import SecondaryItem from './components/faders/SecondaryItem'
import ThirdItem from './components/faders/ThirdItem'
import ContactUs from './components/ContactForm'

function App() {
  return (
    <>
      <Router className="App">
          <TopNav />
          {/* <SideBar /> */}
          {/* <SideMenu />  */}
        <Switch>

          <Route path="/" />
        </Switch>
        <Landing />
        <Banner />
        <MainItem />
        <SecondaryItem />
        <ThirdItem />
        {/* <div className="products">
        </div> */}
        <ContactUs />
      </Router>
    </>
  )
}

export default App;
