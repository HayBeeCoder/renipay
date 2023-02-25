import {
  ErrorX,
  Eyes,
  EyesClosed,
  Search,
  SuccessTick,
} from "@app/components/Icon/icons";
import classNames from "classnames";
import React, { useRef, useState } from "react";

const Input = ({
  showEyeIcon = false,
  showSearchIcon = false,
  labelTitle,
  loading,
  message,
  placeholder,
  variant = "transparent",
  name,
  value,
  helperText,
  containerClassName,
  inputClassName,
  ...props
}) => {
  const inputRef = useRef(null);
  const [passwordShown, setPasswordShown] = useState(showEyeIcon);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  return (
    <div className={classNames("text-left relative  ", containerClassName)}>
      {labelTitle && (
        <label className="text-h1 leading-l7 text-[#ECE6E6]">
          {labelTitle}
        </label>
      )}

      {showSearchIcon && (
        <span
          className="w-4 h-4 inline-flex translate-x-[calc(18px)] left-0 top-1/2  -translate-y-1/2 absolute items-center justify-center text-neutral-02  cursor-pointer "
          onClick={() => inputRef.current.focus()}
        >
          <Search />
        </span>
      )}
      <div className="relative w-full">
        <input
          ref={inputRef}
          name={name}
          value={value}
          placeholder={placeholder}
          // autoComplete={false}
          type={passwordShown ? "password" : "text"}
          className={classNames(
            " w-full py-[10px] px-4 rounded-[4px] border-[0px]   outline-none   focus:border-[1px] focus:border-neutral-02 placeholder:text-h2 text-[#060606] bg-[#FFF] ",
            {
              "pr-10": showEyeIcon,
              "pl-14": showSearchIcon,
              "bg-transparent border-neutral-02 placeholder:text-neutral-02":
                variant === "transparent",
              "cursor-not-allowed": loading,
              "border-[2px] border-primary-04 ": message?.type === "error",
            },
            inputClassName
          )}
          {...props}
        />
        {showEyeIcon && (
          <span
            className="w-5 h-5 inline-flex cursor-pointer -translate-x-[calc(100%+10px)] left-full top-1/2  -translate-y-1/2 absolute items-center justify-center text-[#060606] "
            onClick={togglePasswordVisiblity}
          >
            {!passwordShown ? <EyesClosed /> : <Eyes />}
          </span>
        )}
      </div>
      {message?.type !== "error" && helperText && (
        <p className={classNames("text-[10px] text-neutral-01 mt-[1px]")}>
          {helperText}
        </p>
      )}
      {message && message?.type !== "" && (
        <div className="flex items-center gap-2 mt-[2px]">
          <p className="w-3 h-3">
            {message?.type === "error" && <ErrorX />}
            {message?.type === "success" && <SuccessTick />}
          </p>
          <p
            className={classNames("text-[10px] mt-[2px] ", {
              "text-success": message?.type === "success",
              "text-[#FF5B5B]": message?.type === "error",
            })}
          >
            {message.value}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
