'use client';
import { Fragment, useActionState, useEffect } from 'react';
import Errors from 'edouard/components/Forms/Errors/errors';
import InputGroup from 'edouard/components/Forms/InputGroup';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import { RootState } from 'edouard/storeSlices';
import signUpAction from 'edouard/actions/signUpAction';
import { UserAccount } from 'edouard/types/types';

const SignUpPage = () => {

  const initialState = {
    data:  {
      email: '',
      password: ''
    },
    error: []
  } as UserAccount;

  const [state, formAction, pending] = useActionState(signUpAction, initialState);

  useEffect(() => {
    if (state && !state.error) {
      redirect('/');
    }
  }, [state]);

  return (
    <Fragment>
      {state && state.error && <Errors errors={state.error} />}

      <div className='centered'>
        <form action={formAction}>
          <h1>SignUn - create an account</h1>
          <InputGroup
            type='text'
            value={(state && state.data.email) || ''}
            state={state && state.error}
            name='email'
          />
          <InputGroup
            type='text'
            value={(state && state.data.password) || ''}
            state={state && state.error}
            name='password'
          />
          <button disabled={pending}>Submit</button>
          {pending && <div>Submitting...</div>}
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
