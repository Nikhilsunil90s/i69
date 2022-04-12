import * as t from "../types";

export const addUser = (name) => ({
  type: t.ADD_USER,
  payload: name,
});
