import './css/setup.css';
import './css/variables.css';
import './css/typography.css';
import './css/animations.css';
import './css/general.css';
import './css/headerFooter.css';
import './css/checkboxes.css';
import './css/preview.css';
import './css/recipes.css';
import './css/mediaQueries.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Main /> 
      <Footer />
    </div>
  )
}

export default App
