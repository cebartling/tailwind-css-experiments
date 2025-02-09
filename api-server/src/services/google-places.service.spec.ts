import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { GooglePlacesService } from './google-places.service';

describe('GooglePlacesService', () => {
  let googlePlacesService: GooglePlacesService;
  // let configService: ConfigService;
  const configServiceGetSpy = jest.fn();

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GooglePlacesService,
        {
          provide: ConfigService,
          useValue: {
            get: configServiceGetSpy.mockReturnValue('fake-api-key'),
          },
        },
      ],
    }).compile();

    googlePlacesService = module.get<GooglePlacesService>(GooglePlacesService);
    // configService = module.get<ConfigService>(ConfigService);
  });

  it('should retrieve Google Maps API key from config service', async () => {
    const query = '123 Main St';
    const mockResponse = {
      predictions: [
        { place_id: '1', description: '123 Main St, City, Country' },
      ],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    await googlePlacesService.getSuggestions(query);

    expect(configServiceGetSpy).toHaveBeenCalledWith('GOOGLE_MAPS_API_KEY');
  });

  it('should return address suggestions for a valid query', async () => {
    const query = '123 Main St';
    const mockResponse = {
      predictions: [
        { place_id: '1', description: '123 Main St, City, Country' },
      ],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await googlePlacesService.getSuggestions(query);

    expect(result).toEqual([
      { id: '1', description: '123 Main St, City, Country' },
    ]);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.any(Object),
    );
  });

  it('should return an empty array if no suggestions are found', async () => {
    const query = 'unknown place';
    const mockResponse = { predictions: [] };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await googlePlacesService.getSuggestions(query);

    expect(result).toEqual([]);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.any(Object),
    );
  });

  it('should handle errors thrown by the fetch call', async () => {
    const query = 'error place';
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

    await expect(googlePlacesService.getSuggestions(query)).rejects.toThrow(
      'Fetch error',
    );
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.any(Object),
    );
  });
});
