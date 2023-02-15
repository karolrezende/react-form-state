import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage'
import GetUserComponent from './components/GetUserComponent/GetUserComponent';
import {useState} from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user= ""
  
  if(isLoggedIn === true){
    return(
      <div>
        <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/> 
      </div>
    )
  }else if(isLoggedIn === false){
    return(
      <div>
        <GetUserComponent setUser={user} setIsLoggedIn={setIsLoggedIn}/>
      </div>
    )
  }
}

export default App;
