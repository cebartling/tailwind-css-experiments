import { reducer } from '@components/basic/TypeAheadSelect/reducer';
import { Action, State } from '@components/basic/TypeAheadSelect/types';
import { describe, expect, it } from 'vitest';

describe('TypeAheadSelect reducer', () => {
  it('should set query', () => {
    const initialState: State = {
      query: '',
      displayValue: '',
      showDropdown: false,
    };
    const action: Action = { type: 'SET_QUERY', payload: 'test' };
    const newState = reducer(initialState, action);
    expect(newState.query).toBe('test');
  });

  it('should set display value', () => {
    const initialState: State = {
      query: '',
      displayValue: '',
      showDropdown: false,
    };
    const action: Action = { type: 'SET_DISPLAY_VALUE', payload: 'test' };
    const newState = reducer(initialState, action);
    expect(newState.displayValue).toBe('test');
  });

  it('should set show dropdown', () => {
    const initialState: State = {
      query: '',
      displayValue: '',
      showDropdown: false,
    };
    const action: Action = { type: 'SET_SHOW_DROPDOWN', payload: true };
    const newState = reducer(initialState, action);
    expect(newState.showDropdown).toBe(true);
  });

  // it('should return the same state for unknown action type', () => {
  //   const initialState: State = {
  //     query: '',
  //     displayValue: '',
  //     showDropdown: false,
  //   };
  //   const action: Action = { type: 'UNKNOWN_ACTION', payload: 'test' };
  //   const newState = reducer(initialState, action);
  //   expect(newState).toBe(initialState);
  // });
});
