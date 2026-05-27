import {
  useState
} from 'react';

import {
  createFarm
} from '../../api/farmApi';

const CreateFarm = () => {

  const [formData, setFormData] =
  useState({
    farmName:'',
    description:'',
    address:'',
    villageId:''
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try{

      await createFarm(
        formData
      );

      alert(
        'Farm Created Successfully'
      );

    }catch(error){

      alert(
        error.response?.data?.message ||
        'Farm Creation Failed'
      );
    }
  };

  return (

    <div className='min-h-screen bg-gray-100 p-6'>

      <div className='max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8'>

        <h1 className='text-3xl font-bold text-green-700 mb-8'>
          Create Farm
        </h1>

        <form
          onSubmit={handleSubmit}
          className='space-y-5'
        >

          <input
            type='text'
            name='farmName'
            placeholder='Farm Name'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <textarea
            name='description'
            placeholder='Farm Description'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <input
            type='text'
            name='address'
            placeholder='Farm Address'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <input
            type='text'
            name='villageId'
            placeholder='Village Id'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <button
            type='submit'
            className='w-full bg-green-600 text-white py-4 rounded-2xl font-bold'
          >
            Create Farm
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateFarm;