import { Controller, Get, Logger, Query } from '@nestjs/common';
import { GooglePlacesService } from '../services/google-places.service';
import { AddressSuggestion } from '../types';

@Controller('places')
export class PlacesController {
  private readonly logger = new Logger('PlacesController');

  constructor(private readonly googlePlacesService: GooglePlacesService) {}

  @Get('address-suggestions')
  async getAddressSuggestions(
    @Query('query') query: string,
  ): Promise<AddressSuggestion[]> {
    this.logger.log(`Fetching address suggestions for query: ${query}`);
    return this.googlePlacesService.getSuggestions(query);
  }
}
