import {
  useEffect,
  useState
} from 'react';

import {
  getPendingFarms,
  approveFarm,
  rejectFarm
} from '../../api/adminFarmApi';

const FarmApprovals = () => {

  const [farms, setFarms] =
  useState([]);

  const loadFarms =
  async () => {

    const response =
    await getPendingFarms();

    setFarms(
      response.data
    );
  };

  useEffect(() => {

    loadFarms();

  }, []);

  const handleApprove =
  async (id) => {

    await approveFarm(id);

    loadFarms();
  };

  const handleReject =
  async (id) => {

    await rejectFarm(id);

    loadFarms();
  };

  return (

    <div className='min-h-screen bg-gray-100 p-6'>

      <h1 className='text-3xl font-bold mb-6'>
        Farm Approvals
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

            <p className='mt-3 text-gray-600'>
              {farm.description}
            </p>

            <p className='mt-3 text-sm text-gray-500'>
              {farm.address}
            </p>

            <div className='mt-5'>

              <p className='font-semibold'>
                Owner:
              </p>

              <p>
                {farm.first_name}
                {' '}
                {farm.last_name}
              </p>

              <p>
                {farm.mobile_number}
              </p>

            </div>

            <div className='flex gap-4 mt-6'>

              <button
                onClick={() =>
                  handleApprove(
                    farm.farm_id
                  )
                }
                className='bg-green-600 text-white px-5 py-2 rounded-xl'
              >
                Approve
              </button>

              <button
                onClick={() =>
                  handleReject(
                    farm.farm_id
                  )
                }
                className='bg-red-600 text-white px-5 py-2 rounded-xl'
              >
                Reject
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FarmApprovals;