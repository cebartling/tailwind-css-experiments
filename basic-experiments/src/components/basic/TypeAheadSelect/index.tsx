import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  Option,
  TypeAheadSelectProps,
  TypeAheadSelectState,
} from '@components/basic/TypeAheadSelect/types';
import { reducer } from '@components/basic/TypeAheadSelect/reducer';

const initialState: TypeAheadSelectState = {
  query: '',
  displayValue: '',
  showDropdown: false,
};

const TypeAheadSelect: React.FC<TypeAheadSelectProps> = ({
  options,
  onSelect,
}: TypeAheadSelectProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredOptions = useMemo(() => {
    if (state.query.length > 0) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(state.query.toLowerCase())
      );
    }
    return [];
  }, [state.query, options]);

  useEffect(() => {
    dispatch({ type: 'SET_SHOW_DROPDOWN', payload: state.query.length > 0 });
  }, [state.query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_QUERY', payload: event.target.value });
    dispatch({ type: 'SET_DISPLAY_VALUE', payload: event.target.value });
  };

  const handleSelect = useCallback(
    (option: Option) => {
      dispatch({ type: 'SET_DISPLAY_VALUE', payload: option.label });
      dispatch({ type: 'SET_SHOW_DROPDOWN', payload: false });
      onSelect(option);
    },
    [onSelect]
  );

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Start typing..."
        value={state.displayValue}
        onChange={handleInputChange}
      />
      {state.showDropdown && (
        <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={`${option.value}-${index}`}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-lg"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default TypeAheadSelect;
