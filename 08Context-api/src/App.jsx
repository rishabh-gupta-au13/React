
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
 

  return (
    <UserContextProvider>
     <h1>State Management</h1>
    </UserContextProvider>
  )
}

export default App
