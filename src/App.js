import OurTeam from "./Component-Our_Team/our_team";
import HomeApp from "./Components/App/home";
import Dashboard from "./Components/Training/dashboard";
import NavigationBar from "./Components2/Navigation Bar/navbar";
import AboutApp from "./Component_about_us/about";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import AboutUs from "./Components/App/AboutUs";
import Services from "./Components/App/Services";
import ContactUs from "./Components/App/ContactUs";
import Header from "./Components2/header";

function App() {
  const hist = useHistory()
  return (
    <Router hist={hist}>
      <Switch>
        <Route exact path="/" component={HomeApp} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/our-team" component={OurTeam} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}
    
 
export default App;
