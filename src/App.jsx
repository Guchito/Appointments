import {useState} from 'react'
import Header from "./components/header"
import Form from "./components/Form"
import ListPatients from "./components/ListPatients"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient = {setPatient}
        />
        <ListPatients 
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  )
}

export default App
