import {
  useEffect,
  useState
} from 'react';

import {
  getMyFarms
} from '../../api/farmApi';

const MyFarms = () => {

  const [farms, setFarms] =
  useState([]);

  const loadFarms =
  async () => {

    const response =
    await getMyFarms();

    setFarms(
      response.data
    );
  };

  useEffect(() => {

    loadFarms();

  }, []);

  return (

    <div className='min-h-screen bg-gray-100 p-6'>

      <h1 className='text-3xl font-bold mb-6'>
        My Farms
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

        {farms.map((farm) => (

          <div
            key={farm.farm_id}
            className='bg-white rounded-3xl shadow-md p-6'
          >

            <h2 className='text-2xl font-bold text-green-700'>
              {farm.farm_name}
            </h2>

            <p className='text-gray-600 mt-3'>
              {farm.description}
            </p>

            <p className='mt-3 text-sm text-gray-500'>
              {farm.address}
            </p>

            <div className='mt-5'>

              {farm.is_approved ? (

                <span className='bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold'>
                  Approved
                </span>

              ) : (

                <span className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold'>
                  Pending Approval
                </span>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default MyFarms;