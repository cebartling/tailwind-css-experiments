import { AddressAPI } from '@components/basic/TypeAheadAddress/types.ts';

export const googleAddressAPI: AddressAPI = {
  fetchSuggestions: async (query: string) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=YOUR_GOOGLE_API_KEY`
    );
    const data = await response.json();
    return data.predictions.map(
      (p: {
        place_id: string;
        description: string;
      }): {
        id: string;
        description: string;
      } => ({
        id: p.place_id,
        description: p.description,
      })
    );
  },
};
