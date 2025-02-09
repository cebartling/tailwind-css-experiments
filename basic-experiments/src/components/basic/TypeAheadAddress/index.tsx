import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import {
  ActionType,
  TypeAheadAddressProps,
} from '@components/basic/TypeAheadAddress/types';
import { defaultAddressAPI } from '@components/basic/TypeAheadAddress/services';
import { reducer } from '@components/basic/TypeAheadAddress/reducer';
import Input from '@components/basic/Input';
import CardContent from '@components/basic/TypeAheadAddress/CardContent';
import Card from '@components/basic/TypeAheadAddress/Card';

const initialState = {
  inputValue: '',
  suggestions: [],
  isLoading: false,
};

const TypeAheadAddress: React.FC<TypeAheadAddressProps> = ({
  addressAPI = defaultAddressAPI,
}: TypeAheadAddressProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const fetchSuggestions = useCallback(
    async (query: string) => {
      dispatch({ type: ActionType.SET_LOADING, isLoading: true });
      try {
        const results = await addressAPI.fetchSuggestions(query);
        dispatch({ type: ActionType.SET_SUGGESTIONS, suggestions: results });
      } catch (error) {
        console.error('Error fetching address suggestions:', error);
        dispatch({ type: ActionType.SET_SUGGESTIONS, suggestions: [] });
      }
    },
    [addressAPI]
  );

  useEffect(() => {
    if (state.inputValue.length < 3) {
      dispatch({ type: ActionType.SET_SUGGESTIONS, suggestions: [] });
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      fetchSuggestions(state.inputValue);
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [state.inputValue, fetchSuggestions]);

  return (
    <div className="relative w-full">
      <Input
        type="text"
        value={state.inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: ActionType.SET_INPUT, value: e.target.value })
        }
        placeholder="Enter an address"
        className="w-full"
      />

      {state.suggestions.length > 0 && (
        <Card className="absolute w-full mt-1 shadow-lg z-50">
          <CardContent className="p-2">
            {state.suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() =>
                  dispatch({
                    type: ActionType.SELECT_ADDRESS,
                    value: suggestion.description,
                  })
                }
              >
                {suggestion.description}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TypeAheadAddress;
