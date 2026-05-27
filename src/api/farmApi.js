import api from './axios';

export const createFarm =
async (data) => {

  const response =
  await api.post(
    '/farms',
    data
  );

  return response.data;
};

export const getMyFarms =
async () => {

  const response =
  await api.get(
    '/farms/my-farms'
  );

  return response.data;
};