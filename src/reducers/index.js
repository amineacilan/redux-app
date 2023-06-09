import { ADD, TOGGLE, CLEAR, DELETE } from "../actions";

const INITIAL_STATE = {
  list: [
    { id: 1, baslik: "Alışveriş Yap", completion: false },
    { id: 2, baslik: "Fatura Öde", completion: true },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            baslik: action.payload,
            completion: false,
          },
        ],
      };
    case TOGGLE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completion: !item.completion }
            : item
        ),
      };
    case CLEAR:
      return {
        ...state,
        list: state.list.filter((item) => item.completion === false),
      };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload),
      };
    default:
      return state;
  }
};
