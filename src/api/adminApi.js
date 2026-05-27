import api from './axios';

export const getPendingApplications =
async () => {

  const response =
  await api.get(
    '/admin/seller-applications'
  );

  return response.data;
};

export const approveSeller =
async (id) => {

  const response =
  await api.put(
    `/admin/seller-applications/${id}/approve`
  );

  return response.data;
};

export const rejectSeller =
async (id) => {

  const response =
  await api.put(
    `/admin/seller-applications/${id}/reject`
  );

  return response.data;
};