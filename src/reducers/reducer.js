import { INCREMENT, DECREMENT } from "../constants/actionsType";

//state
const initialState = {
  count: 4
};

// Reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };

    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default rootReducer;
