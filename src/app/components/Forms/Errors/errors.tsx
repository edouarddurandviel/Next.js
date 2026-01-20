"use client";
import { UserErrors } from "@app/types/types";
import { ErrorMessage, FormErrorMessage } from "./styles";

const Errors = ({ errors }: { errors: UserErrors[] }): React.ReactNode => {
  return errors.map((e) => (
    <FormErrorMessage key={e.key}>
      <ErrorMessage>
        <strong>{e.key} :</strong> {e.message}
      </ErrorMessage>
    </FormErrorMessage>
  ));
};

export default Errors;
