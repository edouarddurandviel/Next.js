import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { signIn, fetchUserWithEmail, createUserProfil, signOut } from "@app/hooks/user/api-user";

const domain = "http://localhost:3000"

export function useSignUpHook() {
  const { trigger, data, error, isMutating } = useSWRMutation(domain+"/api/user/signin", signIn);

  return {
    trigger,
    isMutating,
    user: data,
    error,
  };
}

export function useSignOutHook() {
  const { trigger, data, error, isMutating } = useSWRMutation(domain+"/api/user/signout", signOut);

  return {
    trigger,
    isMutating,
    data,
    error,
  };
}

export function useUserWithEmailHook(id: string) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    domain+`api/user/${id}`,
    fetchUserWithEmail,
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
    domain+"/api/user",
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
