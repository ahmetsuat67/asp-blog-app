import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userdata) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/auth/login/`,
        userdata
      ); // axios ile post isteği atıldı userdata login formdan gelen values bilgisi içermektedir
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login Success");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };
  const logout = async (userdata) => {
    dispatch(fetchStart());

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout Success");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };
  const register = async (userdata) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/register/`,
        userdata
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Login Success");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };
  return { login, logout, register };
};

export default useAuthCalls;
