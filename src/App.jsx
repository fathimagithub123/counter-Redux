
import './App.css'
import Counter from './Components/Counter'


function App() {

  return (
    <>
    <h1 style={{textAlign:'center'}} className='tex-center mt-5'>Counter App</h1>
      <div style={{height:'70vh'}} className='d-flex justify-content-center align-items-center w-100'><Counter/></div>
    </>
  )
}

export default App
