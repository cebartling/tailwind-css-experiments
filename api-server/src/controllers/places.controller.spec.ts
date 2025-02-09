import { Test, TestingModule } from '@nestjs/testing';
import { PlacesController } from './places.controller';
import { GooglePlacesService } from '../services/google-places.service';
import { AddressSuggestion } from '../schemas/address-suggestion.schema';

describe('PlacesController', () => {
  let placesController: PlacesController;
  let googlePlacesService: GooglePlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesController],
      providers: [
        {
          provide: GooglePlacesService,
          useValue: {
            getSuggestions: jest.fn(),
          },
        },
      ],
    }).compile();

    placesController = module.get<PlacesController>(PlacesController);
    googlePlacesService = module.get<GooglePlacesService>(GooglePlacesService);
  });

  it('should return address suggestions for a valid query', async () => {
    const query = '123 Main St';
    const suggestions: AddressSuggestion[] = [
      {
        id: '252b44a3-0f4a-4118-9ff8-7a817608fa09',
        description: '123 Main St, City, Country',
      },
    ];
    jest
      .spyOn(googlePlacesService, 'getSuggestions')
      .mockResolvedValue(suggestions);

    const result = await placesController.getAddressSuggestions(query);

    expect(result).toEqual(suggestions);
    expect(googlePlacesService.getSuggestions).toHaveBeenCalledWith(query);
  });

  it('should return an empty array if no suggestions are found', async () => {
    const query = 'unknown place';
    jest.spyOn(googlePlacesService, 'getSuggestions').mockResolvedValue([]);

    const result = await placesController.getAddressSuggestions(query);

    expect(result).toEqual([]);
    expect(googlePlacesService.getSuggestions).toHaveBeenCalledWith(query);
  });

  it('should handle errors thrown by the GooglePlacesService', async () => {
    const query = 'error place';
    jest
      .spyOn(googlePlacesService, 'getSuggestions')
      .mockRejectedValue(new Error('Service error'));

    await expect(placesController.getAddressSuggestions(query)).rejects.toThrow(
      'Service error',
    );
    expect(googlePlacesService.getSuggestions).toHaveBeenCalledWith(query);
  });
});
