const env = {
    development: {
      BASE_URL: 'http://127.0.0.1:8000/api/v1/login',
      USER_NAME: 'admin@app.com',
      PASSWORD: 'password'
    },
    production: {
        BASE_URL: 'http://127.0.0.1:8000/api/v1/login',
        USER_NAME: 'admin@app.com',
        PASSWORD: 'password'
    },
    test: {
        BASE_URL: 'http://127.0.0.1:8000/api/v1/login',
        USER_NAME: 'admin@app.com',
        PASSWORD: 'password'
    },
  };
  
  export const env_var = env[process.env.NODE_ENV];