import React, { useState } from 'react';
import Sanjay from '../Pages/Sanjay'; 
import Ravi from '../Pages/Ravishankar';
import Lalith from '../Pages/Lalith';
import Narsingh from '../Pages/Narsingh';
import Mahesh from '../Pages/Mahesh';
import Shivani from '../Pages/Shivani';
import "./login.css";
const users = [
  { id: 1, email: 'sanju@gmail.com', password: 'password1', profile: 'Sanjay' },
  { id: 2, email: 'ravi@gmail.com', password: 'password2', profile: 'Ravi' },
  { id: 3, email: 'lalith@gmail.com', password: 'password3', profile: 'Lalith' },
  { id: 4, email: 'narsingh@gmail.com', password: 'password4', profile: 'Narsingh' },
  { id: 5, email: 'mahesh@gmail.com', password: 'password5', profile: 'Mahesh' },
  { id: 6, email: 'shivani@gmail.com', password: 'password6', profile: 'Shivani' },

];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
      {!loggedInUser ? (
        <div >
        <div className='login' >
       <div className='form-log'>
       <label>Email</label>
       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
       <br />
       <label>Password</label>
       <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
       <br />
       <button onClick={handleLogin}  className='button'>Login</button>
       </div>
        </div>
         
        </div>
      ) : (
        <div>
        {loggedInUser.profile === "Sanjay" && <Sanjay />}
        {loggedInUser.profile === "Ravi" && <Ravi />}
        {loggedInUser.profile === "Lalith" && <Lalith />}
        {loggedInUser.profile === "Narsingh" && <Narsingh />}
        {loggedInUser.profile === "Mahesh" && <Mahesh />}
        {loggedInUser.profile === "Shivani" && <Shivani />}
        </div>
        
      )}
    </div>
  );
};

export default App;
