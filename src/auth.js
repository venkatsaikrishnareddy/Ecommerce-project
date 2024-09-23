export const authenticateUser = (username, password) => {
  const mockUser = {
    username: "user",
    password: "password",
  };

  return username === mockUser.username && password === mockUser.password;
};
