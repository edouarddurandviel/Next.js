"use client";
import { Fragment, useActionState } from "react";
import Errors from "@app/components/Forms/Errors/errors";
import InputGroup from "@app/components/Forms/InputGroup";
import signUpAction from "@app/actions/signUpAction";
import { UserAccount } from "@app/types/types";

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
      <div className="centered">
        <form action={formAction}>
          <h1>SignUn - create an account</h1>
          <p>React: useActionState backend validation</p>

          {state && state.error && <Errors errors={state.error} />}

          <InputGroup
            type="text"
            value={(state && state.data.email) || ""}
            state={state && state.error}
            name="email"
          />
          <InputGroup
            type="text"
            value={(state && state.data.password) || ""}
            state={state && state.error}
            name="password"
          />
          <button disabled={pending}>Submit</button>
          {pending && <div>Submitting...</div>}
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
