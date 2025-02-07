import { googleAddressAPI } from '@components/basic/TypeAheadAddress/services';
import { describe, expect, it, vi, Mock } from 'vitest';

describe('googleAddressAPI', () => {
  it('should fetch suggestions successfully', async () => {
    const mockResponse = {
      predictions: [
        { place_id: '1', description: 'Place 1' },
        { place_id: '2', description: 'Place 2' },
      ],
    };
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as Mock;

    const suggestions = await googleAddressAPI.fetchSuggestions('test');
    expect(suggestions).toEqual([
      { id: '1', description: 'Place 1' },
      { id: '2', description: 'Place 2' },
    ]);
  });

  it('should handle empty suggestions', async () => {
    const mockResponse = { predictions: [] };
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as Mock;

    const suggestions = await googleAddressAPI.fetchSuggestions('test');
    expect(suggestions).toEqual([]);
  });

  it('should handle fetch error', async () => {
    global.fetch = vi.fn(() =>
      Promise.reject(new Error('Fetch error'))
    ) as Mock;

    await expect(googleAddressAPI.fetchSuggestions('test')).rejects.toThrow(
      'Fetch error'
    );
  });
});
