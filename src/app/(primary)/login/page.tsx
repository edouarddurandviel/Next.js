"use client";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { redirect, RedirectType } from "next/navigation";
import { Input } from "@app/components/Forms";
import { Button, Centered, Form, Notes } from "@app/styles/template";
import { useSignUpHook } from "@app/hooks/user/use-user";


const LoginPage = () => {
  const { trigger, user, error, isMutating } = useSignUpHook();

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

  const submitForm = (inputData: IFormInput) => {
      trigger(inputData);
  };

  useEffect(() => {
    if (user && !user.error) {
      redirect("/dashboard", RedirectType.push)
    }
  }, [user])

 
  return (
    <Fragment>
      <Centered>
        {error}
        <Form onSubmit={handleSubmit(submitForm)}>
          <h1>Signin</h1>
          <Notes>
            <strong>React-Hook-Form</strong>, with{" "}
            <strong>SWR api and hooks</strong>
            and server side data validation
          </Notes>

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
          <Button>{isMutating ? "Submitting..." : "Submit"}</Button>
        </Form>
      </Centered>
    </Fragment>
  );
};

export default LoginPage;
