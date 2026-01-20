import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { UserSignin } from "@app/types/types";
import { signIn, fetchUserWithEmail, createUserProfil } from "@app/services/user/api-user";

export function useSignUpHook(user: UserSignin) {
  const { trigger, data, error, isMutating } = useSWRMutation("api/user", () => signIn({ user }));

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}

export function useUserWithEmailHook(id: string) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(`api/user/${id}`, () =>
    fetchUserWithEmail(id),
  );

  return {
    isLoading,
    isValidating,
    data,
    mutate,
    error,
  };
}

export function useCreateUserHook() {
  // optimisticData: same as mutate's optimisticData
  // revalidate = true: same as mutate's revalidate
  // populateCache = false: same as mutate's populateCache, but the default is false
  // rollbackOnError = true: same as mutate's rollbackOnError
  // throwOnError = true: same as mutate's throwOnError
  // onSuccess(data, key, config):　 callback function when a remote mutation has been finished successfully
  // onError(err, key, config): callback function when a remote mutation has returned an error

  const options = {
    optimisticData: true,
  };

  const { trigger, isMutating, data, error } = useSWRMutation(
    "/api/user",
    createUserProfil,
    options,
  );

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}
