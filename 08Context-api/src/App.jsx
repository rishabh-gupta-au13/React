
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
 

  return (
    <UserContextProvider>
     <h1>State Managemtnt</h1>
    </UserContextProvider>
  )
}

export default App
