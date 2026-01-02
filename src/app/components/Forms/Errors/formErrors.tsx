import { UserErrors } from "@app/types/types";

const FormError = ({ state, name }: { state: UserErrors[] | undefined; name: string }) => {
  if (state) {
    const error = state.filter((e: any) => e.key === name)[0];
    return error ? <div className="formError">{error.message}</div> : null;
  }
};

export default FormError;
