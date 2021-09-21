import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, fetchLogin, fetchLogout } from ".";

export const useUser = () => {
  const tokens = useSelector((state) => state.userApi.tokens);
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

  const handleLogout = useCallback(() => {
    tokens && dispatch(fetchLogout(tokens.refresh.token));
  }, [tokens, dispatch]);

  return { handleRegister, handleLogin, handleLogout };
};
