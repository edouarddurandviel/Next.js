import { ChangeEvent, useState } from 'react';
import FormError from '../Errors/formErrors';
import { UserErrors } from 'edouard/types/types';

const Index = ({
  type,
  name,
  value,
  state,
}: {
  type: string;
  name: string;
  value: string;
  state: UserErrors[] | undefined;
}) => {
  const [show, setShow] = useState<boolean>(true);
  const [values, setValues] = useState<string>(value || '');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValues(e.target.value || '');
    setShow(e && e.target.value ? false : true);
  };

  return (
    <div className='InputGroup'>
      <label htmlFor={name}>{name}</label>
      <input type={type} value={values || ''} name={name} onChange={(e) => handleChange(e)} />
      {show && <FormError state={state && state} name={name} />}
    </div>
  );
};

export default Index;
