import {
  Link
} from 'react-router-dom';

const FarmerDashboard = () => {

  return (

    <div className='min-h-screen bg-green-50'>

      <div className='bg-green-700 text-white p-6 shadow-lg'>

        <h1 className='text-4xl font-bold'>
          Farmer Dashboard
        </h1>

        <p className='mt-2 text-green-100'>
          Manage farms, products and orders
        </p>

      </div>

      <div className='p-6'>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          <Link
            to='/farms/create'
            className='bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-all'
          >

            <h2 className='text-2xl font-bold text-green-700'>
              Create Farm
            </h2>

            <p className='text-gray-600 mt-3'>
              Add new farm details
            </p>

          </Link>

          <Link
            to='/farms/my-farms'
            className='bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-all'
          >

            <h2 className='text-2xl font-bold text-green-700'>
              My Farms
            </h2>

            <p className='text-gray-600 mt-3'>
              View all your farms
            </p>

          </Link>

          <div
            className='bg-white rounded-3xl shadow-md p-6 opacity-60'
          >

            <h2 className='text-2xl font-bold text-green-700'>
              Products
            </h2>

            <p className='text-gray-600 mt-3'>
              Coming Soon
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FarmerDashboard;