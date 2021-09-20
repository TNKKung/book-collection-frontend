import { useCallback} from "react";
import { useDispatch } from "react-redux";
import { fetchRegister, fetchLogin } from ".";

export const useUser = () => {
  const dispatch = useDispatch();
  const handleRegister = useCallback(
    (data) => {
      dispatch(fetchRegister(data));
    },
    [dispatch]
  );
  const handleLogin = useCallback(
    (data) => {
      dispatch(fetchLogin(data));
    },
    [dispatch]
  );

  return { handleRegister, handleLogin };
};
