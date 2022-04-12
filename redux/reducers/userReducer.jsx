import * as t from "../actions/userActions";

const initialState = {
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_USER:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return { ...state };
  }
};

export default userReducer;
