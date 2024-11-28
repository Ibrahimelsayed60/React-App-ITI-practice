import logo from './logo.svg';
import Header from './navbar/navbar';
import './App.css';
import Users from './users/Users';

function App() {
  return (
    <div className="App">
      <h1 className='myH1'>Hello From App</h1>
      <Header/>
      <Users/>
    </div>
  );
}

export default App;
