import api from './axios';

export const getPendingFarms =
async () => {

  const response =
  await api.get(
    '/admin/farms/pending'
  );

  return response.data;
};

export const approveFarm =
async (id) => {

  const response =
  await api.put(
    `/admin/farms/${id}/approve`
  );

  return response.data;
};

export const rejectFarm =
async (id) => {

  const response =
  await api.put(
    `/admin/farms/${id}/reject`
  );

  return response.data;
};