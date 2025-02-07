export type AddressSuggestion = {
  id: string;
  description: string;
};

export interface AddressAPI {
  fetchSuggestions: (query: string) => Promise<AddressSuggestion[]>;
}

// Define Action Types as an Enum
export enum ActionType {
  SET_INPUT = 'SET_INPUT',
  SET_SUGGESTIONS = 'SET_SUGGESTIONS',
  SET_LOADING = 'SET_LOADING',
  SELECT_ADDRESS = 'SELECT_ADDRESS',
}

export interface State {
  inputValue: string;
  suggestions: AddressSuggestion[];
  isLoading: boolean;
}

export type Action =
  | { type: ActionType.SET_INPUT; value: string }
  | { type: ActionType.SET_SUGGESTIONS; suggestions: AddressSuggestion[] }
  | { type: ActionType.SET_LOADING; isLoading: boolean }
  | { type: ActionType.SELECT_ADDRESS; value: string };

export interface TypeAheadAddressProps {
  addressAPI?: AddressAPI;
}
