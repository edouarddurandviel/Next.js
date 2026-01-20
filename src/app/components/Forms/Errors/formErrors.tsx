import { UserErrors } from "@app/types/types";
import { FormErrorMessage } from "./styles";

const FormError = ({ state, name }: { state: UserErrors[] | undefined; name: string }) => {
  if (state) {
    const error = state.filter((e: UserErrors) => e.key === name)[0];
    return error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null;
  }
};

export default FormError;
