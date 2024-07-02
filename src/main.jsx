import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {UserContext} from './context/InitialContext.js'

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
        <UserContext.Provider value={{name:"xyz"}}>
            <App/>
        </UserContext.Provider>
    </BrowserRouter>,)
// let ele = document.getElementById('root'); const root =
// ReactDOM.createRoot(ele) root.render(<p>Hello</p>)