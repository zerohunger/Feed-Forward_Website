import axios from "axios";


export const SubmitFormData = (data: {
name: string;
mobileNumber: string;
  
}) => {
  axios.post("https://app.vignamlabs.com/api/v1/demo/create", data);
};
