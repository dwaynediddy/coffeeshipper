import './App.css'
import TopNav from './components/TopNav'
import Landing from './components/Landing'
import Banner from './components/Banner'
import ContactUs from './components/ContactForm'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Landing />
      <Banner />
      <ContactUs />
    </div>
  )
}

export default App;
