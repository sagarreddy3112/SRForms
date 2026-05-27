import {
  useState
} from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import {
  registerUser
} from '../../api/authApi';

import {
  useAuth
} from '../../context/AuthContext';

const Register = () => {

  const navigate =
  useNavigate();

  const { login } =
  useAuth();

  const [formData, setFormData] =
  useState({
    firstName:'',
    lastName:'',
    mobileNumber:'',
    password:'',
    roleId:'3'
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

      const response =
      await registerUser(formData);

      login(
        response.data.token,
        response.data.user
      );

      if(
        response.data.user.role_id == 2
      ){

        navigate('/farmer/dashboard');

      }else{

        navigate('/dashboard');
      }

    }catch(error){

      alert(
        error.response?.data?.message ||
        'Registration Failed'
      );
    }
  };

  return (

    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white p-4'>

      <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-8'>

        <h1 className='text-4xl font-bold text-center text-green-700 mb-2'>
          Create Account
        </h1>

        <p className='text-center text-gray-500 mb-8'>
          Join SR Farms Marketplace
        </p>

        <form
          onSubmit={handleSubmit}
          className='space-y-5'
        >

          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border border-gray-200'
          />

          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border border-gray-200'
          />

          <input
            type='text'
            name='mobileNumber'
            placeholder='Mobile Number'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border border-gray-200'
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border border-gray-200'
          />

          <select
            name='roleId'
            onChange={handleChange}
            className='w-full px-4 py-4 rounded-2xl border border-gray-200'
          >

            <option value='3'>
              Buyer / Customer
            </option>

            <option value='2'>
              Farmer / Seller
            </option>

          </select>

          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl'
          >
            Register
          </button>

        </form>

        <p className='text-center mt-6 text-gray-600'>

          Already have account?

          <Link
            to='/login'
            className='text-green-600 font-semibold ml-2'
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;