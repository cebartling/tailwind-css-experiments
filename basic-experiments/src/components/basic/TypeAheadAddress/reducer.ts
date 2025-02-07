import {Action, ActionType, State} from "@components/basic/TypeAheadAddress/types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_INPUT:
      return { ...state, inputValue: action.value };
    case ActionType.SET_SUGGESTIONS:
      return { ...state, suggestions: action.suggestions, isLoading: false };
    case ActionType.SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    case ActionType.SELECT_ADDRESS:
      return { ...state, inputValue: action.value, suggestions: [] };
    default:
      return state;
  }
};
