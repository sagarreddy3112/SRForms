import {
  useEffect,
  useState
} from 'react';

import {
  getPendingApplications,
  approveSeller,
  rejectSeller
} from '../../api/adminApi';

const SellerApplications = () => {

  const [applications,
  setApplications] =
  useState([]);

  const loadApplications =
  async () => {

    const response =
    await getPendingApplications();

    setApplications(
      response.data
    );
  };

  useEffect(() => {

    loadApplications();

  }, []);

  const handleApprove =
  async (id) => {

    await approveSeller(id);

    loadApplications();
  };

  const handleReject =
  async (id) => {

    await rejectSeller(id);

    loadApplications();
  };

  return (

    <div className='p-6'>

      <h1 className='text-3xl font-bold mb-6'>
        Seller Applications
      </h1>

      <div className='space-y-4'>

        {applications.map((app) => (

          <div
            key={app.application_id}
            className='bg-white rounded-2xl shadow-md p-6'
          >

            <h2 className='text-xl font-bold'>
              {app.farm_name}
            </h2>

            <p>
              {app.first_name}
              {' '}
              {app.last_name}
            </p>

            <p>
              {app.mobile_number}
            </p>

            <div className='flex gap-4 mt-4'>

              <button
                onClick={() =>
                  handleApprove(
                    app.application_id
                  )
                }
                className='bg-green-600 text-white px-5 py-2 rounded-xl'
              >
                Approve
              </button>

              <button
                onClick={() =>
                  handleReject(
                    app.application_id
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

export default SellerApplications;