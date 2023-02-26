// import Button from "@app/components/common/Button";
import Input from "@app/components/common/Input";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link } from "@app/components/Icon/icons";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Layout from "../Layout";
// import { REGEX_EMAIL } from "@app/constants";
import AuthForm from "../components/AuthForm";
// import { createUser } from "@app/api/authapi";
// import { toast } from "react-toastify";
// import Toast from "@app/components/common/Toast";
// import { storage } from "@app/utils";
// import { sendAnalyticsToFirebase } from "@app/config/firebase.config";

const INFO = [
  {
    type: "Full Name",
    name: "fullName",
    placeholder: "Enter your name"
  },
  {
    type: "Email",
    name: "email",
    placeholder: "Please enter a valid email address",
  },
  {
    type: "Password",
    name: "password",
    placeholder: "Passsword must be at least 8 characters long.",
    // helperText: "Passsword must contain an Upper case, Lower case, a Digit and a Special character and at least 8 characters long."
  },
];

const Signup = () => {
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const navigate = useNavigate();

  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     fullName: Yup.string()
  //       .min(1, "This field can't be empty!")
  //       .required("This field is required!"),
  //     email: Yup.string()
  //       .trim()
  //       .matches(REGEX_EMAIL, "Email address is invalid!")
  //       .required("This field is required!"),
  //     password: Yup.string()
  //       .min(8, "Password must be at least 8 characters long!")
  //       .required("This field is required!"),
  //     // token: Yup.string().email('Invalid email address').required('Required'),
  //   }),
  //   onSubmit: (values) => {
  //     // alert(JSON.stringify(values, null, 2));
  //     setIsCreatingUser(true);
  //     createUser(values)
  //       .then((res) => {
  //         if (res.statusCode === 200) {
  //           toast.success(<Toast message={res.message} toastType="success" />, {
  //             toastId: "toast-created-user-successfully",
  //           });
  //           const { id } = res?.data;
  //           storage.set("id", id);
  //           storage.set("email", values.email);
  //         }
  //       })
  //       .then((e) => {
  //         sendAnalyticsToFirebase("signup");
  //         navigate("/auth/verify");
  //       })
  //       .catch((e) => console.log("error in signup page: ", e))
  //       .finally(() => {
  //         setIsCreatingUser(false);
  //       });
  //   },
  // });
  // const handleSubmit = () => {};
  return (
    <AuthForm
      // handleSubmit={formik.handleSubmit}
      isLoading={isCreatingUser}
      title="Registration"
      description={
        <>
          Welcome to Renipay
          <span class="wave">👋</span>
          {/* <span className="text-primary-05">WAP TV </span> */}
        </>
      }
      text="Create your free account"
      belowButtonText={
        <>
          {" "}
          Have an account already ?{" "}
          <Link to="/auth/signin">
            <span className="text-primary-05 hover:underline hover:underline-offset-2">
              Sign in
            </span>
          </Link>
        </>
      }
    >
      {INFO.map((item, index) => (
        <>
          <Input
            // onChange={formik.handleChange}
            // value={formik.values[item.name]}
            // name={item.name}
            // onBlur={formik.handleBlur}
            labelTitle={item.type}
            loading={isCreatingUser}
            placeholder={item.placeholder || "p laceholder"}
            showEyeIcon={item.name === "password"}
            variant="transparent"
            key={index}

            // message={
            //   formik.touched[item.name] &&
            //   formik.errors[item.name] && {
            //     type: "error",
            //     value: formik.errors[item.name],
            //   }
            // }
            helperText={item.helperText}
          />
        </>
      ))}
    </AuthForm>
  );
};

export default Signup;
