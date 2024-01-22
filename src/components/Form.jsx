import {useState, useEffect} from 'react';

const Form = () => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Validation form

    if([name, owner, email, date, symptoms].includes('')){
      console.log('campo vacio')
    }else{
      console.log('todos llenos')
    }

    
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
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
        value="Add patience"
        />

      </form>
    </div>
  )
}

export default Form