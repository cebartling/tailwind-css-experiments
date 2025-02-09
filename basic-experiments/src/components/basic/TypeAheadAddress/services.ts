import {AddressAPI, AddressSuggestion} from '@components/basic/TypeAheadAddress/types.ts';

export const defaultAddressAPI: AddressAPI = {
  fetchSuggestions: async (query: string): Promise<AddressSuggestion[]> => {
    const response = await fetch(
      `http://localhost:3000/places/address-suggestions?query=${query}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return await response.json() as AddressSuggestion[];
  },
};
