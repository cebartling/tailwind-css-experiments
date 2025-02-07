import {Action, State} from "@components/basic/TypeAheadSelect/types.ts";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_DISPLAY_VALUE':
      return { ...state, displayValue: action.payload };
    case 'SET_SHOW_DROPDOWN':
      return { ...state, showDropdown: action.payload };
    default:
      return state;
  }
};
