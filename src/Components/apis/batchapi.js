import { axiosGet, axiosPost, axiosPut } from "./api";

export const deleteBatch = (token, batch) => {
  return axiosPut(`/batch/delete`, { batch }, token);
};

export const getBatchNames = (token) => {
  return axiosGet(`/batch/names`, token);
};

/* export const getAttendanceReport = (token, batch) => {
  return axiosPost(`/reports/attendance-report`, { batch }, token);
}; */

export const getBatchHistory = (id, token) => {
  return axiosGet(`/batch/history/${id}`, token);
};
export const Addbatch = (name,id,token) => {
  return axiosPost(`/Admin/batch/newbatch/${id}`,name ,token);
};