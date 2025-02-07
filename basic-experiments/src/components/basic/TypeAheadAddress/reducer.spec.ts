import { reducer } from '@components/basic/TypeAheadAddress/reducer';
import {
  Action,
  ActionType,
  State,
} from '@components/basic/TypeAheadAddress/types';
import { describe, expect, it } from 'vitest';

describe('TypeAheadAddress reducer', () => {
  it('should set input value', () => {
    const initialState: State = {
      inputValue: '',
      suggestions: [],
      isLoading: false,
    };
    const action: Action = { type: ActionType.SET_INPUT, value: 'test' };
    const newState = reducer(initialState, action);
    expect(newState.inputValue).toBe('test');
  });

  it('should set suggestions and stop loading', () => {
    const initialState: State = {
      inputValue: '',
      suggestions: [],
      isLoading: true,
    };
    const action: Action = {
      type: ActionType.SET_SUGGESTIONS,
      // @ts-expect-error Testing multiple suggestions
      suggestions: ['suggestion1', 'suggestion2'],
    };
    const newState = reducer(initialState, action);
    expect(newState.suggestions).toEqual(['suggestion1', 'suggestion2']);
    expect(newState.isLoading).toBe(false);
  });

  it('should set loading state', () => {
    const initialState: State = {
      inputValue: '',
      suggestions: [],
      isLoading: false,
    };
    const action: Action = { type: ActionType.SET_LOADING, isLoading: true };
    const newState = reducer(initialState, action);
    expect(newState.isLoading).toBe(true);
  });

  it('should select address and clear suggestions', () => {
    const initialState: State = {
      inputValue: '',
      // @ts-expect-error Testing suggestions
      suggestions: ['suggestion1'],
      isLoading: false,
    };
    const action: Action = {
      type: ActionType.SELECT_ADDRESS,
      value: 'selected address',
    };
    const newState = reducer(initialState, action);
    expect(newState.inputValue).toBe('selected address');
    expect(newState.suggestions).toEqual([]);
  });

  it('should return the same state for unknown action type', () => {
    const initialState: State = {
      inputValue: '',
      suggestions: [],
      isLoading: false,
    };
    // @ts-expect-error Testing unknown action type
    const action: Action = { type: 'UNKNOWN_ACTION', value: 'test' } as Action;
    const newState = reducer(initialState, action);
    expect(newState).toBe(initialState);
  });
});
