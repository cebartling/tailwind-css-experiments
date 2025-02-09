import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AddressSuggestion } from '../schemas/address-suggestion.schema';

@Injectable()
export class GooglePlacesService {
  private readonly logger = new Logger('GooglePlacesService');

  constructor(private configService: ConfigService) {}

  /**
   * Fetches address suggestions from Google Places API
   *
   * @param query - The query to search for
   */
  async getSuggestions(query: string): Promise<AddressSuggestion[]> {
    const apiKey = this.configService.get<string>('GOOGLE_MAPS_API_KEY');
    this.logger.log(`Fetching address suggestions for query: ${query}`);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    this.logger.log(`Fetched ${data.predictions.length} address suggestions`);
    return data.predictions.map(
      (p: { place_id: string; description: string }): AddressSuggestion =>
        ({
          id: p.place_id,
          description: p.description,
        }) as AddressSuggestion,
    );
  }
}
