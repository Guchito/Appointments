import Patients from './Patients'

const ListPatients = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
        <h2 className=" font-black text-3xl text-center"> Patients list</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Manage your {''}
        <span className="text-indigo-600 font-bold">Patients and Dates</span>
      </p>
      <div className='md:h-screen overflow-y-scroll'>
      <Patients />
      <Patients />
      <Patients />
      <Patients />
      </div>


    </div>
  )
}

export default ListPatients