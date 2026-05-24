import {useState} from 'react'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {ShmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    })

    const [stats, setStats] = useState({
        followers: 100,
        following: 50
    })

    const changeAvatar = url => {
        // setUser({...user, name: 'User'});
        // setUser({...user, avatar: url || user.avatar});

        // setUser(prevState => ({...prevState, name: 'User'}));
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    return (
        <div className={'app'}>
            <ShmitterContext value={{
                user, stats, changeAvatar
            }}>
                <Navigation/>
                <Body/>
            </ShmitterContext>
        </div>
    )
}

export default App
