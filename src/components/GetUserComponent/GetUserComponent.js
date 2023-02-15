import { useState } from "react";

function GetUserComponent({setUser, setIsLoggedIn}){
    const [userInput, setUserInput] = useState('')
    const handleLogin = ()=>{
        setUser = userInput.value
        setIsLoggedIn(true)
    }
    return(
        <div>
            <form onSubmit={(event) => handleLogin(event.preventDefault())}>
                <input
                    type="text"
                    placeholder="Insira seu nome"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)} 
                    />
                    <button type="submit">Acessar com o nome</button>
            </form>
        </div>
    )
}
export default GetUserComponent