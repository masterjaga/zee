import { axiosGet, axiosPost, axiosPut } from "./api";


//opens class--->get basic info name,batch no,
export const getclasshome = (token,id) => {
    return axiosGet(`/student/${id}`, token);};
//-----1.session links
          //a.AllsessionLink
export const AllsessionLink = (token,batchno) =>{
    return axiosPost(`/batch/${batchno}`, token);};
         //b.SessionDetails
export const  sessionDetails =(batchno,lectno,token)=>{
    return axiosGet(`/batch/${batchno}/${lectno}`,token);};
   //----2.feedback
export const feedback=(batchno,lectno,id,token)=>{
    return axiosPut(`/batch/${batchno}/${lectno}/${id}`,token)}
   //----4. upload tasks
export const uploadTask=(codelink,felink,token,id,)=>{
    return axiosPut(`/student/${id}/`)}
   
//opens dashboard--->on click
export const getmydashboard = (token,id) => {
    return axiosGet(`/dashboard/student/${id}`, token);};


//view tasks --->on click
//queries