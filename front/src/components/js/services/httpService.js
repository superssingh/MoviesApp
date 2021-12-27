import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    return toast.error("An unexpected error occurred.");
  } else {
    return toast.error("Data not found.");
  }
});

export default {
  get: axios.get,
  // put: axios.put,
  // post: axios.post,
  // delete: axios.delete,
  // patch: axios.patch,
};
