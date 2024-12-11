# Coding Practices

### .env

1. The access to `.env` files are taken in different methods depending on the type of app i.e. if it is a backend app or frontend app.
2. It also depends on how the app is created like if it is created using `create-react-app` or `vite`.
3. For now, if you have created the app using `create-react-app` then the env variables' name should have a suffix `REACT_APP_` e.g `REACT_APP_VARIABLE_1` and to access the variable, use `process.env.REACT_APP_VARIABLE_1`.
4. If you have created the app using `vite` then the env variables should have a suffix `VITE_` e.g. `VITE_VARIABLE_1`. To acces the variable use `import.meta.env.VITE_VARIABLE_1`.

### Vendor Lockin

1. You might be using different third party libraries or services in your code. Those third party elements are called vendors.
2. You have to write your code in such a way that if you have to deboard any existing vendor and onboard a new one then you dont have to make a lot of changes in the code.
3. Generally, some service-functions are made in code that will talk to the vendors only and other functions in the code will use those service-functions to get the data needed from the third party vendors.
4. Thus in case of vendor change, code changes can be limited to those service-functions only.
