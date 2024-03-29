const Patients = ({patient, setPatient, deletePatient}) => {

  const {name, owner, email, date, symptoms, id} = patient
  const handleDelete = () => {
    const ans = confirm('Are you sure you want to delete this patient?')
    if (ans) {
      deletePatient(id)
    }
  }
  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Pet Name: {''}
            <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Owner Name: {''}
            <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          E-Mail: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Admit Date: {''}
            <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Symptoms: {''}
            <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
                    text-white font-bold uppercase rounded-lg"
            onClick={() => setPatient(patient)}
            >Edit</button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700
              text-white font-bold uppercase rounded-lg"
            onClick={handleDelete}
            >Delete</button>
        </div>
      </div>
  )
}

export default Patients