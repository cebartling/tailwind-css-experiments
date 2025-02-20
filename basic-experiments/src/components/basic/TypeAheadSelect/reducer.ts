import {
  Action,
  TypeAheadSelectActionTypes,
  TypeAheadSelectState,
} from '@components/basic/TypeAheadSelect/types';

export const reducer = (
  state: TypeAheadSelectState,
  action: Action
): TypeAheadSelectState => {
  switch (action.type) {
    case TypeAheadSelectActionTypes.SET_QUERY:
      return { ...state, query: action.payload };
    case TypeAheadSelectActionTypes.SET_DISPLAY_VALUE:
      return { ...state, displayValue: action.payload };
    case TypeAheadSelectActionTypes.SET_SHOW_DROPDOWN:
      return { ...state, showDropdown: action.payload };
    case TypeAheadSelectActionTypes.SET_HIGHLIGHTED_INDEX:
      return { ...state, highlightedIndex: action.payload };
    default:
      return state;
  }
};
