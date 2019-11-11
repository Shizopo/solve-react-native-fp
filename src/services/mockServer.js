// @flow

const authApi = userAuthData => {
  const { isValid } = { ...userAuthData };
  const data = auth(userAuthData);

  return new Promise<{}>((resolve, reject) => {
    resolve(data);
    reject(new Error("Something just went wrong"));
  });
};

const auth = userAuthData => {
  const { userNumber, userPassword, isValid } = { ...userAuthData };
  const data = { ...userAuthData };
  //   const userNumberReg = /^\+380\d{9}$/;
  const userNumberReg = /^.{4,}/;
  const userPasswordReg = /^.{4,}/;
  if (!userNumberReg.test(userNumber) || !userPasswordReg.test(userPassword)) {
    data.userNumber = "";
    data.userPassword = "";
    data.isValid = false;
    return data;
  }
  data.isValid = true;
  return data;
};

const callAuthApi = userAuthData => authApi(userAuthData);

class AuthService {
  validateUser(userAuthData: {
    userNumber: string,
    userPassword: string,
    isValid: boolean,
  }) {
    return callAuthApi(userAuthData);
  }
}

const authService = new AuthService();

export { authService };
