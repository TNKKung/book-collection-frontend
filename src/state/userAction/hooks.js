import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRegister,
  fetchLogin,
  fetchLogout,
  fetchCreateBook,
  fetchUser,
  fetchUpdateUser,
} from ".";

export const useUser = () => {
  const { user, tokens } = useSelector((state) => state.userApi);
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

  const handleGetUser = useCallback(() => {
    tokens && dispatch(fetchUser(tokens.refresh.token));
  }, [tokens, dispatch]);

  const handleUpdateUser = useCallback(
    (data) => {
      dispatch(fetchUpdateUser(data));
    },
    [dispatch]
  );

  const handleCreateBook = useCallback(
    (data) => {
      dispatch(fetchCreateBook(data));
    },
    [dispatch]
  );

  return {
    handleRegister,
    handleLogin,
    handleLogout,
    handleCreateBook,
    handleGetUser,
    handleUpdateUser,
  };
};
