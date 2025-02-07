import { reducer } from '@components/basic/TypeAheadSelect/reducer';
import {
  Action,
  TypeAheadSelectActionTypes,
  TypeAheadSelectState,
} from '@components/basic/TypeAheadSelect/types';
import { describe, expect, it } from 'vitest';

describe('TypeAheadSelect reducer', () => {
  it('should set query', () => {
    const initialState: TypeAheadSelectState = {
      query: '',
      displayValue: '',
      showDropdown: false,
      highlightedIndex: 0,
    };
    const action: Action = {
      type: TypeAheadSelectActionTypes.SET_QUERY,
      payload: 'test',
    };
    const newState = reducer(initialState, action);
    expect(newState.query).toBe('test');
  });

  it('should set display value', () => {
    const initialState: TypeAheadSelectState = {
      query: '',
      displayValue: '',
      showDropdown: false,
      highlightedIndex: 0,
    };
    const action: Action = {
      type: TypeAheadSelectActionTypes.SET_DISPLAY_VALUE,
      payload: 'test',
    };
    const newState = reducer(initialState, action);
    expect(newState.displayValue).toBe('test');
  });

  it('should set show dropdown', () => {
    const initialState: TypeAheadSelectState = {
      query: '',
      displayValue: '',
      showDropdown: false,
      highlightedIndex: 0,
    };
    const action: Action = {
      type: TypeAheadSelectActionTypes.SET_SHOW_DROPDOWN,
      payload: true,
    };
    const newState = reducer(initialState, action);
    expect(newState.showDropdown).toBe(true);
  });

  it('should set highlighted index', () => {
    const initialState: TypeAheadSelectState = {
      query: '',
      displayValue: '',
      showDropdown: false,
      highlightedIndex: 0,
    };
    const action: Action = {
      type: TypeAheadSelectActionTypes.SET_HIGHLIGHTED_INDEX,
      payload: 2,
    };
    const newState = reducer(initialState, action);
    expect(newState.highlightedIndex).toEqual(2);
  });
});
