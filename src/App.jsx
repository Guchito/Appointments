import {useState, useEffect} from 'react'
import Header from "./components/header"
import Form from "./components/Form"
import ListPatients from "./components/ListPatients"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS)
    }
    getLS()
  },[])

  useEffect(()=> {
    localStorage.setItem('patients', JSON.stringify(patients))
  },[patients])

  const deletePatient = id => {
    const patientsUpdated = patients.filter(p => p.id !== id);
    setPatients(patientsUpdated)
  }

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
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
