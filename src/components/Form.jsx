const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Following</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Add patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor='pet' className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>
          <input 
          id='pet'
          type="text"
          placeholder="Instert pet name"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
          />
        </div>
        <div className="mb-5">
          <label htmlFor='e-mail' className="block text-gray-700 uppercase font-bold">
            e-mail
          </label>
          <input 
          id='e-mail'
          type="email"
          placeholder="Instert E-Mail"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
          />
        </div>
        <div className="mb-5">
          <label htmlFor='symptoms' className="block text-gray-700 uppercase font-bold">
          symptoms
          </label>
          <textarea  id="symptoms"
          className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptoms"
          />
        </div>
        <input 
        type="sumbit"
        className="bg-indigo-600 w-full p-3 text-white text-center uppercase font-bold
         hover:bg-indigo-700 cursor-pointer transition-all"
        value="Add patience"
        />

      </form>
    </div>
  )
}

export default Form