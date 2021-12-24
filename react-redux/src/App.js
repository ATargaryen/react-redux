import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import BodyContainer from './containers/BodyContainer';

function App() {
  return (
    <div className="App">
      <h2>Welcome To Redux</h2>
      <BodyContainer />
    </div>
  );
}

export default App;
