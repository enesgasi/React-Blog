import Navbar from './Navbar';
import Home from './Home'

function App() {
  const visitor = Math.floor(Math.random()*1000000)
 
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='content'>
        <Home></Home>
      </div>

    </div>
  );
}
export default App;
