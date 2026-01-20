"use client";
import { Fragment, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { RootState } from "@app/storeSlices";
import { useAppDispatch } from "@app/storeSlices/hooks";
import { signIn } from "@app/storeSlices/user/thunks";
import { Input } from "@app/components/Forms";
import { Button, Centered, Form } from "@app/styles/template";

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
      <Centered>
        <Form onSubmit={handleSubmit(submitForm)}>
          <h1>Signin</h1>

          <Input
            control={control as unknown}
            placeholder="Email"
            name="email"
            rules={{ required: true }}
          />
          <Input
            control={control as unknown}
            placeholder="Password"
            name="password"
            rules={{ required: true }}
          />
          <Button>{loading ? "Submitting..." : "Submit"}</Button>
        </Form>
      </Centered>
    </Fragment>
  );
};

export default LoginPage;
