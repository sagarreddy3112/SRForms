import {
  useState
} from 'react';

import {
  applySeller
} from '../../api/sellerApi';

const ApplySeller = () => {

  const [formData, setFormData] =
  useState({
    farmName:'',
    aadhaarNumber:'',
    bankAccountNumber:'',
    ifscCode:''
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

      await applySeller(
        formData
      );

      alert(
        'Seller Application Submitted'
      );

    }catch(error){

      alert(
        error.response?.data?.message ||
        'Application Failed'
      );
    }
  };

  return (

    <div className='min-h-screen bg-gray-100 p-6'>

      <div className='max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8'>

        <h1 className='text-3xl font-bold text-green-700 mb-8'>
          Become Seller
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

          <input
            type='text'
            name='aadhaarNumber'
            placeholder='Aadhaar Number'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <input
            type='text'
            name='bankAccountNumber'
            placeholder='Bank Account Number'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <input
            type='text'
            name='ifscCode'
            placeholder='IFSC Code'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border'
          />

          <button
            type='submit'
            className='w-full bg-green-600 text-white py-4 rounded-2xl font-bold'
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
};

export default ApplySeller;