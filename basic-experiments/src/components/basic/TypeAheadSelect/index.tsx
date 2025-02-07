import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  Option,
  TypeAheadSelectActionTypes,
  TypeAheadSelectProps,
  TypeAheadSelectState,
} from '@components/basic/TypeAheadSelect/types';
import { reducer } from '@components/basic/TypeAheadSelect/reducer';

const initialState: TypeAheadSelectState = {
  query: '',
  displayValue: '',
  showDropdown: false,
  highlightedIndex: -1,
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
    dispatch({
      type: TypeAheadSelectActionTypes.SET_SHOW_DROPDOWN,
      payload: state.query.length > 0,
    });
  }, [state.query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: TypeAheadSelectActionTypes.SET_QUERY,
      payload: event.target.value,
    });
    dispatch({
      type: TypeAheadSelectActionTypes.SET_DISPLAY_VALUE,
      payload: event.target.value,
    });
  };

  const handleSelect = useCallback(
    (option: Option) => {
      dispatch({
        type: TypeAheadSelectActionTypes.SET_DISPLAY_VALUE,
        payload: option.label,
      });
      dispatch({
        type: TypeAheadSelectActionTypes.SET_SHOW_DROPDOWN,
        payload: false,
      });
      onSelect(option);
    },
    [onSelect]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      dispatch({
        type: TypeAheadSelectActionTypes.SET_HIGHLIGHTED_INDEX,
        payload: Math.min(
          state.highlightedIndex + 1,
          filteredOptions.length - 1
        ),
      });
    } else if (event.key === 'ArrowUp') {
      dispatch({
        type: TypeAheadSelectActionTypes.SET_HIGHLIGHTED_INDEX,
        payload: Math.max(state.highlightedIndex - 1, 0),
      });
    } else if (event.key === 'Enter' && state.showDropdown) {
      handleSelect(filteredOptions[state.highlightedIndex]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Start typing..."
        value={state.displayValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {state.showDropdown && (
        <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={`${option.value}-${index}`}
                className={`px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200 ${state.highlightedIndex === index ? 'bg-gray-300' : ''}`}
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
