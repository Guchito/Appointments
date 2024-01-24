import Patients from './Patients'

const ListPatients = ({patients, setPatient, deletePatient}) => {
     
  return (
    <div className="md:w-1/2 lg:w-3/5 ">

      {patients && patients.length ? (
        <>
          <h2 className=" font-black text-3xl text-center"> Patients list</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">Patients and Dates</span>
          </p>
          <div className='md:h-screen overflow-y-scroll'>     
            {patients.map( patient => (
              <Patients 
                key = {patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>        
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center"> No patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start by adding {''}
            <span className="text-indigo-600 font-bold">Patients</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListPatients