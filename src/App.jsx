import {useState} from 'react'
import Header from "./components/header"
import Form from "./components/Form"
import ListPatients from "./components/ListPatients"

function App() {

  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients = {patients}
          setPatients = {setPatients}
        />
        <ListPatients 
          patients={patients}
        />
      </div>
    </div>
  )
}

export default App
