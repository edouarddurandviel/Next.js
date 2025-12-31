import { ValidationErrorItem } from 'joi';
import { UserErrors } from '../types/types';

export const errorMessages = (details: ValidationErrorItem[]) => {
  const errors: UserErrors[] = [];
  details.map((error) => {
    errors.push({ key: error.context?.key, message: error.message });
  });
  return errors;
};
