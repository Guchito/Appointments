import {useState, useEffect} from 'react';
import Error from './error';

const Form = ({patients, setPatients, patient, setPatient}) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false)
  
  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])
  
  const getId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Validation form

    if([name, owner, email, date, symptoms].includes('')){
      setError(true)
      return;
    }

    setError(false)

    //Patient object
    const objectPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptoms,
    }

    if(patient.id){
      //Edit register
      objectPatient.id = patient.id
      const patientUpdated = patients.map(patientState => patientState.id === patient.id ? objectPatient : patientState )
      setPatients(patientUpdated)
      //Clear the state
      setPatient({})
    }else{
      //New register
      objectPatient.id = getId()
      setPatients([...patients, objectPatient])
    }

    

    //reset form
    setName('')
    setDate('')
    setEmail('')
    setOwner('')
    setSymptoms('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Following</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Add patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form 
        onSubmit = {handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
      {error && <Error><p>All fields are required</p></Error> }

      <div className="mb-5">
        <label htmlFor='pet' className="block text-gray-700 uppercase font-bold">
          Pet Name
        </label>
        <input 
        id='pet'
        type="text"
        placeholder="Instert pet name"
        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={name}
        onChange ={ (e) => setName(e.target.value) }
        />
        </div>
        <div className="mb-5">
          <label htmlFor='owner' className="block text-gray-700 uppercase font-bold">
            Owner Name
          </label>
          <input 
          id='owner'
          type="text"
          placeholder="Instert owner name"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={owner}
          onChange ={ (e) => setOwner(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor='email' className="block text-gray-700 uppercase font-bold">
            email
          </label>
          <input 
          id='email'
          type="email"
          placeholder="Instert E-Mail"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange ={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor='admit' className="block text-gray-700 uppercase font-bold">
            admit date
          </label>
          <input 
          id='admit'
          type="date"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={date}
          onChange ={ (e) => setDate(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor='symptoms' className="block text-gray-700 uppercase font-bold">
          symptoms
          </label>
          <textarea  id="symptoms"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptoms"
          value={symptoms}
          onChange ={ (e) => setSymptoms(e.target.value) }
          />
        </div>
        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white text-center uppercase font-bold
         hover:bg-indigo-700 cursor-pointer transition-all"
        value={ patient.id ? 'Update patient' : 'Add patient' }
        />

      </form>
    </div>
  )
}

export default Form