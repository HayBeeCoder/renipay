import createFactory from "./helpers/contextFactory";
import storage from "../storage";
// import { getUserProfile, loginUser } from "@app/api/authapi";

import { toast } from "react-toastify";
import Toast from "@app/components/common/Toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import {
  INVALID_AUTH_MESSAGE,
  NO_USER_FOUND,
  INVALID_TOKEN,
} from "@app/constants";
import { getUser, logUserIn } from "@app/api/auth";
import { useGlobalStateContext } from "./GlobalStateProvider";
import useLocalStorage from "../hooks/useLocalStorage";

const [AuthContext, useAuthContext] = createFactory();

export { useAuthContext };

// const getUser = async () {
//   const user =  await
// }

const causeLogout = {
  NO_USER_FOUND,
  INVALID_TOKEN,
};

const AuthProvider = ({ children, setIsLoadingUser }) => {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [location, setLocation] = useState("/");
  const [, setToken] = useLocalStorage("token");
  // const { setGlobalState } = useGlobalStateContext();
  const [user, setUser] = useState(() => {
    const token = storage.getToken();
    // // const email = storage.get("email");
    if (token) return {};
    // const isValid = token;
    // // const isValid = token && email;

    // if (isValid) {
    //   return { token };
    //   // return { token, email };
    // }

    return null;
  });

  // useEffect(() => {
  // if (window.performance) {
  //   if (performance.navigation.type == 1) {
  //     // alert("This page is reloaded");
  //     sendAnalyticsToFirebase("dashboard_reloaded");
  //   } else {
  //     // alert("This page is not reloaded");
  //   }
  // }
  // }, []);

  const login = useCallback(
    async (value) => {
      // const data = await setTimeout(() => {}, 3000);
      const data = await logUserIn(value);

      console.log({ data, token: data?.token });
      // const { token } = data;
      // const { isVerified, email } = data?.user;
      setToken(await data?.token);
      // delete data?.token;

      // const authResponse = await signInWithCustomToken(auth, token);
      // const { idToken, refreshToken } = authResponse?._tokenResponse;
      // // console.log({ authResponse });
      // storage.set("id", authResponse?.user?.uid);
      // storage.set("type", type);
      // if (!isVerified) {
      //   toast.info(
      //     <Toast
      //       message="You need to verify your email account before logging in."
      //       toastType="info"
      //     />,
      //     {
      //       toastId: "toast-need-to-verify",
      //     }
      //   );
      //   navigate("/auth/verify");
      // } else {
      // storage.setToken(idToken);
      // storage.set("ref_", refreshToken);
      // storage.clear("id");
      setUser(data);

      toast.success(
        <Toast
          message="Login successful"
          toastType="success"
          data-testid="login-success"
        />,
        {
          toastId: "toast-successful-login",
        }
      );
      // sendAnalyticsToFirebase("login");

      // console.log({ location });
      navigate(location, { replace: true });
    },

    // save to in app memory , when refreshed saved local data is retrieved
    // else log user out
    [location, navigate, setToken]
  );

  const logout = useCallback(() => {
    if (location === "/logout") setLocation("/");
    setUser(null);
    storage.clearToken();

    navigate("/auth/signin", { replace: true });
    queryClient.clear();
  }, [location, navigate, queryClient]);

  const value = useMemo(
    () => ({
      login,
      user,
      logout,
      setLocation,
    }),
    [login, logout, user]
  );

  useEffect(() => {
    // console.log({ "pathname.includes('auth')": pathname.includes("auth") });
    // if (!pathname.includes("auth")) {
    (async function () {
      try {
        if (storage.getToken()) {
          setIsLoadingUser(true);

          const user = await getUser(storage.getToken());

          setUser(user);
          console.log({ user });
          // if (pathname === "/") {
          navigate("/profile");
          // }
        } else logout();
      } catch (error) {
        // alert("ki");
        // if (error?.response?.data?.message === INVALID_AUTH_MESSAGE) logout();
        if (causeLogout[error?.response?.data]) logout();
        console.log("error in getting user's profile:", error);
      }
      setIsLoadingUser(false);
    })();
  }, [logout, navigate, pathname, setIsLoadingUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
