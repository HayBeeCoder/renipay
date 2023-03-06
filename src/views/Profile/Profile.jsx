import Button from "@app/components/common/Button";
import Input from "@app/components/common/Input";
import Skeleton from "@app/components/common/Skeleton";
import capitalize from "@app/helpers/capitalize";
import { useAuthContext } from "@app/utils/contexts.js/AuthProvider";
import React from "react";

const Profile = ({ isLoadingUser }) => {
  const { user } = useAuthContext();
  const value = "renipay.onrender.com/payment/abass";

  console.log({ user });
  return (
    <div className="my-6">
      <section className="p-4 rounded-md shadow-sm max-w-3xl mx-auto">
        <span className="w-20 bg-success h-20 rounded-full"></span>
        <div>
          {isLoadingUser ? (
            <Skeleton width={200} height={80} />
          ) : (
            <>
              <p>
                {capitalize(user?.first_name) +
                  " " +
                  capitalize(user?.last_name)}
              </p>
              <div className="flex gap-4 items-stretch">
                <Input
                  placeholder="renipay"
                  value={value}
                  disabled={true}
                  inputClassName="w-52"
                  // className="w-52"
                />
                <span className="w-9 h-9 inline-block bg-primary-01 rounded-[4px]"></span>
              </div>
            </>
          )}
        </div>
        <Button
          letterCase="capitalize"
          // loading={isLoading}
          className=""
          type="button"
          // disabled={disableButton}
          size="large"
        >
          Edit my profile
        </Button>
      </section>
      Profile
    </div>
  );
};

export default Profile;
