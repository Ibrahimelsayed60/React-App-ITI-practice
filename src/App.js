import logo from './logo.svg';
import Header from './navbar/navbar';
import './App.css';
import Users from './users/Users';
import UsersFunctional from './users/usersFunctional';
import AddUser from './users/addUser';

function App() {
  return (
    <div className="App">
      <h1 className='myH1'>Hello From App</h1>
      <Header/>
      {/* <Users/> */}
      <UsersFunctional/>
      <div className='container my-5'>
        <AddUser/>
      </div>
    </div>
  );
}

export default App;
