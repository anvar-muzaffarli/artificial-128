import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// KOMPONENTLER BURAYA GELECEK
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  return (
   <>
   <Navbar />
   <Introduction />
   </>
  );
}

export default App;
