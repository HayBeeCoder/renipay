import classNames from "classnames";
import { Routes, Navigate, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./utils/contexts.js/AuthProvider";
import GlobalStateProvider from "./utils/contexts.js/GlobalStateProvider";

// import "react-toastify/dist/ReactToastify.css";
import { Profile, Signin, Signup } from "./views";
// import NotFound from "./views/NotFound";
// import Account from "./views/Account";
// import GlobalStateProvider from "./utils/contexts.js/GlobalStateProvider";
// import classNames from "classnames";
import { VanillaX } from "./components/Icon/icons";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./components/PrivateRoute";
// import AuthProvider from "./utils/contexts.js/AuthProvider";
// import PrivateRoute from "./components/common/PrivateRoute";
// import { DashboardLayout } from "./layouts";
// import { useState } from "react";
// import { useLocalStorage } from "./utils/hooks";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnmount: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: 5 * 60 * 1000,
//     },
//   },
// });

// const contextClass = {
//   success: "border-[#1CCB57] bg-[#D2F5DD]",
//   error: "border-primary-05 bg-[#FFD8D8]",
//   warning: "border-[#FAC91C] bg-[#FEF4D2]",
//   info: "border-[#65B7E9] bg-[#E0F1FB]",
// };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const contextClass = {
  success: "border-[#1CCB57] bg-[#D2F5DD]",
  error: "border-primary-05 bg-[#FFD8D8]",
  warning: "border-[#FAC91C] bg-[#FEF4D2]",
  info: "border-[#65B7E9] bg-[#E0F1FB]",
};

function App() {
  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // const [, setShowModal] = useState(false);
  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useLocalStorage(
  //   "isSidebarCollapsed",
  //   false
  // );
  // const []
  // const [notifications] = useState([
  //   {
  //     title:
  //       "Rewatch your favourite movies and kindly make a subscription to keep enjoying them.",
  //     time: "1 week ago",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIWV_rV2LTDtBSxx8kSla05jpHywafXPObg&usqp=CAU",
  //   },
  //   {
  //     title:
  //       "Rewatch your favourite movies and kindly make a subscription to keep enjoying them.",
  //     time: "1 week ago",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIWV_rV2LTDtBSxx8kSla05jpHywafXPObg&usqp=CAU",
  //   },
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIWV_rV2LTDtBSxx8kSla05jpHywafXPObg&usqp=CAU",
  //     title:
  //       "Rewatch your favourite movies and kindly make a subscription to keep enjoying them.",
  //     time: "1 week ago",
  //   },
  //   {
  //     title:
  //       "Rewatch your favourite movies and kindly make a subscription to keep enjoying them.",
  //     time: "1 week ago",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIWV_rV2LTDtBSxx8kSla05jpHywafXPObg&usqp=CAU",
  //   },
  // ]);
  // const location = useLocation();
  // const state = location.state;

  // )
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStateProvider>
          <Routes>
            {/* <Route path="/" >
              <Ro
            </Route> */}
            <Route
              path="/auth"
              element={<Navigate to="/auth/signup" replace />}
            />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/profile" element={<PrivateRoute  component={Profile}/>}/>
          </Routes>

          <ToastContainer
            limit={3}
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            icon={false}
            toastClassName={({ type }) =>
              classNames(
                contextClass[type || "default"],
                " rounded-[4px] border-[1px] h-max relative flex "
              )
            }
            closeButton={({ type, closeToast }) => (
              <span
                onClick={closeToast}
                className={classNames("h-2 w-2 flex-shrink-0 p-2 mr-3", {
                  "text-primary-05": type === "error",
                  "text-[#1CCB57]": type === "success",
                  "text-[#FAC91C]": type === "warning",
                  "text-[#65B7E9]": type === "info",
                })}
              >
                <VanillaX className="w-3 h-3" />
              </span>
            )}
          />
        </GlobalStateProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
