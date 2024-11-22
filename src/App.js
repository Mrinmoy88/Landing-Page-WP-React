//import logo from './logo.svg';
import './App.css';
// import Navbar from './navbar';
// import Body from './body-content';
// import Footer from './footer';
import Header from './Header';
import Banner from './Banner';
// import Checkpoints from './Checkpoints';
import Services from './Services';
import WhyChooseUs from './WhyChooseUS';
import Portfolio from './Portfolio';
import GetFreeConsultation from './GetFreeConsultation';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about';
import Contact from './contact';

function App() {
  //const title = "Hi I am learning React Js";
  //const my_object = {name: 'Mrinmoy', title: 'Maitra' };
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Header />
        <Switch>
          <Route exact path='/'>
            <Banner />
            {/* <Checkpoints /> */}
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <GetFreeConsultation />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
        {/* <Body /> */}
        {/* <Footer /> */}
        {/* <h1>Body Part</h1>
      <h3>{title}</h3>
      <p>My name is { my_object.name } { my_object.title }</p> */}

      </div>
    </Router>


  );
}

export default App;
