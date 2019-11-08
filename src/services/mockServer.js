// @flow

const callApi = data => {
  return new Promise((resolve, reject) => {
    resolve(console.log(data));
    reject(new Error("Some thing just went to shit"));
  });
};

const auth = data => {
  console.log(data);
};

const callAuthApi = data => callApi(data);

class AuthService {
  validateUser(data) {
    return callAuthApi(data);
  }
}

const authService = new AuthService();

export { authService };
