"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@app/components/Forms";
import { Button, Centered, Form, Notes } from "@app/styles/template";
import { useSignUpHook } from "@app/hooks/user/use-user";
import { useRouter } from "next/navigation";
import { createCacheData } from "@app/lib/storageCache";
import { UserErrors } from "@app/types/types";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState<any>();
  const { trigger, user, error, isMutating } = useSignUpHook();
  const router = useRouter()

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

  const submitForm = useCallback(async (inputData: IFormInput) => {
      const result = await trigger(inputData);
      if(!result.error) {
        await createCacheData(result.user)
        router.push("/dashboard")
      }else{
        setErrorMessage(result.error)
      }
  }, [trigger, router]);


  return (
    <Fragment>
      <Centered>
        <Form onSubmit={handleSubmit(submitForm)}>
          <h1>Signin</h1>
          <Notes>
            <strong>React-Hook-Form</strong>, with{" "}
            <strong>SWR api and hooks</strong>
            and server side data validation
          </Notes>

          {(errorMessage && 
          Array.isArray(errorMessage) && 
          errorMessage[0].message) || errorMessage}

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
