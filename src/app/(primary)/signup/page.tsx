"use client";
import { Fragment, useActionState } from "react";
import Errors from "@app/components/Forms/Errors/errors";
import InputGroup from "@app/components/Forms/InputGroup";
import signUpAction from "@app/actions/signUpAction";
import { UserAccount } from "@app/types/types";
import { Button, Centered, Form, ErrorContainer } from "@app/styles/template";

// React Use action
// backend and fronend validation
// backend redirect

const SignUpPage = () => {
  const initialState = {
    data: {
      email: "",
      password: "",
    },
    error: [],
  } as UserAccount;

  const [state, formAction, pending] = useActionState(signUpAction, initialState);

  return (
    <Fragment>
      <Centered>
        <Form action={formAction}>
          <h1>Create an account</h1>
          <p>(useActionState) width backend validation</p>

          {state && state.error && (
            <ErrorContainer>
                  <Errors errors={state.error} />
            </ErrorContainer>
        
          )}

          <InputGroup
            label="Email"
            type="text"
            value={(state && state.data.email) || ""}
            state={state && state.error}
            name="email"
          />
          <InputGroup
            label="Password"
            type="text"
            value={(state && state.data.password) || ""}
            state={state && state.error}
            name="password"
          />
          <Button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</Button>
        </Form>
      </Centered>
    </Fragment>
  );
};

export default SignUpPage;
