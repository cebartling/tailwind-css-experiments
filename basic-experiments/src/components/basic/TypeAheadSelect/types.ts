export interface Option {
  value: string;
  label: string;
}

export interface TypeAheadSelectProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

export interface State {
  query: string;
  displayValue: string;
  showDropdown: boolean;
}

export type Action =
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_DISPLAY_VALUE'; payload: string }
  | { type: 'SET_SHOW_DROPDOWN'; payload: boolean };
