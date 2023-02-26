import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import Input from "@app/components/common/Input";
// import * as Yup from "yup";
// import { useFormik } from "formik";
import { REGEX_EMAIL } from "@app/constants";
import { Link } from "react-router-dom";
// import { useAuthContext } from "@app/utils/contexts.js/AuthProvider";

const INFO = [
  {
    type: "Email",
    name: "email",
  },
  {
    type: "Password",
    name: "password",
  },
];

const Signin = () => {
  // const { login } = useAuthContext();
  const [isLoggingUserIn, setIsLogginUserIn] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .trim()
  //       .matches(REGEX_EMAIL, "Email address is invalid!")
  //       .required("This field is required!"),
  //     password: Yup.string()
  //       .min(8, "Password must be at least 8 characters long!")
  //       .required("This field is required!"),
  //     // token: Yup.string().email('Invalid email address').required('Required'),
  //   }),
  //   onSubmit: async (values) => {
  //     setIsLogginUserIn(true);
  //     try {
  //       await login(values);
  //     } catch (error) {
  //       // "error in Signin Component: ", error;
  //     }

  //     setIsLogginUserIn(false);
  //   },
  // });

  return (
    <AuthForm
      // handleSubmit={formik.handleSubmit}
      
      isLoading={isLoggingUserIn}
      text="Sign In"
      title="Welcome back!"
      description="Log in to your account"
      belowButtonText={
        <>
          {" "}
          Don't have an account ?{" "}
          <Link to="/auth/signup">
            {" "}
            <span className="text-primary-06 hover:underline hover:underline-offset-2">
              Sign up
            </span>
          </Link>
        </>
      }
    >
      {INFO.map((item, index) => (
        <Input
          // onChange={formik.handleChange}
          // value={formik.values[item.name]}
          name={item.name}
          // onBlur={formik.handleBlur}
          labelTitle={item.type}
          loading={isLoggingUserIn}
          placeholder={item.placeholder || "placeholder"}
          showEyeIcon={item.name === "password"}
          variant="transparent"
          key={index}
          // message={
            // formik.touched[item.name] &&
            // formik.errors[item.name] && {
            //   type: "error",
            //   value: formik.errors[item.name],
            // }
          // }
        />
      ))}
      <div className="text-right">
        {/* <input
          id="remember_me"
          type="checkbox"
          name="remember_me"
          checked={formik.values.remember_me}
          className="hidden"
          onChange={formik.handleChange}
        /> */}
        {/* <label
          htmlFor="remember_me"
          name="remember_me"
          className="text-[10px] text-[#fff] cursor-pointer flex items-center gap-2"
        >
          <span className="w-4 h-4">
            {formik.values.remember_me ? <TickedChecked /> : <EmptySquare />}
          </span>{" "}
          <span>Remember Me?</span>
        </label> */}

        <Link to="/auth/forgot">
          <span className="hover:underline hover:underline-offset-2 text-[#fff] text-[10px]">
            Forgot Password?
          </span>
        </Link>
      </div>
    </AuthForm>
  );
};

export default Signin;
