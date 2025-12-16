export const BASE_URL = "https://backend-expense-tracker-3zxk.onrender.com";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    SIGNUP: "/api/v1/auth/signup",
    GET_USER_INFO: "/api/v1/auth/getuser",
  },

  DASHBOARD: {
    GET_USER_DATA: "/api/v1/dashboard/get",
  },

  INCOME: {
    ADD_USER_INCOME: "/api/v1/income/add",
    GET_USER_INCOME: "/api/v1/income/get",
    DELETE_USER_INCOME: (id) => `/api/v1/income/delete/${id}`,
  },

  EXPENSE: {
    ADD_USER_EXPENSE: "/api/v1/expense/add",
    GET_USER_EXPENSE: "/api/v1/expense/get",
    DELETE_USER_EXPENSE: (id) => `/api/v1/expense/delete/${id}`,
  }
};
