"use client";
import { Fragment, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { Input } from "@app/components/Forms";
import { RootState } from "@app/storeSlices";
import { useAppDispatch } from "@app/storeSlices/hooks";
import { signIn } from "@app/storeSlices/user/thunks";
import { Button } from "@app/styles/template";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { userLogin, loading } = useSelector((store: RootState) => store.user);

  type IFormInput = {
    email: string;
    password: string;
  };

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitForm = useCallback(
    (data: IFormInput) => {
      const dataF = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        dataF.append(key, value);
      });
      dispatch(signIn(dataF));
    },
    [dispatch],
  );

  useEffect(() => {
    if (userLogin && !userLogin.error) {
      redirect("/");
    }
  }, [userLogin]);

  return (
    <Fragment>
      <div className="centered">
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Signin</h1>

          <Input
            control={control as any}
            placeholder="Email"
            name="email"
            rules={{ required: true }}
          />
          <Input
            control={control as any}
            placeholder="Password"
            name="password"
            rules={{ required: true }}
          />
          <Button>Submit</Button>
          {loading && <div>Submitting...</div>}
        </form>
      </div>
    </Fragment>
  );
};

export default LoginPage;
