import axios from "axios";
import { ICPRole } from "../dialogs/RequestDemoDialog";

export const SubmitFormData = (data: {
  name: string;
  schoolName: string;
  role: ICPRole;
  phoneNumber: string;
  email?: string;
}) => {
  axios.post("https://app.vignamlabs.com/api/v1/demo/create", data);
};
