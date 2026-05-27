import api from './axios';

export const applySeller =
async (data) => {

  const response =
  await api.post(
    '/seller/apply',
    data
  );

  return response.data;
};

export const getMyApplication =
async () => {

  const response =
  await api.get(
    '/seller/my-application'
  );

  return response.data;
};