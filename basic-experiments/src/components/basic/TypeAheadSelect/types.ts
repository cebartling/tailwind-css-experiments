export interface Option {
  value: string;
  label: string;
}

export interface TypeAheadSelectProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

export interface TypeAheadSelectState {
  query: string;
  displayValue: string;
  showDropdown: boolean;
}

export enum TypeAheadSelectActionTypes {
  SET_QUERY = 'SET_QUERY',
  SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE',
  SET_SHOW_DROPDOWN = 'SET_SHOW_DROPDOWN',
}

export type Action =
  | { type: TypeAheadSelectActionTypes.SET_QUERY; payload: string }
  | { type: TypeAheadSelectActionTypes.SET_DISPLAY_VALUE; payload: string }
  | { type: TypeAheadSelectActionTypes.SET_SHOW_DROPDOWN; payload: boolean };
