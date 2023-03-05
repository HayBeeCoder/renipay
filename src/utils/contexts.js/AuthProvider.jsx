import createFactory from "./helpers/contextFactory";
import storage from "../storage";
// import { getUserProfile, loginUser } from "@app/api/authapi";

import { toast } from "react-toastify";
import Toast from "@app/components/common/Toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { INVALID_AUTH_MESSAGE } from "@app/constants";
import { logUserIn } from "@app/api/auth";

const [AuthContext, useAuthContext] = createFactory();

export { useAuthContext };

const AuthProvider = ({ children }) => {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [location, setLocation] = useState("/");
  const [user, setUser] = useState(() => {
    const token = storage.getToken();
    // const email = storage.get("email");

    const isValid = token;
    // const isValid = token && email;

    if (isValid) {
      return { token };
      // return { token, email };
    }

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
      console.log({ value });
      // const data = await setTimeout(() => {}, 3000);
      const data = await logUserIn(value);

      // const { token } = data;
      // const { isVerified, email } = data?.user;
      storage.setToken(data?.token);
      delete data?.token;

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
    [location, navigate]
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
    // const token = storage.getToken()
    //   .then((data) => {
    //     if (!data?.isVerified) {
    //       navigate("/auth/verify");
    //     } else {
    //       setUser(data);
    //     }
    //   })
    //   .
    // if (!pathname.includes("auth")) {
    // getUserProfile()
    try {
      const token = storage.getToken();
      setUser({ token });
    } catch (error) {
      if (error?.response?.data?.message === INVALID_AUTH_MESSAGE) logout();
      console.log("error in getting user's profile:", error);
    }
  }, [logout, navigate, pathname]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
