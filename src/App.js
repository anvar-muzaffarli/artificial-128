import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// KOMPONENTLER BURAYA GELECEK
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AwardsContainer from './components/AwardsContainer';

function App() {
  return (
   <>
   <Navbar />
   <Introduction />
   <AwardsContainer />
   </>
  );
}

export default App;
