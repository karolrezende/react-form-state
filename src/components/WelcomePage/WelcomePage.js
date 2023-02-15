function WelcomePage({user, setIsLoggedIn}){
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    return(
        <div>
            <p>Bemvinde {user}</p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}
export default WelcomePage