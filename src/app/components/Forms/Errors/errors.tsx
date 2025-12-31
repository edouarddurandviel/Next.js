'use client';
import { UserErrors } from 'edouard/types/types';

const Errors = ({ errors }: { errors: UserErrors[] }): React.ReactNode => {
  return errors.map((e, index) => (
    <div key={index}>
      <span>{e.key} :</span>
      {e.message}
    </div>
  ));
};

export default Errors;
