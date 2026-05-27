import {
  useState
} from 'react';

import {
  useNavigate,
  Link
} from 'react-router-dom';

import {
  loginUser
} from '../../api/authApi';

import {
  useAuth
} from '../../context/AuthContext';

const Login = () => {

  const navigate =
  useNavigate();

  const { login } =
  useAuth();

  const [formData, setFormData] =
  useState({
    mobileNumber:'',
    password:''
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
      await loginUser(formData);

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
        'Login Failed'
      );
    }
  };

  return (

    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white p-4'>

      <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-8'>

        <h1 className='text-4xl font-bold text-center text-green-700 mb-2'>
          SR Farms
        </h1>

        <p className='text-center text-gray-500 mb-8'>
          Farm Fresh Marketplace
        </p>

        <form
          onSubmit={handleSubmit}
          className='space-y-5'
        >

          <div>

            <label className='block mb-2 font-semibold text-gray-700'>
              Mobile Number
            </label>

            <input
              type='text'
              name='mobileNumber'
              placeholder='Enter Mobile Number'
              onChange={handleChange}
              className='w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-green-100'
            />

          </div>

          <div>

            <label className='block mb-2 font-semibold text-gray-700'>
              Password
            </label>

            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              onChange={handleChange}
              className='w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-green-100'
            />

          </div>

          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all duration-300'
          >
            Login
          </button>

        </form>

        <p className='text-center mt-6 text-gray-600'>

          Don&apos;t have an account?

          <Link
            to='/register'
            className='text-green-600 font-semibold ml-2'
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;