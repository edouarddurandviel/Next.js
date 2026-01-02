export const signIn = async (
  credentials: string,
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
) => {
  if (credentials === "credentials" && email && password) {
    if (email === "test@test.com" && password === "password") {
      return "azaz45465465464";
    }
  } else {
    throw new Error("Wrong email or password");
  }
  return signIn;
};
